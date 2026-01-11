import { Link, Form } from 'react-router-dom';
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { useproductsContext } from '../pages/AllProducts';
import CssStl from '../css-pocket/ProductContainer';




const ProductContainer = () => {
  const { data } = useproductsContext();
const { products } = data;

  if (!products) {
    return (
      <h4 className='Product-count'> No products are available </h4>
    );
  };

  return (

    <CssStl>
      <div className='products-container'>

        {products.map(product => {
          const { _id, name, images, shortDescription, section, catagory, popular } = product;
          return (

            <div key={_id} className='Product box-radius'>
              <header>
              
                <div className='info'>
<div className='image-container'>
{images && 
    <img src={images[0].imageUrl}  alt='product image' />
}</div>
      <h5>{name}</h5>
                  <p>{shortDescription}</p>
                </div>
              </header>
              <div className='content'>
                <div className='content-center'>

                  <div>
                    <span className='Product-icon'><FaLocationArrow /></span>
                    <span className='Product-text'>{section}</span>
                  </div>

                  

                  <div>
                    <span className='Product-icon' ><FaBriefcase /></span>
                    <span className='Product-text'>{catagory}</span>
                  </div>

                  <div className={`status`}></div>
                </div>
                <footer className='actions'>
                  <Link className='btn edit-btn' to={`./edit-product/${_id}`} >Edit</Link>

                  <Form method='post' action={`./delete-product/${_id}`} onSubmit={(e) => {
                        if (!window.confirm("Are you sure you want to delete this Product?")) {
                          e.preventDefault();
                        }
                      }}>
                        <button type='submit' className='btn delete-btn' >
                          Delete
                        </button></Form>

                </footer>
              </div>

            </div>
          )
        })

        }
      </div>
    </CssStl>
  )
};

export default ProductContainer;