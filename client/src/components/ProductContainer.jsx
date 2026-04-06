import { Link, Form } from 'react-router-dom';
import { useproductsContext } from '../pages/AllProducts';
import CssStl from '../css-pocket/ProductContainer';
import { useDashboardContext } from '../pages/Dashboard';
import { MdOutlineFullscreenExit } from "react-icons/md";

const ProductContainer = () => {
  const { data, searchValues } = useproductsContext();
  const { user } = useDashboardContext();
  const { products, totalproducts,popular, limit } = data;
 
  const hasproducts = totalproducts > 0;

  if (!hasproducts) {
    return (  
      <CssStl>
      <p className='Product-count'> No products available </p>
      </CssStl>
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
                

                <Link to={`./full-description/${_id}`}  className='f-description' ><span><MdOutlineFullscreenExit /></span> full description</Link>

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

      {searchValues.category &&
       <input type="hidden"  name="category" defaultValue={searchValues.category}  />
      }
      {searchValues.popular &&
      <input type="hidden" name="popular"  defaultValue={popular} />
      }

        <input type="hidden"  name="loadmore" defaultValue={limit + 20}  />
<button type='submit' className='btn' >Load More</button> 
</Form>
}
    </CssStl>
    
  )
};

export default ProductContainer;