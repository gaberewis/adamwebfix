import { Link, useLoaderData, useSubmit, Form } from "react-router-dom";
import { useContext, createContext } from "react";
import { ProductContainer } from '../components';
import { useDashboardContext } from "./Dashboard";
//import CssStl from '../css-pocket/ProductContainer';

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
            }, 2000)

        }

    };



  return (

    <ProductsContext.Provider value={{ data, searchValues }}>
      <Form className='form' action={`/dashboard?search=${search}`}>
           <input
                            type='search'
                            name='search'
                            defaultValue={search}
                            onChange={debounce((form)=> submit(form))}
                        />
      </Form>

      <button className="btn"><Link to='/dashboard/add-product' >Add product</Link></button>

      <h5> {totalproducts} product{totalproducts > 1 ? 's' : ''} found</h5>
      {user && (<><button className="btn" onClick={logoutUser}>logout</button>
        <h1>{user?.name}</h1></>)}

      <ProductContainer />

    </ProductsContext.Provider>

  )
}

export const useproductsContext = () => useContext(ProductsContext);

export default Allproducts;

