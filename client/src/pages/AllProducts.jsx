import { useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";
import { ProudctsContainer, FilterContainer,PageContainer } from '../components';
import CssStl from '../css-pocket/ProudctContainer';

const ProudctsContext = createContext();

const AllProudcts = () => {
  const { data, searchValues } = useLoaderData();
  const { totalProudcts, pages } = data;
 

  return (
<CssStl>
    <ProudctsContext.Provider value={{ data, searchValues }}>
     
      <FilterContainer />
      <ProudctsContainer />
      {pages > 1 && <PageContainer />}
    </ProudctsContext.Provider>
</CssStl>
  )
}

export const useProudctsContext = () => useContext(ProudctsContext);

export default AllProudcts;