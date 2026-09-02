import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  InstantPage, Login, Register,
  Dashboard, Landing, CreatePage, EditPage, Checkout, Page,
  ResetPassword, ForgetPassword, ClientMsg,
  MsgReceived, Error,


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
        path: 'checkout',
        element: <Checkout />,
        loader: loader.getUser,
      },
      {
        path: 'edit-page',
        element: <EditPage />
      },
    ]
  },
  {
    path: 'page',
    element: <Page />
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