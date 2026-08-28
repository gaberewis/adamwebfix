import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home, InstantPage, ClientMsg, MsgReceived,
  Login, Register, Checkout, Dashboard, ForgetPassword,
  Error, ResetPassword, Landing

} from './pages';

import * as loader from './loaders';

import * as action from './actions';
import { Children } from "react";

const router = createBrowserRouter([
  {
    path: '/',
    element: <InstantPage />,
    loader: loader.getUser,
    action: action.clientMsg,
    errorElement: <Error />,

  },

  {
    path: 'checkout',
    element: <Checkout />,
    loader: loader.getUser,
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
    loader : loader.dashboard,
    children: [
      {
        index : true,
        element : <Landing />,
      }
    ]
},
  {
    path: 'forgetpassword',
    element: <ForgetPassword />,
    action: action.forgetPassword
  },
  {
    path: 'resetpassword',
    element : <ResetPassword />,
    action : action.resetPassword,

  },
    {
    path: 'register',
    element: <Register />,
    action: action.registerAction

  },
  {
    path: 'login',
    element: <Login />,
    action: action.loginAction,
  },
    {
    path: 'clientmsg',
    element: <ClientMsg />,
    loader: loader.clientMsg,
  },
  {
    path: 'requestdone',
    element: <MsgReceived />
  }

]);


const App = () => {
  return <RouterProvider router={router} />
}
export default App;