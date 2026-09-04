import { useState } from "react";
import Stl from "../css-pocket/page";
import { FaCircleDot } from "react-icons/fa6";




const Page = () => {

    const [current, setCurrent] = useState(0);

    const imageSlide = [
        "/bgimage.jpg",
        "/not-found.svg",
        "/logo.png"];

        const specification = [{"color" : "red"},{"size" : "large"},{"status" : "new"}];

        

    return (
        <Stl>
            <h5 className="brand" >company name</h5>
            <div className="content">
                <div className="head">
                    <div className="slide">
                        <img src={imageSlide[current]} alt="slide" />


                    </div>
                    <div className="dots">
                        {
                            imageSlide.map((item, index) => (
                                <span key={index}
                                    className={current === index ? "active" : ""}
                                    onClick={() => setCurrent(index)} ><FaCircleDot /> </span>
                            )
                            )
                        }
                    </div>

                    <div className="name">Product Name</div>
                    <div className="price"><span><del>200KD</del></span> <span>160KD</span></div>

                </div>

                   <div className="details">
                        <h5>Product Details:</h5>
                        <p>
                            "Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

                        </p>

                    </div>
                   
                    <div className="spec">
                         <h5>Specification </h5>

{specification.map((item, index)=> {

    const[key, value]= Object.entries(item)[0];

return(
    
    <div className="spec-items" key={index}>
    <span>{key}</span>
    <span>{value}</span>
     <hr />
    </div>
   
)
})

}
                  
                    </div>


            </div>

        </Stl>
    )

}


export default Page;