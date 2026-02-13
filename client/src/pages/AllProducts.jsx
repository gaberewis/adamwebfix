import { Link, useLoaderData, useSubmit, Form } from "react-router-dom";
import { useContext, createContext } from "react";
import { ProductContainer } from '../components';
import { useDashboardContext } from "./Dashboard";



const ProductsContext = createContext();

const Allproducts = () => {
  const submit = useSubmit();
  const { data, searchValues } = useLoaderData();
  const { search } = searchValues
  const { totalproducts } = data;
  const { logoutUser, user } = useDashboardContext();


  const debounce = (onChangeFunc) => {
    let timeOute;
    return (e) => {
      const formToSubmit = e.currentTarget.form;
      clearTimeout(timeOute);
      timeOute = setTimeout(() => {
        onChangeFunc(formToSubmit);
      }, 1200)

    }

  };



  return (

    <ProductsContext.Provider value={{ data, searchValues }}>
    <div className="search">
      <Form >
     
       
        <input
          type='search'
          name='search'
          className="form-input"
          defaultValue={search}
          onChange={debounce((form) => submit(form)) }
          placeHolder="search"
        />
      </Form></div>

<div className="p-container">
 <h5 className="p-count"> {totalproducts} product{totalproducts > 1 ? 's' : ''} found</h5>
      <ProductContainer />
</div>

    </ProductsContext.Provider>

  )
}

export const useproductsContext = () => useContext(ProductsContext);

export default Allproducts;

