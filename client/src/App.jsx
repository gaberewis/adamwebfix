import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home, ClientMsg, MsgReceived,
 Login, Register,
  Error
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
    loader: loader.clientMsgLoader,
  },
  {
    path: 'requestdone',
    element: <MsgReceived />
  }

]);


const App = () => {
  return <RouterProvider router={router} />
}
export default App;