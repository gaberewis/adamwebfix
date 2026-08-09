import { Link } from 'react-router-dom';
import Stl from '../css-pocket/nav';

const Navbar = ({ logout, userId })=>{

return(
      <Stl>
                <Link to="/">
                    <img src="/logo.png" alt="colored-logo" />  <span>AdamWebFix</span>
                </Link> {userId ? <Link to="#" onClick={logout}>| Logout</Link> : <Link to="/login" >| Login</Link>}
            </Stl>
)

}

export default Navbar;