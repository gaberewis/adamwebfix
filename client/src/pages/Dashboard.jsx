import { Outlet, useNavigate, useLoaderData, useNavigation } from "react-router-dom";
import { Navbar, BigBar, SmallBar, Loading } from '../components';
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
            <main className="dashboard">
                <SmallBar />
                < BigBar />
                <div>
                    <Navbar />
                    {isLoading ? <Loading /> : <Outlet context={{ user }} />}
                </div>
            </main>
        </DashboardContext.Provider>
    )
}
export const useDashboardContext = () => useContext(DashboardContext);
export default Dashboard;