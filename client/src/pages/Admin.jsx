import { FaSuitcaseRolling, FaCalendarCheck } from 'react-icons/fa';
import { useLoaderData, redirect } from 'react-router-dom';
import CssStl from '../css-pocket/Admin';

const Admin = () => {
  const { Proudcts, users } = useLoaderData();
  return (
    <CssStl >
    
        <div className=' stat-container'>
          <header>
           <h2> <span className='count'>{users}</span>
            <span className='icon'><FaSuitcaseRolling /></span></h2>
          </header>
          <h2 className='a-title'>Users</h2>
        </div>
        <div className='stat-container' >
          <header>
           <h2><span className='count'>{Proudcts}</span>
            <span className='icon'><FaCalendarCheck /></span></h2>
            
          </header>
          <h2 className='a-title'>Proudcts</h2>
        </div>
    
     
    </CssStl>
  );
}
export default Admin;