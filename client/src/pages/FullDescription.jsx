import { useState } from "react";
import { useLoaderData } from 'react-router-dom';
import CssStl from "../css-pocket/FullDescription";


const FullDescription = () => {
    const { product } = useLoaderData();
    const { images, fullDescription } = product;
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
                <p>
                    {fullDescription}
                </p>

            </div>
        </CssStl>
    );
};

export default FullDescription;