import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Stl from "../css-pocket/landing";
import { Card } from '../components';
import axios from "axios";



const Landing = () => {

    const navigate = useNavigate();
    const { pages } = useLoaderData();
    

    const deletePage = async (id) => {
        try {
            await axios.delete(`/api/page/${id}`);
            return navigate('/dashboard');

        } catch (error) {
            console.log(
                "Delete page error:",
                error.response?.data?.msg || "Something went wrong."
            );
        }
    };

    const changeStatus = async(id, status)=>{

        try {
            await  axios.get(`/api/page/change-status/${id}`,{params : { status } } );
            return navigate('/dashboard');
        } catch (error) {
            console.log("Deactivate error: ", error.response?.data?.msg || 'Somthing went wrong');
        }
    }

    return (<Stl>
        <Link to='/dashboard/create-page' className="btn"  >Create new page</Link>

        <Card pages={pages}
         deletePage={deletePage} 
         changeStatus={changeStatus}
        />

    </Stl>)
}

export default Landing;