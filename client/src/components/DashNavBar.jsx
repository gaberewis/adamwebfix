import { DashboardContext  } from "../pages/Dashboard";
import { BsMenuApp } from "react-icons/bs";


const DashNavBar = ()=>{

     const { toggleBar } = DashboardContext();  

    return(<div className="dash-nav-bar">

        <span onClick={ toggleBar }>< BsMenuApp size={35} color="#fff"/></span>
    </div>)
}

export default DashNavBar;