import CssStl from '../css-pocket/Navbar';
import { useState } from 'react';
import { FaAlignLeft, FaXRay} from 'react-icons/fa';
import { useDashboardContext } from '../pages/Dashboard';





const Navbar = () => {

 
  const { toggleBar} = useDashboardContext();

  return (<CssStl>

    <div className='nav-center' >
      <button type='button' className='toggle-btn' onClick={toggleBar} >
        < FaAlignLeft />
      </button>

      <div  className='head-name' >
        <h3>pacifi northwest x-ray inc.</h3>
         <h4 ><span><FaXRay/></span> simply the best <span><FaXRay/></span></h4>
      </div>
      
     
      <div className='btn-container'>
   
      

      </div>
    </div>

  </CssStl>

  )
}

export default Navbar;



