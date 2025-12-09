import { Link, Form } from 'react-router-dom';
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { useProudctsContext } from '../pages/AllProudcts';


import day from 'dayjs';

const ProudctsContainer = () => {
  const { data: { Proudcts, totalProudcts } } = useProudctsContext();

  const hasProudcts = totalProudcts > 0;
  if (!hasProudcts) {
    return (
      <h4 className='Proudct-count'> No Proudcts available </h4>
    );
  };

  return (

    <>
      <h5 className='Proudct-count' >
        {totalProudcts} Proudct{totalProudcts > 1 && 's'} found
      </h5>
      <div className='Proudcts-container'>

        {Proudcts.map(Proudct => {
          const { _id, position, company, ProudctLocation, ProudctType, createdAt, ProudctStatus, createdBy } = Proudct;
          const date = day(createdAt).format('MMM DD, YYYY');

          return (

            <div key={_id} className='Proudct box-radius'>
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
                    <span className='Proudct-icon'><FaLocationArrow /></span>
                    <span className='Proudct-text'>{ProudctLocation}</span>
                  </div>

                  <div>
                    <span className='Proudct-icon'><FaCalendarAlt /></span>
                    <span className='Proudct-text'>{date}</span>
                  </div>

                  <div>
                    <span className='Proudct-icon' ><FaBriefcase /></span>
                    <span className='Proudct-text'>{ProudctType}</span>
                  </div>

                  <div className={`status`}>{ProudctStatus}</div>
                </div>
                <footer className='actions'>
                  <Link className='btn edit-btn' to={`./edit-Proudct/${_id}`} >Edit</Link>

                  {
                    createdBy === '68f29702a2e57c84a596d70e' ? (<Form >
                      <button type='submit' className='btn delete-btn' onClick={() => window.alert('Demo User Read Only')}>
                        Delete
                      </button></Form>) : (<Form method='post' action={`./delete-Proudct/${_id}`} onSubmit={(e) => {
                        if (!window.confirm("Are you sure you want to delete this Proudct?")) {
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

export default ProudctsContainer;



