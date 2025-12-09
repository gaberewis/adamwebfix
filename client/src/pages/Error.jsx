import { Link, useRouteError } from "react-router-dom";
import CssStl from '../css-pocket/ErrorPage';
import img from '../assets/images/not-found.svg'


const Error = () => {
    const error = useRouteError();
   
    if (error.status === 404) {
     
        return (<CssStl>
            <div>
                <img src={img} alt='not-found' />
                <h3>Page not found</h3>
                <p>We can not find the page you are looking for</p>
                <Link to='/dashboard'>back home</Link>
            </div>
        </CssStl>)
    }

    return (
        <CssStl>
            <div>
                <h3>
                    something went wrong
                </h3>
            </div>
        </CssStl>
    )

}

export default Error;