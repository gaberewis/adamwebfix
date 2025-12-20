import { useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";
import { ProductContainer,ButtonsContainer } from '../components';
import CssStl from '../css-pocket/ProductContainer';

const ProductsContext = createContext();

const Allproducts = () => {
  const { data, searchValues } = useLoaderData();
  const { totalproducts, pages } = data;
 

  return (
<CssStl>
    <ProductsContext.Provider value={{ data, searchValues }}>
      <input type="search" name='search' id='search' defaultValue='a' />
      <h5> {totalproducts} product{totalproducts > 1 ? 's' : ''} found</h5>
      <ProductContainer />
      {pages > 1 && <ButtonsContainer />}
    </ProductsContext.Provider>
</CssStl>
  )
}

export const useproductsContext = () => useContext(ProductsContext);

export default Allproducts;