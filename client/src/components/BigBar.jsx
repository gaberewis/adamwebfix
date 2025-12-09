
import { NavLink } from 'react-router-dom';
import links from './Links';
import CssStl from '../css-pocket/BigBar';
import Logo from '../assets/images/logo.svg';
import { useDashboardContext } from '../pages/Dashboard';



const BigBar = () => {
    const {user, showBar, toggleBar } = useDashboardContext();
    return (
        <CssStl>
            <div
                className={
                    showBar ?  'sidebar-container show-sidebar' : 'sidebar-container ' 
                }
            >
                <div className='content'>
<header>
    <img src={Logo} alt='logo' className='logo' />
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

                    </div>
                </div>
            </div>
        </CssStl>
    )
}

export default BigBar;