
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  InstantPage,
  Login,
  Register,
  Dashboard,
  Landing,
  CreatePage,
  EditPage,
  Checkout,
  Page,
  EditUser,
  ResetPassword,
  ForgetPassword,
  ClientMsg,
  MsgReceived,
  Error,
} from "./pages";

import * as loader from "./loaders";
import * as action from "./actions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <InstantPage />,
    loader: loader.getUser,
    action: action.clientMsg,
    errorElement: <Error />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    loader: loader.getUser,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "create-page",
        element: <CreatePage />,
        action: action.createPage,
      },
      {
        path: "checkout/:id",
        element: <Checkout />,
        loader: loader.getPage,
      },
      {
        path: "edit-page/:id",
        element: <EditPage />,
        loader: loader.getPage,
        action: action.editPage,
      },
      {
        path: "edit-user/:id",
        element: <EditUser />,
        action: action.editUser,
      },
    ],
  },
  {
    path: "instant-page/:id",
    element: <Page />,
    loader: loader.getPage,
    action: action.reportPage,
    errorElement: <Error />,
  },
  {
    path: "forget-password",
    element: <ForgetPassword />,
    action: action.forgetPassword,
    errorElement: <Error />,
  },
  {
    path: "reset-password",
    element: <ResetPassword />,
    action: action.resetPassword,
    errorElement: <Error />,
  },
  {
    path: "register",
    element: <Register />,
    action: action.registerAction,
    errorElement: <Error />,
  },
  {
    path: "login",
    element: <Login />,
    action: action.loginAction,
    errorElement: <Error />,
  },
  {
    path: "client-msg",
    element: <ClientMsg />,
    loader: loader.clientMsg,
    errorElement: <Error />,
  },
  {
    path: "request-done",
    element: <MsgReceived />,
    errorElement: <Error />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
