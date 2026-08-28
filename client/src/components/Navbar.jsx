import { Link } from 'react-router-dom';
import Stl from '../css-pocket/navbars';
import { useState } from 'react';
import { RiArrowDownSFill, RiArrowUpSFill, RiLinksFill } from "react-icons/ri";



const Navbar = ({ userId, isLog = false, logout, dashboard = false }) => {



    const [userSetting, showUserSetting] = useState(false);
    const toggleList = () => {
        showUserSetting(pre => !pre);
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
                        <div>Hi user.name {userSetting ? <span onClick={toggleList} ><RiArrowUpSFill size={25} /> </span>
                            : <span onClick={toggleList} ><RiArrowDownSFill size={25} /> </span>}
                        </div>

<div className={`hidden ${userSetting ? "show-list" : "hide"} `}>

  <span  ><Link to='/account' >Account</Link></span>
                        <span onClick={logout  }> Logout </span>

</div>
                      
                    </div>

                }

            </div>

        </Stl>
    )

}

export default Navbar;