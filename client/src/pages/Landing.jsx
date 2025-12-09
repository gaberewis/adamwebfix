import { Link, useNavigate } from "react-router-dom";
import main from '../assets/images/mainImg.svg'
import Logo from '../assets/images/logo.svg'
import CssStl from '../css-pocket/Landing';
import axios from "axios";
import { useState } from "react";
import { Loading } from "../components";

const Landing = () => {
const navigate = useNavigate();

const [isloading, setIsloading] = useState(false);

const demoUser = async()=>{

  try {
    setIsloading(true);
    await axios.post('/api/auth/login', {
      "email" : "adam@gmail.com",
    "password" : "143212143"
    });
     return navigate('/dashboard');
    
  } catch (error) {
    console.log(error.response?.data);
    return error;
  }finally{
    setIsloading(false);
  }

};

if(isloading){
  return <Loading />
}

  return (
    <CssStl>

        <div className='info'>
           <img src={Logo} alt="HrProudctStatus" className='logo' />
          <h1>
            Proudct <span>Status</span> app
          </h1>

          <p>
            Our HR Proudct Status web platform streamlines the recruitment process with real-time updates.
            It allows HR teams to track applicant progress across various stages.
            Managers can easily view which positions are open, in review, or filled.
            The platform enhances transparency and communication with candidates.
            Overall, it improves efficiency and reduces time-to-hire significantly.
          </p>

          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/login' className='btn'>
            Login 
          </Link>

          <button className=' demo' onClick={()=> demoUser()}>Demo User</button>

        </div>
        
        <img src={main} alt='Proudct hunt' className='img main-img' />
      
    </CssStl>
  )

}

export default Landing;



