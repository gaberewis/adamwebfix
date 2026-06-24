import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home, InstantPage, ClientMsg, MsgReceived,
 Login, Register, Checkout,  Dashboard, ForgetPassword,
  Error,

} from './pages';

import * as loader from './loaders';

import * as action from './actions';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    action: action.clientMsg,
    errorElement: <Error />,

  },
  {
    path : 'instantpage',
    element : <InstantPage />,
    action: action.clientMsg,
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
   element : <Checkout />,
   loader : loader.getUser,
  },
   {
    path: 'dashboard',
   element : <Dashboard />

  },
  {
    path : 'forgetpassword',
    element : <ForgetPassword />,
    action : action.forgetPassword
  }

]);


const App = () => {
  return <RouterProvider router={router} />
}
export default App;