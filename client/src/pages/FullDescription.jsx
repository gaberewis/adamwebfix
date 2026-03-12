import { useState } from "react";
import { useLoaderData } from 'react-router-dom';
import CssStl from "../css-pocket/FullDescription";


const FullDescription = () => {
    const { product } = useLoaderData();
    const { images, headingone, headingtow, headingthree,
        textone, texttow, textthree
    } = product;
    const [active, setActive] = useState(0);

    return (
        <CssStl>
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

            <div className="description-text">
                <h5>{headingone}</h5>
                <p>{textone}</p>
                <h5>{headingtow}</h5>
                <p>{texttow}</p>
                <h5>{headingthree}</h5>
                <p>{textthree}</p>

            </div>
        </CssStl>
    );
};

export default FullDescription;