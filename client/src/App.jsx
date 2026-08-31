import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  InstantPage, Login, Register,
  Dashboard,  Landing, CreatePage, Checkout,
  ResetPassword, ForgetPassword, ClientMsg,
  MsgReceived, Error,
  EditPage,

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
    loader: loader.dashboard,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'create-page',
        element: <CreatePage />
      },
      {
        path : 'edit-page',
        element : <EditPage />
      },
    ]
  },
  {
    path: 'forget-password',
    element: <ForgetPassword />,
    action: action.forgetPassword
  },
  {
    path: 'reset-password',
    element: <ResetPassword />,
    action: action.resetPassword,

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
    path: 'client-msg',
    element: <ClientMsg />,
    loader: loader.clientMsg,
  },
  {
    path: 'request-done',
    element: <MsgReceived />
  }

]);


const App = () => {
  return <RouterProvider router={router} />
}
export default App;