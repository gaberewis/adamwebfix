
import { useLoaderData, useNavigate } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import Stl from '../css-pocket/checkouts';
import { Navbar } from "../components"; 


const Checkout = () => {
  const navigate = useNavigate();
  const { page } = useLoaderData();
console.log(page._id);

  const amount = "2.99";

  const onApprove = async (data) => {
    try {
      const res = await axios.post("/api/page/payments", {
        orderId: data.orderID,
        pageId : page._id,
      });

      if (res.data.success) {
        navigate("/dashboard");
      } else {
        console.log(res.data.msg);
      }
    } catch (err) {
      console.log(err.response?.data);
    }
  };

  return (
    
    <Stl>
    <div className="main">
      <div className='card'>
        <div className="title">Subscription Checkout</div>

        <div className="planSection">
          <div className="plan-title">Monthly Subscription</div>

          <div className="price">${amount}</div>

        </div>

        <div className="security-text">
          All payments are securely processed through PayPal.
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
                      value: amount,
                    },
                  },
                ],
              });
            }}
            onApprove={onApprove}
          />
        </PayPalScriptProvider>
      </div>
      </div>
    </Stl>
  );
};

export default Checkout;

















