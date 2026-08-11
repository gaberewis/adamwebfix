import { Link } from 'react-router-dom';
import Stl from '../css-pocket/nav';

const Navbar = ({ logout, userId, isLog=false })=>{

return(
      <Stl>
                <Link to="/">
                    <img src="/logo.png" alt="colored-logo" />  <span>AdamWebFix</span></Link>
                    {isLog && <div>  {userId ? <Link to="#" onClick={logout}>| Logout</Link> : <Link to="/login" >| Login</Link>}</div>}
               
            </Stl>
)

}

export default Navbar;