import { Link } from "react-router-dom";
import { DashboardContext } from "../pages/Dashboard";
import { RiArrowDownSFill, RiArrowUpSFill, RiLinksFill, RiLogoutCircleLine   } from "react-icons/ri";
import { useState } from "react";



const Sidebar = () => {

    const { showSideBar, logout } = DashboardContext();

    const[showPages, setShowpages] = useState(false);

    const toggleShowPges = ()=>{
        setShowpages(pre => !pre);
    }


    return (<div className={showSideBar ? 'side-bar show-sidebar' : 'side-bar '} >
        <div >
            <Link to="/" className="home-logo">
                <img src="/logo.png" alt="colored-logo" />  <span>AdamWebFix</span></Link>
            <h5>Hi User Name</h5>
            <div className="content">
                <button className="btn"><Link to='#'>Cop link</Link> <span><RiLinksFill /></span></button>
                <button className="btn"><Link to='#'>Preview </Link></button>
                <button className="btn"><Link to='#'>Edit </Link></button>
                <button className="btn"><Link to='#'>Add new page</Link></button>

                <div className="my-pages">
                    <h5>My pages {showPages ?  <span onClick={toggleShowPges} ><RiArrowUpSFill /> </span> 
                    : <span onClick={toggleShowPges} ><RiArrowDownSFill   /> </span>}
                     </h5>


                    <ul className={`${showPages&& "show-ul"}`}>
                        <li><Link to='#' >first page</Link></li>
                        <li><Link to='#' >second page</Link></li>
                        <li><Link to='#' >third page</Link></li>
                    </ul>
                </div>

            </div>
            <hr />
            <div className="logout" onClick={logout}>
                <span>< RiLogoutCircleLine /></span>
                <span>Logout</span>
            </div>

        </div>


    </div>)
}
export default Sidebar;