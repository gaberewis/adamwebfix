import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home, InstantPage, ClientMsg, MsgReceived,
  Login, Register, Checkout, Dashboard, ForgetPassword,
  Error, ResetPassword,

} from './pages';

import * as loader from './loaders';

import * as action from './actions';

const router = createBrowserRouter([
  {
    path: '/',
    element: <InstantPage />,
    loader: loader.getUser,
    action: action.clientMsg,
    errorElement: <Error />,

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
  ,
  {
    path: 'checkout',
    element: <Checkout />,
    loader: loader.getUser,
  },
  {
    path: 'dashboard',
    element: <Dashboard />

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

  }

]);


const App = () => {
  return <RouterProvider router={router} />
}
export default App;