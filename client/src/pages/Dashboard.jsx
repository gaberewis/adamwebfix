import { Outlet, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { Sidebar, DashNavBar } from '../components'
import { useState, useContext, createContext } from 'react';
import Stl from '../css-pocket/dashboard'


 const DashContext = createContext();
    
const Dashboard = () => {
     const navigate = useNavigate();
    const [showSideBar, setShowSideBar] = useState(false);
   

    const toggleBar = () => { setShowSideBar(pre => !pre) }
    
        const logout = async () => {
    
            try {
    
                await axios.get("/api/auth/logout");
                navigate("/");
    
            } catch (error) {
                console.log(error);
            }
    
        };
    
    return (
        <DashContext.Provider
        value={{
            toggleBar,
            showSideBar,
            logout,
        }}
        >

            <Stl>
                <Sidebar />

                <div className='content'>
                    <DashNavBar />
                    < Outlet />

                </div>
            </Stl>
        </DashContext.Provider>


    )
}

export const DashboardContext = ()=> useContext(DashContext);   

export default Dashboard;