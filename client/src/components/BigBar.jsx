import { Link, NavLink, useLocation } from "react-router-dom";
import links from './Links';
import CssStl from '../css-pocket/BigBar';
import { useDashboardContext } from '../pages/Dashboard';
import { IoAddCircle } from "react-icons/io5";



const BigBar = () => {
    const { bigBar, toggleBar, logoutUser, user } = useDashboardContext();
  const { pathname, search } = useLocation();
const currentUrl = pathname + search;
    return (
        <CssStl>
            <div
                className={
                    bigBar ?  'sidebar-container show-sidebar' : 'sidebar-container ' 
                }
            >
                <div className='content'>
<header>

</header>
       <div className='nav-links' >
        
                       
                        {
                            links.map(link => {
                                const { path, text, icon } = link;
                                return (
                                      <Link
        key={text}
        to={path}
        onClick={toggleBar}
        className={
          currentUrl === path
            ? "nav-link active"
            : "nav-link"
        }
      >
        <span className="icon">{icon}</span>
        {text}
      </Link>
                                    
                                )
                            })
                           
                        }
                     {user && ( <NavLink to='/dashboard/add-product' className='nav-link' onClick={ toggleBar} end ><span className='icon' >
                                            < IoAddCircle />
                                        </span>Add product</NavLink>)}  
                        {user && (<Link className='nav-link' onClick={logoutUser} end >logout</Link>)}

                    </div>
                </div>
            </div>
        </CssStl>
    )
}

export default BigBar;