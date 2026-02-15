import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home,
  AddProduct, AllProducts,Dashboard,
  EditProduct,  Login, Register, 
  Error,FullDescription
  
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
    path: '/dashboard',
    element: <Dashboard />,
     ErrorElement: <Error />,
    loader: loader.dashboardloader,
    children: [
     
      {
        index: true,
        element: <AllProducts />,
        loader: loader.allproductsLoader,
        action : action.LoadMore
      },
      {
        path: 'add-product',
        element: <AddProduct />,
  
      },
      {
        path: 'edit-product/:id',
        element: <EditProduct />,
        loader: loader.editProductLoader,
        action: action.editAction


      },
        {
      path: 'full-description/:id',
      element : <FullDescription />,
      loader : loader.fullDescription
     },
      
      {
        path: 'delete-product/:id',
        action: action.deleteProductAction
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