import { Form, Link } from "react-router-dom";
import { FormRow, SubmitButton, Terms } from '../components';
import { useActionData } from 'react-router-dom';
import { useState } from "react";
import Stl from "../css-pocket/register";
import { IoIosCloseCircleOutline } from "react-icons/io";


const Register = () => {
    const actionData = useActionData();
    const [isChecked, setIschecked] = useState(true);
    const [terms, setTerms] = useState(false);
    return (
        <Stl>
            <div className="slogan">
                <Link to="/">
                    <img src="/logo.png" alt="colored-logo" />
                </Link> <span>AdamWebFix</span> </div>
            <div className="form-container">
                <Form method="post" className="form">
                    <FormRow type='text' name='name' />
                    <FormRow type='email' name='email' />
                    <FormRow type='password' name='password' />
                    {actionData?.errMsg && <p className="error" >{actionData.errMsg}</p>}
                    <div className="check-t">
                        <input type="checkbox"
                            onChange={() => setIschecked(!isChecked)}
                        /> <span> Accept <Link to="#" onClick={() => setTerms(true)} >terms and conditions</Link> </span> </div>
                    <SubmitButton disabled={isChecked} />
                    <p className="margin-t">Already a member?{" "}<Link to='/login' className="member-btn" > Login</Link>

                    </p>
                </Form>
            </div>
            <Terms />

        </Stl>


    )
}

export default Register;