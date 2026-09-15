import { Outlet, useNavigate, useLoaderData } from 'react-router-dom';
import axios from 'axios';
import { Navbar } from '../components'
import { useContext, createContext } from 'react';




const DashContext = createContext();

const Dashboard = () => {

const { user, pages } = useLoaderData();
console.log(pages);

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
                user,
              pages,

            }}
        >
            <Navbar  dashboard={true} logout={ logout } />
            < Outlet />
          

        </DashContext.Provider>


    )
}

export const DashboardContext = () => useContext(DashContext);

export default Dashboard;