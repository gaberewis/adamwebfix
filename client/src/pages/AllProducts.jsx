import { useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";
import { ProductContainer } from '../components';
import CssStl from '../css-pocket/PageContainer';

const ProductsContext = createContext();

const Allproducts = () => {
  const { data, searchValues } = useLoaderData();
  const { totalproducts } = data;

   if(!data){
    return <h4>Lodding data ....</h4>
  }

   if (!data) {
    return (
      <h4 className='Product-count'> No products are available</h4>
    );
  };

 

  return (
<CssStl>
    <ProductsContext.Provider value={{ data, searchValues }}>
      <input type="search" name='search' id='search' defaultValue='a' />
      <h5> {totalproducts} product{totalproducts > 1 ? 's' : ''} found</h5>
      <ProductContainer />
     
    </ProductsContext.Provider>
</CssStl>
  )
}

export const useproductsContext = () => useContext(ProductsContext);

export default Allproducts;