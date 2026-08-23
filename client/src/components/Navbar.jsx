import { Link } from 'react-router-dom';
import Stl from '../css-pocket/nav';

const Navbar = ({ userId, isLog = false }) => {

    return (
        <Stl><div>
            <Link to="/">
                <img src="/logo.png" alt="colored-logo" />  <span>AdamWebFix</span></Link>
        </div>



            {isLog && <div className='contact'>

                {userId ? <Link to="/dashboard" >Dashboard</Link> : <Link to="/login" > Login</Link>}

                <Link
                    to="/"
                    onClick={() => {
                        document.getElementById("contact")?.scrollIntoView({
                            behavior: "smooth",
                        });
                    }}
                >
                  | Contact Us
                </Link> </div>}



        </Stl>
    )

}

export default Navbar;