
import { useLoaderData, useNavigate } from "react-router-dom";
import { FaCommentDollar } from "react-icons/fa";
import {
  PayPalScriptProvider,
  PayPalButtons,
} from "@paypal/react-paypal-js";
import axios from "axios";

const Checkout = () => {
  const navigate = useNavigate();
  const  { user }  = useLoaderData();
  
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

console.log(useLoaderData());
  const onApprove = async (data) => {
    try {
      const res = await axios.post("/api/pages/payments", {
        orderId: data.orderID,
        userId: user.userId,
      });

      if (res.data.success) {
        navigate("/dashboard");
      } else {
        console.log(res.data.msg);
      }
    } catch (err) {
      const errMsg = res.data.msg || 'payment faild';
      return {errMsg}
    }
  };


  return (
    <div>
   
      <div>
        <p >
          <b>Monthly Subscription</b>
        </p>

        <div>
          <FaCommentDollar
            size={80}
            color="#F2BA36"
          />
          <em>{amount}</em>
             <h5>hi {user?.name}</h5>
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











