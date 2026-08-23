import { Form, Link, useLoaderData, useNavigate } from "react-router-dom";
import axios from 'axios';
import { FormRow, SubmitButton, Navbar } from "../components";
import Stl from "../css-pocket/homes";
import { TbPointFilled } from "react-icons/tb";
import styled from "styled-components";


const InstantPage = () => {

    const { userId } = useLoaderData();
    const navigate = useNavigate();

    const logout = async () => {

        try {

            await axios.get("/api/auth/logout");
            navigate("/");

        } catch (error) {
            console.log(error);
        }

    };

    return (
        <>
       
            <Conestraction><h2>🚀 Coming Soon</h2></Conestraction>
           <Navbar logout={ logout } userId={userId} isLog={true} />
            <Stl>
                <div className="intro">


                    <h1>Instant Page</h1>
                    <p>
                        Launch your online business in minutes with Instant Page.

                        Instant Page is the perfect solution for social media sellers who want a professional way to showcase and sell a single product. Whether you promote your products on Facebook, Instagram, TikTok, WhatsApp, or other social platforms, Instant Page gives you a dedicated, fully customizable page that you can share with your customers through a single link.

                        Instead of sending customers multiple messages, photos, and price details, direct them to one professional page containing everything they need to know about your product.
                    </p>
                    <hr />

                    <div className="featurs">
                        <div>
                            <h5>Perfect for Social Media Sellers</h5>
                            <p> <span><TbPointFilled /></span> Share one simple link across all your social media accounts.</p>
                            <p> <span><TbPointFilled /></span> Display product images, descriptions, pricing, and contact information in one place.</p>
                            <p> <span><TbPointFilled /></span> Create a more professional buying experience for your customers.</p>
                            <p> <span><TbPointFilled /></span> Increase customer confidence and improve conversion rates.</p>
                            <p> <span><TbPointFilled /></span> No website or technical skills required.</p>
                        </div>

                        <div>
                            <h5>  What You Get</h5>

                            <p> <span><TbPointFilled /></span> A dedicated page for your product.</p>
                            <p> <span><TbPointFilled /></span> Full control over content, images, pricing, and contact details.</p>
                            <p> <span><TbPointFilled /></span> Mobile-friendly and responsive design.</p>
                            <p> <span><TbPointFilled /></span> Fast setup with no technical skills required.</p>
                            <p> <span><TbPointFilled /></span> Professional online presence for your business.</p>
                        </div>


                    </div>

                    <h5> Simple Pricing Only $2.99 per month with no long-term commitment.</h5>

                    <p>
                        Start selling smarter with Instant Page and give your social media followers a professional destination for your product—all from a single shareable link.

                    </p>
                    <div className="start"><Link to="/register" ><button className="btn large-btn">start now</button></Link></div>

                    <hr />
                    <h5 className="cta">Contact Us </h5>

                    <Form method="post" id='contact' className="form"  >

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
            </Stl></>
    );
};

export default InstantPage;


const Conestraction = styled.section`

width: 100vw;
margin : 0 auto 2rem auto;
text-align  : center;
color : var(--grey-100);
background : var(--grey-800);
padding : 2rem;


`;








