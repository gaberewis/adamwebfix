import { Link, Form } from 'react-router-dom';
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { useproductsContext } from '../pages/AllProducts';




const ProductContainer = () => {
  const { data } = useproductsContext();
const { products, totalproducts } = data;
  const hasproducts = totalproducts > 0;
  if (!hasproducts) {
    return (
      <h4 className='Product-count'> No products available </h4>
    );
  };

  return (

    <>
     
      <div className='products-container'>

        {products.map(product => {
          const { _id, name, images, shortDescription, section, catagory, popular } = product;


          return (

            <div key={_id} className='Product box-radius'>
              <header>
              
                <div className='info'>

{/* {images && images.map((image)=>{
   return <img src={image.imageUrl}  alt='product image' key={image._id} />
}) } */}

{images && images.length > 0 &&
    <img src={images[0].imageUrl || '#'}  alt='product image' />
 }


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
    </>
  )
};

export default ProductContainer;