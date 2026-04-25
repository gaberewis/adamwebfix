import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home, ClientForm, RequestReceived,
  AddProduct, AllProducts, Dashboard,
  EditProduct, Login, Register,
  Error, FullDescription, Methods
} from './pages';


import * as loader from './loaders';

import * as action from './actions';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    action: action.cleintForm,
    errorElement: <Error />,

  },

  {
    path: '/dashboard',
    element: <Dashboard />,
    loader: loader.dashboardloader,
    children: [

      {
        index: true,
        element: <AllProducts />,
        loader: loader.allproductsLoader,
      },
      {
        path: 'add-product',
        element: <AddProduct />,
        action: action.addProductAction


      },
      {
        path: 'edit-product/:id',
        element: <EditProduct />,
        loader: loader.editProductLoader,
        action: action.editAction


      },
      {
        path: 'full-description/:id',
        element: <FullDescription />,
        loader: loader.fullDescription
      },

      {
        path: 'delete-product/:id',
        action: action.deleteProductAction
      },
      {
        path: 'methods',
        element: <Methods />,
      },

    ]
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
    path: 'clientform',
    element: <ClientForm />,
    loader: loader.clientFormLoader,
  },
  {
    path: 'requestdone',
    element: <RequestReceived />
  }
  ,
  {
    path: 'admin-access',
    loader : loader.adminAccess,
   element : <p>Loading...</p>
  },

])


const App = () => {
  return <RouterProvider router={router} />
}
export default App;