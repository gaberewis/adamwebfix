import CssStl from '../css-pocket/Navbar';
import { useState } from 'react';
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import Logo from '../assets/images/logo.svg';
import { useDashboardContext } from '../pages/Dashboard';
import ToggleDarkTheme from './ToggleDarkTheme';

const Navbar = () => {

  const [showLogout, setShowLogout] = useState(false);
  const { user, toggleBar, logoutUser } = useDashboardContext();

  return (<CssStl>

    <div className='nav-center' >
      <button type='button' className='toggle-btn' onClick={toggleBar} >
        < FaAlignLeft />
      </button>
      <div  >
        <img src={Logo} alt='logo' className='logo' />
        <h3 className='logo-text' >dashboard</h3>
      </div>
      <div className='btn-container' >
      </div>
      <div className='btn-container'>
        <ToggleDarkTheme />


        <div className='logout-container'>
          <button
            type='button'
            className='btn logout-btn'
            onClick={() => setShowLogout(!showLogout)}
          >
            {user.avatar ? (
              <img src={user.avatar} alt='avatar' className='img' />
            ) : (
              <FaUserCircle />
            )}
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <button type='button' className='dropdown-btn' onClick={logoutUser}>
              logout
            </button>
          </div>
        </div>


      </div>
    </div>

  </CssStl>

  )
}

export default Navbar;



