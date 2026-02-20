import { Link, Form } from 'react-router-dom';
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { useproductsContext } from '../pages/AllProducts';
import CssStl from '../css-pocket/ProductContainer';
import { useDashboardContext } from '../pages/Dashboard';
import { MdOutlineFullscreenExit } from "react-icons/md";

const ProductContainer = () => {
  const { data } = useproductsContext();
  const { user } = useDashboardContext();
  const { products, totalproducts, limit } = data;
  console.log(limit);
  const hasproducts = totalproducts > 0;

  if (!hasproducts) {
    return (  
      <h4 className='Product-count'> No products available </h4>
    );
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



      </div>
      {limit < totalproducts &&

      <Form className='load-more'> 
        <input type="text"  name="loadMore" value={limit + 20} hidden />
<button type='submit' className='btn' >Load More</button> 
</Form>
}
    </CssStl>
    
  )
};

export default ProductContainer;