import { Link } from "react-router-dom";
import Stl from "../css-pocket/landing";
import { useState } from "react";
import { RiLinksLine } from "react-icons/ri";


const Landing = () => {

    const [showItem, setShowItem] = useState(false);
     const [status, setStatus] = useState(true);
    const toggleList = () => {
        setShowItem(pre => !pre);
    }



    return (<Stl>
        <Link to='#' ><button className="btn">Create new page</button></Link>
        <div className="pages">

            <div className="card">
                <div className="head">
                    <img src="/bgimage.jpg" alt='Product-Thumbling' />
                    <p>Product Name</p>
                </div>

                <p className={`${status ? "green" : "red"}`} >Active</p>

                <url className='side-url'>
                    <li><Link to="#" >Copy Link <RiLinksLine color='E0115F' /> </Link></li>
                </url>

                <div className="urls">

                    <url className='main-url'>
                        <li><Link to="#" >Edit |</Link></li>
                        <li><Link to="#" >Preview |</Link></li>
                        <li><span onClick={toggleList} >More...</span></li>
                    </url>

                    <ul className={`sub-url ${showItem ? "show-ul" : ""}`}>
                        <li >
                            <Link to="#">Deactivate </Link>
                        </li>

                        <li >
                            <Link to="#">Delete </Link>
                        </li>
                        
                    </ul>
                </div>

            </div>

        </div>


    </Stl>)
}

export default Landing;