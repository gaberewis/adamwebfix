
import { useLoaderData, useNavigate } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import Stl from '../css-pocket/Checkout';


const Checkout = () => {
  const navigate = useNavigate();
  const { userId } = useLoaderData();


  const amount = "2.99";

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
    } catch (err) {
      console.log(err.response?.data);
    }
  };

  return (
    
    <Stl>
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
            clientId:
              "AY0hkrLmuQPwKm9bhx2JGuOQ5WXxkSSuUzKa087G3jGVHJtyIGZwChnysTGfnkF2w4nK_gbdhXZSGiZv",
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
    </Stl>
  );
};

export default Checkout;






// import { useLoaderData, useNavigate } from "react-router-dom";

// import {
//   PayPalScriptProvider,
//   PayPalButtons,
// } from "@paypal/react-paypal-js";
// import axios from "axios";

// const Checkout = () => {
//   const navigate = useNavigate();
//   const  { userId }  = useLoaderData();
  
//   const amount = "2.99";



//   const onApprove = async (data) => {
//     try {
     
//       const res = await axios.post('/api/pages/payments', {
//         orderId: data.orderID,
//         userId,
//       });

//       if (res.data.success) {
//         navigate("/dashboard");
//       } else {
//         console.log(res.data.msg);
//       }
//     } catch (err) {
//   console.log(err.response?.data);
// }
//   };


//   return (
//     <div>
   
//       <div>
    
//         <p >
//           <b>Monthly Subscription</b>
//         </p>

//         <div>
        
//           <em>{amount}</em>
           
//         </div>

//         <PayPalScriptProvider
//           options={{
//            clientId: 'AY0hkrLmuQPwKm9bhx2JGuOQ5WXxkSSuUzKa087G3jGVHJtyIGZwChnysTGfnkF2w4nK_gbdhXZSGiZv'
//           }}
//         >
//           <PayPalButtons
//             createOrder={(data, actions) => {
//               return actions.order.create({
//                 purchase_units: [
//                   {
//                     amount: { value: amount },
//                   },
//                 ],
//               });
//             }}
//             onApprove={onApprove}
//           />


//         </PayPalScriptProvider>
//       </div>
//     </div>
//   );
// };

// export default Checkout;











