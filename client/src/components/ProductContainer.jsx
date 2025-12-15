import { Link, Form } from 'react-router-dom';
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { useproductsContext } from '../pages/Allproducts';


import day from 'dayjs';

const productsContainer = () => {
  const { data: { products, totalproducts } } = useproductsContext();

  const hasproducts = totalproducts > 0;
  if (!hasproducts) {
    return (
      <h4 className='Product-count'> No products available </h4>
    );
  };

  return (

    <>
      <h5 className='Product-count' >
        {totalproducts} Product{totalproducts > 1 && 's'} found
      </h5>
      <div className='products-container'>

        {products.map(Product => {
          const { _id, position, company, ProductLocation, ProductType, createdAt, productstatus, createdBy } = Product;
          const date = day(createdAt).format('MMM DD, YYYY');

          return (

            <div key={_id} className='Product box-radius'>
              <header>
                <div className='main-icon'>{company.charAt(0)}</div>
                <div className='info'>
                  <h5>{position}</h5>
                  <p>{company}</p>
                </div>
              </header>
              <div className='content'>
                <div className='content-center'>

                  <div>
                    <span className='Product-icon'><FaLocationArrow /></span>
                    <span className='Product-text'>{ProductLocation}</span>
                  </div>

                  <div>
                    <span className='Product-icon'><FaCalendarAlt /></span>
                    <span className='Product-text'>{date}</span>
                  </div>

                  <div>
                    <span className='Product-icon' ><FaBriefcase /></span>
                    <span className='Product-text'>{ProductType}</span>
                  </div>

                  <div className={`status`}>{productstatus}</div>
                </div>
                <footer className='actions'>
                  <Link className='btn edit-btn' to={`./edit-Product/${_id}`} >Edit</Link>

                  {
                    createdBy === '68f29702a2e57c84a596d70e' ? (<Form >
                      <button type='submit' className='btn delete-btn' onClick={() => window.alert('Demo User Read Only')}>
                        Delete
                      </button></Form>) : (<Form method='post' action={`./delete-Product/${_id}`} onSubmit={(e) => {
                        if (!window.confirm("Are you sure you want to delete this Product?")) {
                          e.preventDefault();
                        }
                      }}>
                        <button type='submit' className='btn delete-btn' >
                          Delete
                        </button></Form>)
                  }

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

export default productsContainer;



