import { Form, Link } from "react-router-dom";
import Logo from '../assets/images/logo.svg';
import { SubmitButton, FormRow } from "../components";
import { useActionData } from 'react-router-dom';

const Login = () => {
    const actionData = useActionData();
    return (

        <Form method='post' className="form">
            <img src={Logo} alt="logo" className="logo" />
            <FormRow type="email" name="email" />
            <FormRow type='password' name='password' />
            {actionData?.errorMsg && <p className="error" >{actionData.errorMsg}</p>}
            <SubmitButton />
            <p>Not a member yet? <Link to='/register' className="member-btn" >Register</Link></p>

        </Form>

    )
}

export default Login;