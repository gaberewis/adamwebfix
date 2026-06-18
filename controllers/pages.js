import axios from "axios";
import Pages from "../models/Pages.js";

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

    const payment = await Pages.create({
      user: userId,
      orderId,
      transactionId: capture.id,
      amount: capture.amount.value,
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
};

