import { Link } from "react-router-dom";
import Stl from "../css-pocket/landing";
import { useState } from "react";


const Landing = () => {

    const [showItem, setShowItem] = useState(false);
    const toggleList = () => {
        setShowItem(pre => !pre);
    }



    return (<Stl>
        <Link to='#' ><button className="btn">Create new page</button></Link>
        <div className="pages">
            <div className="card">
                <img src="/public/bgimage.jpg" alt='Product-Thumbling' />
                <span>Active</span>
                <url>
                    <li><Link to="#" >Copy Link |</Link></li>
                    <li><Link to="#" >Preview |</Link></li>
                    <li><Link to="#" >Edit |</Link></li>
                    <div className="more">
                        <span onClick={toggleList} >More...</span>
                        <ul className={showItem ? "show-ul" : ""} >
                            <li >
                                Deactivate or Activate
                            </li>

                            <li >
                                Delete
                            </li>
                        </ul>
                    </div>
                </url>

            </div>

        </div>


    </Stl>)
}

export default Landing;