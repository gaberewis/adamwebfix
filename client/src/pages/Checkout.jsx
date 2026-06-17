
import { useLoaderData, useNavigate } from "react-router-dom";

import {
  PayPalScriptProvider,
  PayPalButtons,
} from "@paypal/react-paypal-js";
import axios from "axios";

const Checkout = () => {
  const navigate = useNavigate();
  const  { userId }  = useLoaderData();
  
  const amount = "2.99";

  const paymentAction = async (paymentDetails) => {
    try {
      await axios.post('/api/payments', paymentDetails);
      return { success: true }

    } catch (error) {
      console.log(error.response?.data?.msg);
      const errMsg = error.response?.data?.msg || "something want wrong";
      return { errMsg };
    }
  }

console.log(userId);
  const onApprove = async (data) => {
    try {
      const res = await axios.post("/api/pages/payments", {
        orderId: data.orderID,
        userId,
      });

      if (res.data.success) {
        navigate("/dashboard");
      } else {
        console.log(res.data.msg);
      }
    }  catch (err) {
  const errMsg = err.response?.data?.msg || "payment failed";
  console.log(errMsg);
  return { errMsg };
}
  };


  return (
    <div>
   
      <div>
        <p >
          <b>Monthly Subscription</b>
        </p>

        <div>
        
          <em>{amount}</em>
           
        </div>

        <PayPalScriptProvider
          options={{
           clientId: 'AYaqpt7Os8X56eDp_EMHgQNR6HWy2KGSsBhcy5J3dm7ZtjwIGXY_uZofgYIFBBKREW8d_rF7ChSmVzRX'
          }}
        >
          <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: { value: amount },
                  },
                ],
              });
            }}
            onApprove={onApprove}
          />


        </PayPalScriptProvider>
      </div>
    </div>
  );
};

export default Checkout;











