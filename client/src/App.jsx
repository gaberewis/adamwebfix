import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  AddProudct, Allproducts, Admin, Dashboard,
   Equipment, Accessories, 
  Accessories, Parts,
  EditProudct,  Login, Register, 
  Error
} from './pages';
import { ErrorElement } from "./components";

import * as loader from './loaders';

import * as action from './actions';

export const checkIsDark = () => {
  const isDarkTheme =
    localStorage.getItem('darkTheme') === 'true'
  document.body.classList.toggle('dark-theme', isDarkTheme);
  return isDarkTheme;
};
checkIsDark();

const router = createBrowserRouter([

  {
    path: '/',
    element: <Dashboard />,
    loader: loader.dashboardloader,
     ErrorElement: <Error />,

    children: [
         {
        index: 'equipment',
        element: <Equipment />,
       
      },
         {
        index: 'accessories',
        element: <Accessories />,
       
      },
         {
        index: 'supplies',
        element: <Supplies />,
       
      },
            {
        index: 'parts',
        element: <Parts />,
       
      },
      {
        index: true,
        element: <Allproducts />,
        loader: loader.allproductsLoader
      },
      {
        path: 'add-Proudct',
        element: <AddProudct />,
        action: action.addProudctAction,

      },
      {
        path: 'edit-Proudct/:id',
        element: <EditProudct />,
        loader: loader.editProudctLoader,
        action: action.editAction


      },
      {
        path: 'delete-Proudct/:id',
        action: action.deleteProudctAction
      },
     
      {
        path: 'admin',
        element: <Admin />,
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