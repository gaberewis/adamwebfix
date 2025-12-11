import { useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";
import { productsContainer, FilterContainer,PageContainer } from '../components';
import CssStl from '../css-pocket/ProudctContainer';

const productsContext = createContext();

const Allproducts = () => {
  const { data, searchValues } = useLoaderData();
  const { totalproducts, pages } = data;
 

  return (
<CssStl>
    <productsContext.Provider value={{ data, searchValues }}>
     
      <FilterContainer />
      <productsContainer />
      {pages > 1 && <PageContainer />}
    </productsContext.Provider>
</CssStl>
  )
}

export const useproductsContext = () => useContext(productsContext);

export default Allproducts;