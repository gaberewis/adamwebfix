
import { Link, NavLink } from 'react-router-dom';
import links from './Links';
import CssStl from '../css-pocket/BigBar';
import { useDashboardContext } from '../pages/Dashboard';
import { IoAddCircle } from "react-icons/io5";



const BigBar = () => {
    const { bigBar, toggleBar, logoutUser, user } = useDashboardContext();
   
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
                                    
                                    <NavLink
                                        to={path}
                                        key={text}
                                        className='nav-link'
                                        onClick={ toggleBar}
                                        end
                                    >
                                         <span className='icon' >
                                            {icon}
                                        </span> {text}
                                    </NavLink>
                                    
                                )
                            })
                           
                        }
                     {user && ( <NavLink to='/dashboard/add-product' className='nav-link' onClick={ toggleBar} ><span className='icon' >
                                            < IoAddCircle />
                                        </span>Add product</NavLink>)}  
                        {user && (<NavLink className='nav-link' onClick={logoutUser}>logout</NavLink>)}

                    </div>
                </div>
            </div>
        </CssStl>
    )
}

export default BigBar;