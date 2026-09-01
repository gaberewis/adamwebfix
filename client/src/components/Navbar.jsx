import { Link } from 'react-router-dom';
import Stl from '../css-pocket/navbars';
import { useState } from 'react';

import {  RiUserSettingsFill, RiAccountPinCircleFill, RiLogoutCircleRLine  } from "react-icons/ri";



const Navbar = ({ userId, isLog = false, logout, dashboard = false }) => {

   const [showItem, setShowItem] = useState(false);
        const toggleList = () => {
            setShowItem(pre => !pre);
        }

    return (
        <Stl>
           
            <div className={` main  ${dashboard && 'dashboard'} `} >
                <div>
                    <Link to="/">
                        <img src="/logo.png" alt="colored-logo" />  <span>AdamWebFix</span></Link>
                </div>

                {isLog && <div className='contact'>

                    {userId ? <Link to="/dashboard" >Dashboard</Link> : <Link to="/login" > Login</Link>}

                    <Link
                        to="/"
                        onClick={() => {
                            document.getElementById("contact")?.scrollIntoView({
                                behavior: "smooth",
                            });
                        }}
                    >
                        | Contact Us
                    </Link> </div>}


                {dashboard &&

                    <div className='user-list'>
                            <div><span>Hi user.name </span> <span onClick={toggleList} >  <RiAccountPinCircleFill size={25} /> </span></div>

                        <div className={`hidden ${showItem ? "show-list" : ""} `}>
                           <Link to='/account' > <span  >Account <RiUserSettingsFill /></span></Link>
                            <span className='logout' onClick={logout}> Logout <RiLogoutCircleRLine /></span>
                        </div>

                    </div>

                }

            </div>

        </Stl>
    )

}

export default Navbar;