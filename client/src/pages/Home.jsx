import CssSTL from "../css-pocket/Home";
import { FaCcPaypal } from "react-icons/fa";
import { CiBank } from "react-icons/ci";
import { SiWesternunion } from "react-icons/si";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
const Home = () => {
    <CssSTL>
        <div className="head-part">
            <img src="/public/coloredlogo.png" alt="colored-logo" />
            return  <h3>AdamWebFix</h3>

            <p>
We are interested in rebuilding and innovating your website to better reflect your business proficiency and quality.
Contact us to build or improve your website and get a fast, clear, and modern solution.
 We focus on delivering a polished design that enhances your brand and creates a strong, professional online presence.
            </p>
        </div>

        <div className="contact">
            <h4>Contact details</h4>
            <p>
                <span>
                    <RiWhatsappFill />
                    <a href="tel:+96597264747" style={{ textDecoration: "none", color: "inherit" }}>
                        00965-97264747
                    </a>
                </span>
            </p>

            <p>
                <span>
                    <MdEmail />
                    <a
                        href="mailto:gaber.ewis@gmail.com"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        gaber.ewis@gmail.com
                    </a>
                </span>
            </p>

        </div>

        <div className="payment">
            <h4>Payment options</h4>
            <span><FaCcPaypal /></span>
            <span><CiBank /></span>
            <span><SiWesternunion /></span>
        </div>
    </CssSTL>
}

export default Home;