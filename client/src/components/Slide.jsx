import { useState } from "react";

const Slide = ({ images })=>{

     const [active, setActive] = useState(0);
    return(
           <div className="slide">
        
        
                        <img
                            src={
                                images && images.length > 0
                                    ? images[active].imageUrl
                                    : "/bgimage.jpg"
                            }
                            alt="slide"
                            className="slide-img"
                        />
        
                        <div className="dots">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    className={`dot ${index === active ? "active" : ""}`}
                                    onClick={() => setActive(index)}
                                />
                            ))}
                        </div>
                    </div>
    )
}

export default Slide;