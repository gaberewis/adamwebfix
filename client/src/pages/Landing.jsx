import { Link } from "react-router-dom";
import Stl from "../css-pocket/landing";


const Landing = ()=>{

return (<Stl>
    <Link to='#' ><button className="btn">Create new page</button></Link>
    <div className="pages">
    <div className="card">page controle</div>

    </div>


    </Stl>)
}

export default Landing;