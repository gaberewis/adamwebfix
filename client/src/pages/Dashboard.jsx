import { Outlet, useNavigate, useLoaderData, useNavigation } from "react-router-dom";
import { Navbar, BigBar, Loading } from '../components';
import CssSTL from "../css-pocket/Dashboard";
import { useState, createContext, useContext } from 'react';
import { checkIsDark } from '../App';
import axios from 'axios';


const DashboardContext = createContext();

const Dashboard = () => {
    const navigate = useNavigate();
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';

    const { user } = useLoaderData();
    const [showBar, setShowBar] = useState(false);
    const [isDark, setIsDark] = useState(checkIsDark);

    const toggleDark = () => {
        const newIsDark = !isDark;
        setIsDark(newIsDark);
        document.body.classList.toggle('dark-theme', newIsDark);
        localStorage.setItem('darkTheme', newIsDark);

    };

    const toggleBar = () => {
        setShowBar(!showBar);
    };

    const logoutUser = async () => {
        navigate('/');
        await axios.get('/api/auth/logout');

    };


    return (
        <DashboardContext.Provider
            value={{
                user,
                showBar,
                isDark,
                toggleDark,
                toggleBar,
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