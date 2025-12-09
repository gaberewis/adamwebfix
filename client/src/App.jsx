import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  AddProudct, AllProudcts, Admin, Dashboard, DeleteProudct,
  EditProudct, Landing, Login, Register, Profile, HomeLayout,
  Stats, Error
} from './pages'
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
     element: <Landing />,
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
    path: 'dashboard',
    element: <Dashboard />,
    loader: loader.dashboardloader,


    children: [
      {
        index: true,
        element: <AllProudcts />,
        loader: loader.allProudctsLoader
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
        path: 'profile',
        element: <Profile />,
        action: action.profileAction
      },
      {
        path: 'stats',
        element: <Stats />,
        loader: loader.satatsLoader,
        errorElement: <ErrorElement />

      },
      {
        path: 'admin',
        element: <Admin />,
        loader: loader.adminLoader
      },

    ]
  },

])


const App = () => {
  return <RouterProvider router={router} />
}
export default App;