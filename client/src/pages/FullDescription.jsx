import { useState } from "react";
import { useLoaderData } from 'react-router-dom';
import { Slide } from '../components';
import CssStl from "../css-pocket/FullDescription";


const FullDescription = () => {
    const { product } = useLoaderData();
    const { images, shortDescription, headingone, headingtow, headingthree,
        textone, texttow, textthree
    } = product;
   

if(!textone && !texttow && !textthree){

    return(
        <CssStl>
              <Slide images={ images }/>
        <p>{shortDescription}</p>
        </CssStl>
    )
}


    return (
        <CssStl>
        <Slide images={ images }/>

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