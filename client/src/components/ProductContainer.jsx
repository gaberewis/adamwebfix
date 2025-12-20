import { Link, Form } from 'react-router-dom';
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';



import day from 'dayjs';

const productContainer = () => {
  const { data: { products, totalproducts } } = useproductsContext();

  const hasproducts = totalproducts > 0;
  if (!hasproducts) {
    return (
      <h4 className='Product-count'> No products available </h4>
    );
  };

  return (

    <>
     
      <div className='products-container'>

        {products.map(Product => {
          const { _id, name, images, shortDescription, section, catagory, popular, createdAt } = Product;
          const date = day(createdAt).format('MMM DD, YYYY');

          return (

            <div key={_id} className='Product box-radius'>
              <header>
                <div className='main-icon'>{company.charAt(0)}</div>
                <div className='info'>
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
                    <span className='Product-icon'><FaCalendarAlt /></span>
                    <span className='Product-text'>{date}</span>
                  </div>

                  <div>
                    <span className='Product-icon' ><FaBriefcase /></span>
                    <span className='Product-text'>{catagory}</span>
                  </div>

                  <div className={`status`}>{popular}</div>
                </div>
                <footer className='actions'>
                  <Link className='btn edit-btn' to={`./edit-Product/${_id}`} >Edit</Link>

                  <Form method='post' action={`./delete-Product/${_id}`} onSubmit={(e) => {
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

export default productContainer;