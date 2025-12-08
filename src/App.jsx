import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, PapularProducts } from './pages';


function App() {
  
const router = createBrowserRouter([
  {
    path : '/pnws', 
    element : < Home />,
    children : [{
      index : true,
      element : <PapularProducts />
    }]
  },
])
  return < RouterProvider router={router} />
}

export default App
