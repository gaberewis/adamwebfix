import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FaCommentDollar } from "react-icons/fa";
import {
  PayPalScriptProvider,
  PayPalButtons,
} from "@paypal/react-paypal-js";

const Checkout = () => {
  const  data   = useLoaderData();

  const [success, setSuccess] = useState(false);

  const mSubscription = "2.99";

  const onApprove = async (data, actions) => {
    const details = await actions.order.capture();

    const paymentDetails = {
      transactionid: data.orderID,
      pAmount: mSubscription,
      pDate: new Date(),
    };

    console.log(paymentDetails);

    setSuccess(true);
  };

  return (
    <div>
      <h1>{data}</h1>

      <div
        className="container col-md-4 offset-md-4 p-5 text-center mt-5 mb-2"
        style={{ height: "80vh" }}
      >
        <p className="mt-5 display-4">
          <b>Monthly Subscription</b>
        </p>

        <div
          className="mt-3 mb-3"
          style={{
            fontWeight: "600",
            fontSize: "95px",
            color: "#2C2E2F",
          }}
        >
          <FaCommentDollar
            size={80}
            color="#F2BA36"
            className="mb-4"
          />
          <em>{mSubscription}</em>
        </div>

        <PayPalScriptProvider
          options={{
            clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID,
          }}
        >
          <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: mSubscription,
                    },
                  },
                ],
              });
            }}
            onApprove={onApprove}
          />
        </PayPalScriptProvider>

        {success && (
          <div className="alert alert-success mt-3">
            Payment completed successfully
          </div>
        )}

        <p className="text-muted">
          One Year Subscription, ${mSubscription} Only, No Additional Fees
        </p>
      </div>
    </div>
  );
};

export default Checkout;