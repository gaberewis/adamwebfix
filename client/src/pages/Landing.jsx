import { Link } from "react-router-dom";
import Stl from "../css-pocket/landing";
import { useState } from "react";
import { RiLinksLine } from "react-icons/ri";
import { DashboardContext } from "./Dashboard";

const Landing = () => {

    const { user, pages} = DashboardContext();

    console.log(user);

    const [showItem, setShowItem] = useState(false);
    const toggleList = () => {
        setShowItem(pre => !pre);
    }



    return (<Stl>
      <Link to='/dashboard/create-page' className="btn"  >Create new page</Link>
        <div className="pages">


            {

                pages.map((page, index)=>(

                    

            <div className="card" key={index} >
                <div className="head">
                    <img src={page.images[0]?.imageUrl} alt='Product-Thumbling' />
                    <p>{page.product}</p>
                </div>

                <p className={`${page.status === 'active' ? "green" : "red"}`} >{page.status}</p>

                <url className='side-url'>
                    <li className="btn" ><Link to={`/instant-page/${page._id}`} >Copy Link <RiLinksLine color='E0115F' /> </Link></li>
                 {
                    page.status === "inActive"  && 
                    <li className="btn"  ><Link to={`/chechout/${page._id}`}  >Publish <RiLinksLine color='E0115F' /> </Link></li>
                 }    

                </url>

                <div className="urls">

                    <url className='main-url'>
                        <li><Link to={`/dashboard/edit-page/${page._id}`} >Edit |</Link></li>
                        <li><Link to={`/instant-page/${page._id}`}   >Preview |</Link></li>
                        <li><span onClick={toggleList} >More...</span></li>
                    </url>

                    <ul className={`sub-url ${showItem ? "show-ul" : ""}`}>
                        <li >
                            <Link to={`/deactivate/${page._id}`}>Deactivate </Link>
                        </li>

                        <li >
                            <Link to={`/delet-page/${page._id}`}>Delete </Link>
                        </li>
                        
                    </ul>
                </div>

            </div>



                ))
            }


        </div>


    </Stl>)
}

export default Landing;