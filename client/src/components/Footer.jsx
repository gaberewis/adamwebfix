import CssSTL from "../css-pocket/Footer";
import {Link } from 'react-router-dom';
import { IoMdMailUnread } from "react-icons/io";
import { FaFax, FaDownload} from "react-icons/fa";
import { BsMailbox2Flag } from "react-icons/bs";
import { MdWifiCalling3 } from "react-icons/md";

const Footer = ()=>{

    return(
        <CssSTL>
   
        <div className="head-part">

              <a href="/public/order-form.pdf" download >
<p><span><FaDownload />  </span> <b>Download Order Form</b></p> 
   </a>  


  <p><span><FaFax /></span> send order by fax : 1-503-666-8855 </p>

  <p><span><MdWifiCalling3 /></span> Phone Lines open...
8am - 5pm Monday-Friday (Pacific/West Coast Time)</p>


<p>Toll-Free (US): 800-827-XRAY (800-827-9729)</p>

<p>
    <IoMdMailUnread />    <a href="mailto:example@gmail.com" target="_blank" rel="noopener noreferrer">
 SalesD@pnwx.com
</a>
  </p>


    <h5><span><BsMailbox2Flag /></span > P.O. Box 625 * Gresham, OR  97030 * U.S.A.</h5>

     <p>For order methods and policies, <Link to='/dashboard/methods' >click here</Link></p>


<img  src="/public/payment-methods.png" alt='payment-methods' />




 </div>

<div className="hill">
    <p className="small-text">
This web site is our catalog, no printed catalog is available. - Please keep checking back, changes to this site are made daily.
Every effort is made on our part to keep all posted prices up to date, however we can not guarantee the accuracy due to notification delays by the manufacturers.
Purchase Orders accepted only upon approval of credit - Min. $500 opening order for new open CHARGE accounts.
All other orders (Cash, Credit Card, etc) subject only to a $30 product minimum order!</p>


<p className="tiny-text">©1997-2026 Pacific Northwest X-Ray Inc. - Sales & Marketing Division - All Rights Reserved
</p>
</div>
        </CssSTL>
       
    )
}

export default Footer;