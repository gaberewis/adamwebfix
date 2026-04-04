import CssStl from '../css-pocket/NavBar';
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
        <h3 >pacific northwest x-ray inc.</h3>
         <h5 > simply the best </h5>
      </div>
      
      <div className='btn-container'>
   
      </div>
    </div>

  </CssStl>

  )
}

export default Navbar;



