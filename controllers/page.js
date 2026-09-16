import axios from "axios";
import Page from "../models/Page.js";
import cloudinary from 'cloudinary';
import { formatImage } from '../middleware/multer.js';
import { param } from "express-validator";






export const createPage = async (req, res) => {
  try {

    let uploadedImages = [];
    const files = req.files || [];
    if (files && files.length > 0) {
      uploadedImages = await Promise.all(
        req.files.map((image) => {
          return cloudinary.v2.uploader.upload(
            formatImage(image)
          );
        })
      );
    }

    req.body.images = uploadedImages.map((img) => ({
      imageUrl: img.secure_url,
      imageId: img.public_id,
    }));

    req.body.specification = JSON.parse(req.body.specification);


    const page = await Page.create(req.body);

    res.status(201).json({
      msg: "page created",
      page,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      msg: "Failed to create page",
      error: error.message,
    });
  }
};



export const editPage = async (req, res) => {
  try {
    const { id } = req.params;

    let updateData = { ...req.body };

    // Parse specification
    if (updateData.specification) {
      updateData.specification = JSON.parse(updateData.specification);
    }

    // Only update images if new images were uploaded
    const files = req.files || [];

    if (files.length > 0) {
      const uploadedImages = await Promise.all(
        files.map((image) =>
          cloudinary.v2.uploader.upload(formatImage(image))
        )
      );

      updateData.images = uploadedImages.map((img) => ({
        imageUrl: img.secure_url,
        imageId: img.public_id,
      }));
    }

    const page = await Page.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
      
      }
    );

    if (!page) {
      return res.status(404).json({
        msg: "Page not found",
      });
    }

    res.status(200).json({
      msg: "Page updated",
      page,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      msg: "Failed to update page",
      error: error.message,
    });
  }
};










export const getPage = async (req, res) => {
  const { id } = req.params;
  const page = await Page.findById(id);
  const pages = await Page.find({ userid: page.userid });

  res.status(200).json({ page, pages });
};



























export const capturePayment = async (req, res) => {
  try {
    const { orderId, userId } = req.body;

    const auth = await axios.post(
      "https://api-m.sandbox.paypal.com/v1/oauth2/token",
      "grant_type=client_credentials",
      {
        auth: {
          username: 'AY0hkrLmuQPwKm9bhx2JGuOQ5WXxkSSuUzKa087G3jGVHJtyIGZwChnysTGfnkF2w4nK_gbdhXZSGiZv',
          password: process.env.PAYPAL_SECRET,
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const accessToken = auth.data.access_token;

    const response = await axios.post(
      `https://api-m.sandbox.paypal.com/v2/checkout/orders/${orderId}/capture`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    const data = response.data;

    const capture = data?.purchase_units?.[0]?.payments?.captures?.[0];

    if (!capture) {
      return res.status(400).json({
        success: false,
        msg: "No capture found",
        data,
      });
    }

    const payment = await Page.create({
      userId,
      transactionId: capture.id,
      paymentDate: Date.now(),
    });

    return res.json({
      success: true,
      payment,
    });

  } catch (err) {
    console.log(err.response?.data || err.message);

    return res.status(500).json({
      success: false,
      msg: err.response?.data || err.message,
    });
  }
}
