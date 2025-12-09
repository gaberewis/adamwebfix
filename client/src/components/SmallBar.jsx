import CssStl from '../css-pocket/SmallBar';
import Logo from '../assets/images/logo.svg';
import { FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import links from './Links';
import { useDashboardContext } from '../pages/Dashboard';

const SmallBar = () => {

    const { showBar, toggleBar } = useDashboardContext();

    return (
        <CssStl>

            <div className={
                showBar ? 'sidebar-container show-sidebar' : 'sidebar-container'
            } >
                <div className='content' >
                    <button type='button' className='close-btn' onClick={toggleBar}>
                        <FaTimes />
                    </button>
                    <header>
                        <img src={Logo} alt="logo" className='logo' />
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
                                        onClick={toggleBar}
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

export default SmallBar;