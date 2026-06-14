import axios from "axios";
import Pages from '../models/pages.js';

export const capturePayment = async (req, res) => {
  try {
    const { orderId, userId } = req.body;

    // 1. Get Access Token
    const auth = await axios.post(
      "https://api-m.sandbox.paypal.com/v1/oauth2/token",
      "grant_type=client_credentials",
      {
        auth: {
          username: process.env.PAYPAL_CLIENT_ID,
          password: process.env.PAYPAL_SECRET,
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const accessToken = auth.data.access_token;

    // 2. Capture Payment
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
    console.log(data);

    // 3. Save to DB (example)
    const payment = await Pages.create({
      user : userId  ,
      orderId,
      transactionId: data.purchase_units[0].payments.captures[0].id,
      amount: data.purchase_units[0].payments.captures[0].amount.value,
      date : Date.now(),
    });



    // 4. Success
    return res.json({ success: true }, {payment});
  } catch (err) {
    console.log(err.response?.data || err.message);
    return res.status(500).json({
      success: false,
      msg: "Payment failed",
    });
  }
};