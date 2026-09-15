import { useState } from "react";
import { Link, useLoaderData } from 'react-router-dom';
import Stl from "../css-pocket/page";
import { FaCircleDot } from "react-icons/fa6";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { RiWhatsappFill, RiPhoneFill } from "react-icons/ri";




const Page = () => {

 
    const { page, pages } = useLoaderData();

console.log('this is pages', pages);

    const [current, setCurrent] = useState(0);

    const { company, product, price, discount,
        currency, description, phone, email, whatsapp,
        address, order, specification, images
    } = page;


    return (
        <Stl>

            <h5 className="brand" >company name</h5>
            <div className="content">
                <div className="head">
                    <div className="slide">
                        <img src={images[current].imageUrl} alt="product-image" />
                    </div>

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

                        const [key, value] = Object.entries(item)[0];

                        return (

                            <div className="spec-items" key={index}>
                                <span>{key}</span>
                                <span>{value}</span>
                            </div>

                        )
                    })

                    }
                </div>


                <div
                    className="order"
                    onClick={() =>
                        window.open(`https://wa.me/${whatsapp}`, "_blank")
                    }
                >
                    <span>Order Now</span>
                    <span><RiWhatsappFill /></span>
                </div>

                <div className="show-more">
                    <h5>More products: </h5>

                    <div className="more">

                        {/* {
                            imageSlide.map((item, index) => {
                                return (
                                    <Link to={'#'} >
                                        <div key={index}><img src={item} alt='more-product-image' />
                                            <div className="name">Product Name</div>
                                            <div className="price"><span><del>200KD</del></span> <span>160KD</span></div>

                                        </div>
                                    </Link>

                                )

                            })
                        } */}


                    </div>


                </div>



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