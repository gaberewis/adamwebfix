import { useState } from "react";
import { Link, useLoaderData } from 'react-router-dom';
import NotFound from "../css-pocket/errorpages";
import Stl from "../css-pocket/page";
import { FaCircleDot } from "react-icons/fa6";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { RiWhatsappFill, RiPhoneFill } from "react-icons/ri";
import img from '../../public/not-found.svg';



const Page = () => {


    const { page, pages } = useLoaderData();

    const morePages = pages.filter((pgs) => pgs._id !== page._id && pgs.status === "active");




    const [current, setCurrent] = useState(0);

    const { company, product, price, discount,
        currency, description, phone, email, whatsapp,
        address, order, specification, images
    } = page;



    if(page.status !== "active"){

        return (
        <NotFound>
            <div>
                <img src={img} alt='not-found' />
                <h3>Page not found</h3>
                <p>We can not find the page you are looking for</p>
                <Link  to='/' className="underline" >Home Page</Link>
            </div>
        </NotFound>)
    }




    return (
        <Stl>

            <h5 className="brand" >{company}</h5>
            <div className="content">
                <div className="head">
                    <div className="slide">
                        <img src={images[current].imageUrl} alt="product-image" />
                    </div>
                    {
                        images && images.length > 1 && (
                            <div className="dots">
                                {images.map((image, index) => (
                                    <span
                                        key={index}
                                        className={current === index ? "active" : ""}
                                        onClick={() => setCurrent(index)}
                                    >
                                        <FaCircleDot />
                                    </span>
                                ))}
                            </div>
                        )
                    }

                    <div className="name">{product}</div>
                    <div className="price"><span><del>{discount} {currency}</del></span> <span>{price}{currency}</span></div>

                </div>

                <div className="details">
                    <h5>Product Details:</h5>
                    <p>

                        {`${description}.`}
                    </p>

                </div>

                <div className="spec">
                    <h5>Specification </h5>

                    {specification.map((item, index) => {

                        return (

                            <div className="spec-items" key={index}>
                                <span>{item.spec}</span>
                                <span>{item.details}</span>
                            </div>
                        )
                    })
                    }
                </div>
                {
                    order && order === "phone" ? (
                        <div
                            className="order"
                            onClick={() =>
                                window.open(`tel:${phone}`, "_blank")
                            }
                        >
                            <span>Order Now</span>
                            <span><RiPhoneFill /></span>
                        </div>
                    ) : order && order === "email" ? (
                        <div
                            className="order"
                            onClick={() =>
                                window.open(`mailto:${email}`, "_blank")
                            }
                        >
                            <span>Order Now</span>
                            <span><MdEmail /></span>
                        </div>
                    ) :
                        (
                            <div
                                className="order"
                                onClick={() =>
                                    window.open(`https://wa.me/${whatsapp}`, "_blank")
                                }
                            >
                                <span>Order Now</span>
                                <span><RiWhatsappFill /></span>
                            </div>
                        )
                }





                {
                    morePages.length > 0 &&
                    <>
                    <h5>More Products</h5>
                       <div className="more">
                       
                        {morePages.map(page => {
                            return (
                                <div  key={page._id}  >
                                <Link to={`/instant-page/${page._id}`} >
                                    <div className="content"><img src={page.images[0].imageUrl} alt='more-product-image' />
                                        <div className="name">{page.product}</div>
                                        <div className="price"><span><del>{page.discount}</del></span> <span>{page.price}</span></div>
                                    </div>
                                </Link>
                                </div>
                            )
                        })
                        }
                    </div>
                    </>
                }

            </div>

            <div className="contact">

                <p><span>< RiPhoneFill /> </span> <span>{phone}</span></p>
                <p><span>< RiWhatsappFill /> </span><span>{whatsapp}</span></p>
                <p><span>< MdEmail /> </span><span>{email}</span></p>
                <p><span>< MdLocationOn /> </span><span>Address: {address}</span></p>

            </div>

        </Stl>
    )

}


export default Page;