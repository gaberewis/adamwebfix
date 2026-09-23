import { Link } from "react-router-dom";
import Stl from "../css-pocket/landing";
import { useState } from "react";
import { RiLinksLine } from "react-icons/ri";
import { DashboardContext } from "./Dashboard";

const Landing = () => {

    const { user, pages } = DashboardContext();

    console.log(user);

    const [showItem, setShowItem] = useState(false);

    const [copied, setCopied] = useState(null);

    const toggleList = () => {
        setShowItem(pre => !pre);
    }



    return (<Stl>
        <Link to='/dashboard/create-page' className="btn"  >Create new page</Link>
        <div className="pages">


            {

                pages.map((page, index) => (



                    <div className="card" key={page._id} >
                        <div className="head">
                            <img src={page.images[0]?.imageUrl} alt='Product-Thumbling' />
                            <p>{page.product}</p>
                        </div>

                        <p className={`${page.status === 'active' ? "green" : "red"}`} >{page.status}</p>

                        <url className='side-url'  >
                            <li 
                                onClick={(e) => {
                                    navigator.clipboard.writeText(
                                        `${window.location.origin}/instant-page/${page._id}`
                                    );
                                    setCopied(page._id);
                                }}
                            >

                               {copied === page._id ? 'copied' : <span>Copy Link <RiLinksLine color='#64748b' /></span>  } </li>
                            {
                                page.status === "inActive" &&
                                <li  ><Link to={`/chechout/${page._id}`}  >Publish</Link></li>
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