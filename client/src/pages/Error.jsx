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
                <Link to='/'>Home Page</Link>
            </div>
        </CssStl>)
    }

    if (error?.status === 401) {
    return <h3>Unauthorized - Please login</h3>;
  }

  if (error?.status === 403) {
    return <h3>Forbidden - You don’t have permission</h3>;
  }

  if (error?.status === 500) {
    return <h3>Server error. Please try again later.</h3>;
  }
  
  return <h3>Something went wrong...</h3>;

}

export default Error;



