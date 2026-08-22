import { Outlet } from 'react-router-dom';
import { Sidebar, DashNavBar } from '../components'
import { useState, useContext, createContext } from 'react';
import Stl from '../css-pocket/dashboard'


 const DashContext = createContext();
const Dashboard = () => {
    const [showSideBar, setShowSideBar] = useState(false);
   

    const toggleBar = () => { setShowSideBar(pre => !pre) }

    return (
        <DashContext.Provider
        value={{
            toggleBar,
            showSideBar
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