import { Outlet, useNavigate, useLoaderData } from 'react-router-dom';
import axios from 'axios';
import { Navbar } from '../components'
import { useContext, createContext } from 'react';





const DashContext = createContext();

const Dashboard = () => {


    const navigate = useNavigate();
const { user } = useLoaderData()
console.log(user);

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
                user,
            }}
        >
            <Navbar  dashboard={true} logout={ logout } />
            < Outlet />
          

        </DashContext.Provider>


    )
}

export const DashboardContext = () => useContext(DashContext);

export default Dashboard;