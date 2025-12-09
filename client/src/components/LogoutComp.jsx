import { FaUserCircle, FaCaretDown } from 'react-icons/fa';
import CssStl from '../css-pocket/Logout';
import { useDashboardContext } from '../pages/Dashboard';
import { useState } from 'react';


const [showLogout, setShowLogout] = useState(false);
const { user, logoutUser } = useDashboardContext();

const LogoutComp = () => {
    return (
        <CssStl>
            <button
                type='button'
                className='btn logout-btn'
                onClick={() => setShowLogout(!showLogout)}
            >
                {user.avatar ? (<img src={user.avatar} alt='avatar' className='img' />) : (< FaUserCircle />)}
                {user?.name}
                <FaCaretDown />

            </button>
            <div
                className={
                    showLogout ? 'dropdown show-dropdown' : 'dropdown'
                }>
                <button
                    type='button'
                    className='dropdown-btn' onClick={logoutUser}
                >
                    logout
                </button>

            </div>
        </CssStl>
    )
}

export default LogoutComp;