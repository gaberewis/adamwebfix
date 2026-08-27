import { Outlet, useNavigate, } from 'react-router-dom';
import axios from 'axios';
import { Navbar } from '../components'
import { useContext, createContext } from 'react';



const DashContext = createContext();

const Dashboard = () => {


    const navigate = useNavigate();


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
                logout,
            }}
        >
            <Navbar  dashboard={true} logout={ logout } />
            < Outlet />

        </DashContext.Provider>


    )
}

export const DashboardContext = () => useContext(DashContext);

export default Dashboard;