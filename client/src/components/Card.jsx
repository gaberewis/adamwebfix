import { RiLinksLine, RiArrowDownCircleFill, RiEdit2Fill, RiEyeFill } from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom";


const Card = ({ pages, deletePage, changeStatus }) => {

    const [pageId, setPageId] = useState(null);
  
    const displayStatus = (status, id) => {
        switch (status) {
            case "active":
                return "Active";

            case "deactivated":
                return (<>Page deactivated by the user {" "}<span className="red under" onClick={() => {
                    changeStatus(id, "active");
                }}  >Activate page</span> </> );

            case "blocked":
                return (
                    <>
                        Page <span className="red" >blocked</span> {" "}
                        <Link to="/#contact" className="under" >contact for support</Link>
                    </>
                );
            default: return "Inactive";
        }
    }

    return (
        <div className="pages">
            {
                pages.map((page, index) => (
                    <div className="card" key={page._id} >
                        <div className="head">
                            <img src={page.images[0]?.imageUrl} alt='Product-Thumbling' />
                            <p>{page.product}</p>
                        </div>
                        <p className={`${page.status === 'active' ? "green" : 
                            page.status === 'inactive'? 
                            "red" : ""}`} >{displayStatus(page.status, page._id)}</p>

                        <ul className='side-ul'  >

                            {page.status === "active" &&
                                <li
                                    className="btn"
                                    onClick={() => {
                                        navigator.clipboard.writeText(
                                            `${window.location.origin}/instant-page/${page._id}`
                                        );
                                        setPageId(page._id);
                                    }}
                                >
                                    {pageId === page._id ? 'copied' : <span>Copy Link <RiLinksLine color='#fff' /></span>} </li>
                            }



                            {
                                page.status === "inactive" &&
                                <li  ><Link className="btn" to={`/dashboard/checkout/${page._id}`}  >Publish</Link></li>

                            }
                        </ul>

                        {page.status !== "blocked" && 
                        
                           <div className="uls">
                            <ul className='main-ul'>
                                <li><Link to={`/dashboard/edit-page/${page._id}`} >Edit <RiEdit2Fill className="icon" /> </Link></li>
                                <li><Link to={`/instant-page/${page._id}`}   >Preview <RiEyeFill className="icon" /></Link></li>


                                {page.status === "active" &&
                                    <li onClick={() => changeStatus(page._id, "deactivated")} >Deactivate </li>
                                }

                                <li
                                    className="red"
                                    onClick={() => {
                                        if (window.confirm("Are you sure you want to delete this page?")) {
                                            deletePage(page._id);
                                        }
                                    }}
                                >
                                    Delete
                                </li>


                            </ul>

                        </div>                       
                        }
                    </div>

                ))
            }
        </div>
    )
}

export default Card;