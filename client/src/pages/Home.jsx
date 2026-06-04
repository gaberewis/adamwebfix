import { Form, Link } from "react-router-dom";
import { FormRow, SubmitButton } from "../components";
import CssSTL from "../css-pocket/Home";



const Home = () => {
    return (
        <CssSTL>
            <div className="intro">
                <Link to="/">
                    <img src="/logo.png" alt="colored-logo" />
                </Link>
                <h1>Adam Web Fix</h1>

                <p>
                    We specialize in crafting premium digital experiences that elevate your brand and position your business for success.

                    From concept to execution, we redesign and optimize websites to deliver clarity, performance, and impact — ensuring your online presence stands out in a competitive market.

                    Partner with us to create a website that not only looks exceptional but performs exceptionally. Try our new service and launch your online business in minutes with <Link to="/instantpage" >Instant-Page</Link>

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
        </CssSTL>
    );
};

export default Home;











