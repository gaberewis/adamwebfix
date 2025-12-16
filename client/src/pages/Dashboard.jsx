import { Outlet, useNavigate, useLoaderData, useNavigation } from "react-router-dom";
import { Navbar, BigBar, Loading } from '../components';
import CssSTL from "../css-pocket/Dashboard";
import { createContext, useContext } from 'react';

import axios from 'axios';


const DashboardContext = createContext();

const Dashboard = () => {
    const navigate = useNavigate();
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';

    const { user } = useLoaderData();


    const logoutUser = async () => {
        navigate('/');
        await axios.get('/api/auth/logout');
    };


    return (
        <DashboardContext.Provider
            value={{
                user,
                logoutUser
            }}
        >
            <CssSTL>
             
                < BigBar />
                <div className="dashboard-page">
                    <Navbar />
                    {isLoading ? <Loading /> : <Outlet context={{ user }} />}
                    <div className="footer">FOOTER</div>
                </div>
            </CssSTL>
        </DashboardContext.Provider>
    )
}
export const useDashboardContext = () => useContext(DashboardContext);
export default Dashboard;