import { Form } from "react-router-dom";
import { FormRow, SubmitButton } from "../components";
import CssSTL from "../css-pocket/Home";
import { FaCcPaypal } from "react-icons/fa";
import { CiBank } from "react-icons/ci";
import { SiWesternunion } from "react-icons/si";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const Home = () => {
    return (
        <CssSTL>
            <div className="head-part">
                <img src="/coloredlogo.png" alt="colored-logo" />
                <h4>AdamWebFix — Smart Web Solutions</h4>

                <p>
                    We specialize in crafting premium digital experiences that elevate your brand and position your business for success.

                    From concept to execution, we redesign and optimize websites to deliver clarity, performance, and impact — ensuring your online presence stands out in a competitive market.

                    Partner with us to create a website that not only looks exceptional but performs exceptionally.
                </p>


                <hr />

                <h5 className="cta">Contact us today and take your website to the next level</h5>


                <Form method="post" className="form">

                    <FormRow type='text' name='name' />
                    <FormRow type='email' name='email' />
                    <FormRow type='text' name='phone' />
                    <label htmlFor='clmsg' className='form-label'>
                        Type your message here
                    </label>
                    <textarea
                        name="clientMsg"
                        id="clientMsg"
                        className="form-textarea"
                        required
                    ></textarea>
                    <SubmitButton />
                </Form>

            </div>

            <hr />
            <div className="contact">
                <p className="c-title">Contact details:</p>

                <div className="contact-item">
                    <RiWhatsappFill />
                    <a href="tel:+96597264747">+965 9726 4747</a>
                </div>

                <div className="contact-item">
                    <MdEmail />
                    <a href="mailto:gaber.ewis@gmail.com">
                        gaber.ewis@gmail.com
                    </a>
                </div>
            </div>

            <div className="payment">
                <p className="c-title">Payment options:</p>
                <div className="icons">
                    <FaCcPaypal />
                    <CiBank />
                    <SiWesternunion />
                </div>
            </div>
        </CssSTL>
    );
};

export default Home;











