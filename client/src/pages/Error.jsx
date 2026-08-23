import { Link, useRouteError } from "react-router-dom";
import Stl from "../css-pocket/errorpages";
import img from '../../public/not-found.svg';


const Error = () => {
    const error = useRouteError();
   
    if (error.status === 404) {
     
        return (<Stl>
            <div>
                <img src={img} alt='not-found' />
                <h3>Page not found</h3>
                <p>We can not find the page you are looking for</p>
                <Link to='/'>Home Page</Link>
            </div>
        </Stl>)
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



