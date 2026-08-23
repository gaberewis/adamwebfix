import { Link } from "react-router-dom";
import { DashboardContext } from "../pages/Dashboard";
import { RiLogoutCircleLine } from "react-icons/ri";


const Sidebar = () => {

    const { showSideBar, logout } = DashboardContext();


    return (<div className={showSideBar ? 'side-bar show-sidebar' : 'side-bar '} >
        <div >
            <Link to="/" className="home-logo">
                <img src="/logo.png" alt="colored-logo" />  <span>AdamWebFix</span></Link>
            <h5>Hi User Name</h5>
            <div className="content">
                <button className="btn"><Link to='#'>Cop page link</Link></button>
                <button className="btn"><Link to='#'>Preview page</Link></button>
                <button className="btn"><Link to='#'>Edit page</Link></button>
                <button className="btn"><Link to='#'>Add new page</Link></button>

                <div className="my-pages">
                    <h5>My pages</h5>

                    <ul>
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