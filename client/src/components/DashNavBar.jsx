import { Link } from "react-router-dom";
import { DashboardContext  } from "../pages/Dashboard";
import { BsMenuApp } from "react-icons/bs";


const DashNavBar = ()=>{

     const { toggleBar } = DashboardContext();  

    return(<div className="dash-nav-bar">

        <span onClick={ toggleBar }>< BsMenuApp /></span>
        <h5>Dashboard</h5>
        <Link to="#contact">Contact us</Link>
    </div>)
}

export default DashNavBar;