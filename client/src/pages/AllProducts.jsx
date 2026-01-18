import { Link, useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";
import { ProductContainer } from '../components';
import { useDashboardContext } from "./Dashboard";
//import CssStl from '../css-pocket/ProductContainer';

const ProductsContext = createContext();

const Allproducts = () => {
  const { data, searchValues } = useLoaderData();
  const { totalproducts } = data;
  const { logoutUser, user } = useDashboardContext();

  return (

    <ProductsContext.Provider value={{ data, searchValues }}>
      <button className="btn"><Link to='/dashboard/add-product' >Add product</Link></button>
      <input type="search" name='search' id='search' defaultValue='a' />
      <h5> {totalproducts} product{totalproducts > 1 ? 's' : ''} found</h5>
      {user &&   (<><button className="btn" onClick={logoutUser}>logout</button>
      <h1>{user?.name}</h1></>)}
    
      <ProductContainer />
     
    </ProductsContext.Provider>

  )
}

export const useproductsContext = () => useContext(ProductsContext);

export default Allproducts;