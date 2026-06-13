
import { useLoaderData, useNavigate } from "react-router-dom";
import { FaCommentDollar } from "react-icons/fa";
import {
  PayPalScriptProvider,
  PayPalButtons,
} from "@paypal/react-paypal-js";
import axios from "axios";

const Checkout = () => {
  const navigate = useNavigate();

  const paymentAction = async (paymentDetails) => {
    try {
      await axios.post('/api/payments', paymentDetails);
      return{success : true}

    } catch (error) {
      console.log(error.response?.data?.msg);
      const errMsg = error.response?.data?.msg || "something want wrong";
      return { errMsg };
    }
  }
  const user = useLoaderData();
  const mSubscription = "00.10";

const onApprove = async (data, actions) => {
  try {
    const details = await actions.order.capture();

    const paymentDetails = {
      transactionId: data.orderID,
      amount: details.purchase_units[0].amount.value,
      pDate: new Date(),
      userId: user.userId,
    };

    const result = await paymentAction(paymentDetails);

    if (!result.success) {
      console.log(result.errMsg)
      return;
    }
    navigate("/dashboard");
  } catch (error) {
    console.error(error);
    alert("Payment processing failed");
  }
};







  return (
    <div>
      <h5>hi {user.userId}</h5>
      <div>
        <p >
          <b>Monthly Subscription</b>
        </p>

        <div>
          <FaCommentDollar
            size={80}
            color="#F2BA36"
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
            onError={(err) => {
              console.error(err);
            }}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  );
};

export default Checkout;











