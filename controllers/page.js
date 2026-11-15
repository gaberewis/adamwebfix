import axios from "axios";
import Page from "../models/Page.js";
import cloudinary from 'cloudinary';
import { formatImage } from '../middleware/multer.js';
import { CustomError } from "../middleware/errorHandler.js";


export const createPage = async (req, res) => {
  const updateData = { ...req.body };
  let uploadedImages = [];
  let results = [];
  try {

    const files = req.files || [];

    if (files && files.length > 0) {
      results = await Promise.allSettled(
        files.map((image) => {
          return cloudinary.v2.uploader.upload(
            formatImage(image)
          )
        }))
    }

    uploadedImages = results.filter(result => result.status === "fulfilled")
      .map(result => result.value);

    if (uploadedImages.length !== files.length) throw new Error("Some images faild to upload");

    updateData.images = uploadedImages.map((img) => ({
      imageUrl: img.secure_url,
      imageId: img.public_id,
    }));

    if (updateData.specification !== undefined) {
      updateData.specification = JSON.parse(updateData.specification);
    }

    await Page.create(updateData);

    res.status(201).json({ msg: "page created" });

  } catch (error) {
    if (uploadedImages.length > 0) {
      await Promise.allSettled(
        uploadedImages.map(image => cloudinary.v2.uploader.destroy(image.public_id)));
    };

    console.log(error.message);
    res.status(error.statusCode || 500)
      .json({ msg: "Failed to create page", error: error.message, });
  }
};


export const editPage = async (req, res) => {
  let uploadedImages = [];
  let updateSucceeded = false;
  try {
    const { id } = req.params;

    let updateData = { ...req.body };

    if (updateData.specification !== undefined) {
      updateData.specification = JSON.parse(updateData.specification);
    }

    const files = req.files || [];

    if (files.length > 0) {
      const results = await Promise.allSettled(
        files.map((image) =>
          cloudinary.v2.uploader.upload(formatImage(image))
        )
      );

      uploadedImages = results.filter(result => result.status === "fulfilled")
        .map(result => result.value);

      if (uploadedImages.length !== files.length)
        throw new Error("Some images faild to upload");

      updateData.images = uploadedImages.map((img) => ({
        imageUrl: img.secure_url,
        imageId: img.public_id,
      }));
    }

    const page = await Page.findByIdAndUpdate(
      id,
      updateData,
      { new: false, runValidators: true }
    );

    if (!page) {
      throw new CustomError(404, "Page not found");
    }

    updateSucceeded = true;

    if (files.length > 0 && page.images?.length > 0) {
      await Promise.allSettled(
        page.images.map((image) =>
          cloudinary.v2.uploader.destroy(image.imageId)
        )
      );
    }

    res.status(200).json({ msg: "Page updated" });

  } catch (error) {

    if (!updateSucceeded && uploadedImages.length > 0) {
      await Promise.allSettled(uploadedImages.map(image =>
        cloudinary.v2.uploader.destroy(image.public_id)
      ))
    }

    console.log(error.message);
    res.status(error.statusCode || 500).json({
      msg: "Failed to update page",
      error: error.message,
    });
  }
};



export const getPage = async (req, res) => {
  const { id } = req.params;
  const page = await Page.findById(id).lean();
  if (!page) throw new CustomError(404, 'Page not found');
  const pages = await Page.find({ userid: page.userid }).lean();
  res.status(200).json({ page, pages });
};


export const changeStatus = async (req, res) => {
  const { status } = req.body;
  const isStatus = ["active", "inactive", "deactivated", "blocked"];
  if(!isStatus.includes(status)) throw new CustomError(400, 'Invalid status');
  const page = await Page.findByIdAndUpdate(req.params.id,
    { status }, { new: true  });
  if (!page) throw new CustomError(404, 'page not found');
  res.status(200).json({ msg: "Page status changed" });
}

export const delPage = async (req, res) => {
  try {
    const page = await Page.findById(req.params.id);
    if(!page)throw new CustomError(404,'Page not found');
    const imageIds = page.images?.map(image => image.imageId);
     await Page.findByIdAndDelete(req.params.id);
    if (page.images?.length > 0) {
      await Promise.allSettled(
        imageIds.map(imageId => cloudinary.v2.uploader.destroy(imageId))
      )
    }
    res.status(200).json({
      msg: "Page deleted"
    });

  } catch (error) {
    res.status(error.statusCode || 500).json({
      msg: error.message
    });
  }
};





export const reportpage = async (req, res) => {
  try {
    const page = await Page.findByIdAndUpdate(
      req.params.id,
      {
        $push: { report: req.body.report },
        $inc: { reported: 1 }
      },
      { new: true }
    );

    if (!page) {
      return res.status(404).json({
        msg: "Page not found"
      });
    }

    console.log("Page has been reported");

    return res.status(200).json({
      msg: "Page has been reported"
    });
  } catch (error) {
    console.error("Report error:", error);

    return res.status(500).json({
      msg: "Failed to report page"
    });
  }
};




export const capturePayment = async (req, res) => {
  try {
    const { orderId, pageId } = req.body;

    if (!orderId || !pageId) {
      throw new CustomError(400, "Order ID and Page ID are required");
    }

    // 1. Get PayPal access token
    const auth = await axios.post(
      "https://api-m.sandbox.paypal.com/v1/oauth2/token",
      "grant_type=client_credentials",
      {
        auth: {
          username: "AY0hkrLmuQPwKm9bhx2JGuOQ5WXxkSSuUzKa087G3jGVHJtyIGZwChnysTGfnkF2w4nK_gbdhXZSGiZv",
          password: process.env.PAYPAL_SECRET,
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const accessToken = auth.data.access_token;

    const paypalHeaders = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    };

    // 2. Check the PayPal order status
    const existingOrder = await axios.get(
      `https://api-m.sandbox.paypal.com/v2/checkout/orders/${orderId}`,
      {
        headers: paypalHeaders,
      }
    );

    let data;

    // 3. Handle an already completed payment
    if (existingOrder.data.status === "COMPLETED") {
      data = existingOrder.data;

    } else if (existingOrder.data.status === "APPROVED") {

      // 4. Capture the payment
      try {
        const response = await axios.post(
          `https://api-m.sandbox.paypal.com/v2/checkout/orders/${orderId}/capture`,
          {},
          {
            headers: {
              ...paypalHeaders,

              // Same ID for retries of this order
              "PayPal-Request-Id": `capture-${orderId}`,
            },
          }
        );

        data = response.data;

      } catch (captureError) {

        // 5. Capture request failed.
        // Check whether PayPal actually completed the payment.

        const recovery = await axios.get(
          `https://api-m.sandbox.paypal.com/v2/checkout/orders/${orderId}`,
          {
            headers: paypalHeaders,
          }
        ).catch(() => null);

        if (recovery?.data?.status === "COMPLETED") {
          data = recovery.data;

        } else {
          throw captureError;
        }
      }

    } else {
      throw new CustomError(
        400,
        `Order cannot be captured. Current status: ${existingOrder.data.status}`
      );
    }

    // 6. Extract capture information
    const capture =
      data?.purchase_units?.[0]?.payments?.captures?.[0];

    if (!capture) {
      throw new CustomError(400, "No capture found");
    }

    // 7. Verify capture status
    if (capture.status !== "COMPLETED") {
      throw new CustomError(400, "Payment was not completed");
    }

    // 8. Extract payment breakdown
    const breakdown = capture.seller_receivable_breakdown;

    const paymentData = {
      orderId: data.id,
      captureId: capture.id,
      status: capture.status,

      currency: capture.amount.currency_code,

      grossAmount: Number(
        breakdown?.gross_amount?.value || capture.amount.value
      ),

      paypalFee: Number(
        breakdown?.paypal_fee?.value || 0
      ),

      netAmount: Number(
        breakdown?.net_amount?.value || capture.amount.value
      ),

      payerId: data.payer?.payer_id,
      payerEmail: data.payer?.email_address,

      payerName: data.payer?.name
        ? `${data.payer.name.given_name || ""} ${
            data.payer.name.surname || ""
          }`.trim()
        : undefined,

      sellerProtection: capture.seller_protection?.status,

      captureDate: new Date(capture.create_time),
    };

    // 9. Save payment and activate page
    const addPayment = await Page.findOneAndUpdate(
      {
        _id: pageId,

        // Prevent duplicate capture
        "paymentData.captureId": {
          $ne: capture.id,
        },
      },
      {
        $set: {
          status: "active",
        },

        $push: {
          paymentData,
        },
      },
      {
        new: true,
        runValidators: true,
      }
    );

    // 10. Handle failed update or duplicate capture
    if (!addPayment) {

      // Check whether the page exists
      const pageExists = await Page.exists({
        _id: pageId,
      });

      if (!pageExists) {
        throw new CustomError(404, "Page not found");
      }

      // Payment was already recorded
      const duplicate = await Page.findOne({
        _id: pageId,
        "paymentData.captureId": capture.id,
      });

      if (duplicate) {
        return res.json({
          success: true,
          msg: "Payment already recorded",
          addPayment: duplicate,
        });
      }

      throw new CustomError(
        500,
        "Payment completed but database update failed"
      );
    }

    // 11. Successful payment
    return res.json({
      success: true,
      msg: "Payment completed successfully",
      addPayment,
    });

  } catch (err) {

    console.log(
      err.response?.data || err.message
    );

    return res.status(err.statusCode || 500).json({
      success: false,
      msg: err.response?.data || err.message,
    });
  }
};


