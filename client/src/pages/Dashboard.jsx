import { Outlet, useNavigate, useLoaderData, useNavigation } from "react-router-dom";
import { Navbar, BigBar, Loading, Footer } from '../components';
import CssSTL from "../css-pocket/Dashboard";
import { createContext, useContext,useState } from 'react';

import axios from 'axios';


const DashboardContext = createContext();

const Dashboard = () => {
    const navigate = useNavigate();
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';
    const [bigBar, setBigBar] = useState(false);

    const { user } = useLoaderData();
  

  const toggleBar = ()=>{
    setBigBar(!bigBar);
  }
    const logoutUser = async () => {
       try {
            await axios.get('/api/pnwx/auth/logout' , {
      withCredentials: true
    });
    return navigate('/dashboard');
        
       } catch (error) {
        console.log("Eroor: ", error.response.data.msg);
       }
    

       
    };


    return (
        <DashboardContext.Provider
            value={{
                user,
                logoutUser, 
                toggleBar,
                bigBar
            }}
        >
            <CssSTL>
                 < BigBar />
            
                <div >
                    <Navbar />
                    <div className="dashboard-page">

                         {isLoading ? <Loading /> : <Outlet context={{ user }} />}
                    </div>
                   
              <Footer />
                </div>
    
            </CssSTL>
             
        </DashboardContext.Provider>
    )
}
export const useDashboardContext = () => useContext(DashboardContext);
export default Dashboard;