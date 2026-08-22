import { DashboardContext  } from "../pages/Dashboard";


const Sidebar = ()=>{

const { showSideBar } = DashboardContext();


   return(<div className={showSideBar? 'side-bar show-sidebar' : 'side-bar ' } >


   </div>) 
}
export default Sidebar;