import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home,
  AddProduct, Allproducts,Dashboard,
  EditProduct,  Login, Register, 
  Error,
  
} from './pages';
import { ErrorElement } from "./components";

import * as loader from './loaders';

import * as action from './actions';


const router = createBrowserRouter([
  {
     path: '/',
    element: <Home />,
    
  },

  {
    path: '/pnwx',
    element: <Dashboard />,
     ErrorElement: <Error />,
    loader: loader.dashboardloader,
    children: [
     
      {
        index: true,
        element: <Allproducts />,
        loader: loader.allproductsLoader
      },
      {
        path: 'add-Product',
        element: <AddProduct />,
        action: action.addProductAction,

      },
      {
        path: 'edit-Product/:id',
        element: <EditProduct />,
        loader: loader.editProductLoader,
        action: action.editAction


      },
      {
        path: 'delete-Product/:id',
        action: action.deleteProductAction
      },
     
      {
        path: 'admin',
        element: <Dashboard />,
        loader: loader.adminLoader
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

])


const App = () => {
  return <RouterProvider router={router} />
}
export default App;