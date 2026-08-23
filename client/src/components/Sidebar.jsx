
import { Link } from "react-router-dom";
import { DashboardContext  } from "../pages/Dashboard";


const Sidebar = ()=>{

const { showSideBar } = DashboardContext();


   return(<div className={showSideBar? 'side-bar show-sidebar' : 'side-bar ' } >
        <div >
            <Link to="/"  className="home-logo">
                <img src="/logo.png" alt="colored-logo" />  <span>AdamWebFix</span></Link>
        </div>


   </div>) 
}
export default Sidebar;