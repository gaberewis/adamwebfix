import { useState } from "react";
import Stl from "../css-pocket/page";
import { FaCircleDot } from "react-icons/fa6";




const Page = () => {

    const [current, setCurrent] = useState(0);

    const imageSlide = [
        "/bgimage.jpg",
        "/bgimage.jpg",
        "/bgimage.jpg"]

    return (
        <Stl>
            <h5 className="brand" >company name</h5>
            <div className="content">
                <div className="head">
  <div className="slide">
                    <img src={imageSlide[current]} alt="slide" />
                    <div className="dots">
                          {
                        imageSlide.map((item, index) => (
                            <span key={index}
                            className={current === index ? "active" : ""}
                            onClick={()=> setCurrent(index)} ><FaCircleDot /> </span>
                        )
                        )
                    }
                    </div>
                  
                </div>
              
                        <div className="name">Product Name</div>
                <div className="price"><span><del>200KD</del></span> <span>160KD</span></div>
               
                </div>
              

            </div>

        </Stl>
    )

}


export default Page;