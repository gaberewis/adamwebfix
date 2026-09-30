import { RiLinksLine, RiArrowDownCircleFill, RiEdit2Fill, RiEyeFill } from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom";


const Card = ({ pages, deletePage, changeStatus }) => {

    const [pageId, setPageId] = useState(null);
    const [menuId, setMenuId] = useState(null);
    const toggleList = (id) => {
        setMenuId(pre => pre === id ? null : id);
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
                        <p className={`${page.status === 'active' ? "green" : "red"}`} >{page.status}</p>
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
                                page.status === "inactive" ?
                                    <li  ><Link className="btn" to={`/dashboard/checkout/${page._id}`}  >Publish</Link></li> :
                                    page.status === "deactivated" ?
                                        <li  ><span onClick={()=>{
                                            changeStatus(page._id, "active");
                                        }}  >Activate</span></li> :
                                        ""
                            }
                        </ul>
                        <div className="uls">
                            <ul className='main-ul'>
                                <li><Link to={`/dashboard/edit-page/${page._id}`} >Edit <RiEdit2Fill className="icon" /> </Link></li>
                                <li><Link to={`/instant-page/${page._id}`}   >Preview <RiEyeFill className="icon" /></Link></li>
                                {page.status === "active" ?
                                    (
                                        <li >
                                            <span onClick={() =>
                                                toggleList(page._id)}>
                                                More  <RiArrowDownCircleFill className="icon" />
                                            </span>
                                        </li>
                                    ) : (
                                        <li >
                                            <div
                                                className="red"
                                                onClick={() => {
                                                    if (window.confirm("Are you sure you want to delete this page?")) {
                                                        deletePage(page._id);
                                                    }
                                                }}
                                            >
                                                Delete
                                            </div>
                                        </li>
                                    )}
                            </ul>
                            <ul className={`sub-ul ${menuId === page._id && "show-ul"}`}>
                                <li >
                                    <div onClick={() => changeStatus(page._id, "deactivated")} >Deactivate </div>
                                </li>

                                <li >
                                    <div
                                        className="red"
                                        onClick={() => {
                                            if (window.confirm("Are you sure you want to delete this page?")) {
                                                deletePage(page._id);
                                            }
                                        }}
                                    >
                                        Delete
                                    </div>
                                </li>

                            </ul>
                        </div>

                    </div>



                ))
            }
        </div>
    )
}

export default Card;