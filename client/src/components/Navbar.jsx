import CssStl from '../css-pocket/Navbar';
import { useState } from 'react';
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import { useDashboardContext } from '../pages/Dashboard';


const Navbar = () => {

  const [showLogout, setShowLogout] = useState(false);
  const { user, toggleBar, logoutUser } = useDashboardContext();

  return (<CssStl>

    <div className='nav-center' >
      <button type='button' className='toggle-btn' onClick={toggleBar} >
        < FaAlignLeft />
      </button>
      <div  >
    
        <h3 className='logo-text' >dashboard</h3>
      </div>
      <div className='btn-container' >
      </div>
      <div className='btn-container'>
   
      

      </div>
    </div>

  </CssStl>

  )
}

export default Navbar;



