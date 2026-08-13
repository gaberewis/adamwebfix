import { Link } from 'react-router-dom';
import Stl from '../css-pocket/nav';

const Navbar = ({ logout, userId, isLog = false }) => {

    return (
        <Stl><div>
            <Link to="/">
                <img src="/logo.png" alt="colored-logo" />  <span>AdamWebFix</span></Link>
        </div>

            
               
                {isLog && <div className='contact'>  <Link
                    to="/"
                    onClick={() => {
                        document.getElementById("contact")?.scrollIntoView({
                            behavior: "smooth",
                        });
                    }}
                >
                    Contact Us
                </Link> {userId ? <Link to="#" onClick={logout}>| Logout</Link> : <Link to="/login" >| Login</Link>}</div>}

            

        </Stl>
    )

}

export default Navbar;