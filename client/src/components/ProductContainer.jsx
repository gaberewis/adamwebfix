import { Link, Form } from 'react-router-dom';
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { useproductsContext } from '../pages/AllProducts';
import CssStl from '../css-pocket/ProductContainer';
import { useDashboardContext } from '../pages/Dashboard';
import { MdOutlineFullscreenExit } from "react-icons/md";
import { useState } from 'react';
import axios from 'axios';


const ProductContainer = () => {
  const { data } = useproductsContext();
  const { user } = useDashboardContext();
  const { products, totalproducts, limit } = data;
  const hasproducts = totalproducts > 0;

const[loadProducts, setLoadPruducts] = useState(true);

  const ispopular = products.map((product)=> product.popular === "yes");

  if (!hasproducts && !ispopular) {
    return (
      <h4 className='Product-count'> No products available </h4>
    );
  };

const moreProducts = async()=>{
if(limit > ispopular.length - 21 ){
  setLoadPruducts(!loadProducts);
  return;
}
   const loadMore = limit + 20;
  await axios.get('/api/pnwx/products', { loadMore });
};


  return (

    <CssStl>

      <div className='products-container'>

     { products.map(product => {
          const { _id, name, images, shortDescription} = product;


          return (

            <div key={_id} className='Product box-radius'>
              <header>

                <div className='info'>
                  <div className='image-container'>
                    <img
                      src={images?.[0]?.imageUrl || "/bgimage.jpg"}
                      alt="product image"
                    />
                  </div>


                  <h5>{name}</h5>
                  <p>{shortDescription}</p>
                </div>
              </header>
              <div className='content'>
                

                <Link to={`./full-description/${_id}`} ><span><MdOutlineFullscreenExit /></span> full description</Link>

                {user && <footer className='actions'>
                  <Link className='btn edit-btn' to={`./edit-product/${_id}`} >Edit</Link>

                  <Form method='post' action={`./delete-product/${_id}`} onSubmit={(e) => {
                    if (!window.confirm("Are you sure you want to delete this Product?")) {
                      e.preventDefault();
                    }
                  }}>
                    <button type='submit' className='btn delete-btn' >
                      Delete
                    </button></Form>

                </footer>} 

              </div>

            </div>
          )
        })

        }

{loadProducts &&

      
      
<button type='submit' className='btn' onClick={moreProducts} >Load More</button> 

}

      </div>
    </CssStl>
  )
};

export default ProductContainer;