import { Outlet, useNavigate, Form } from 'react-router-dom';
import axios from 'axios';
import { Sidebar, DashNavBar, SubmitButton, FormRow } from '../components'
import { useState, useContext, createContext } from 'react';
import Stl from '../css-pocket/dashboard'



const DashContext = createContext();

const Dashboard = () => {

    const [showSideBar, setShowSideBar] = useState(false);

    const navigate = useNavigate();
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
            <hr />
           <div  id='contact' className='contacts'>
             <h5 >Contact Adam Web Fix </h5>

                    <Form method="post"  className="form"  >

                        <FormRow type='text' name='name' />
                        <FormRow type='email' name='email' />
                        <FormRow type='text' name='phone' />
                        <label htmlFor='clmsg' className='form-label'>
                            Type your message here
                        </label>
                        <textarea
                            name="clientMsg"
                            id="clientMsg"
                            className="form-textarea"
                            required
                        ></textarea>
                        <SubmitButton />
                    </Form></div>
        </DashContext.Provider>


    )
}

export const DashboardContext = () => useContext(DashContext);

export default Dashboard;