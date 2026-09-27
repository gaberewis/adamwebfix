import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Stl from "../css-pocket/landing";
import { useState } from "react";
import { RiLinksLine } from "react-icons/ri";
import axios from "axios";


const Landing = () => {

    const navigate = useNavigate();

    const { pages } = useLoaderData();
    const [pageId, setPageId] = useState(null);

    const [menuId, setMenuId] = useState(null);
    const toggleList = (id) => {
        setMenuId(pre => pre === id ? null : id);
    }

    const deletePage = async (id) => {
        try {
            await axios.delete(`/api/page/${id}`);
            return navigate('/dashboard');

        } catch (error) {
            console.log(
                "Delete page error:",
                error.response?.data?.msg || "Something went wrong."
            );
        }
    };

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
                        <ul className='side-ul'  >
                            <li
                                onClick={() => {
                                    navigator.clipboard.writeText(
                                        `${window.location.origin}/instant-page/${page._id}`
                                    );
                                    setPageId(page._id);
                                }}
                            >
                                {pageId === page._id ? 'copied' : <span>Copy Link <RiLinksLine color='#64748b' /></span>} </li>
                            {
                                page.status === "inActive" &&
                                <li  ><Link to={`/dashboard/checkout/${page._id}`}  >Publish</Link></li>
                            }

                        </ul>

                        <div className="uls">

                            <ul className='main-ul'>
                                <li><Link to={`/dashboard/edit-page/${page._id}`} >Edit |</Link></li>
                                <li><Link to={`/instant-page/${page._id}`}   >Preview |</Link></li>
                                {page.status === "active" ?
                                    (
                                        <li>
                                            <span onClick={() =>
                                                toggleList(page._id)}>
                                                More...
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
                                    <Link to={`/deactivate/${page._id}`}>Deactivate </Link>
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


    </Stl>)
}

export default Landing;