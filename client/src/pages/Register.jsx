import { Form, Link } from "react-router-dom";
import Logo from '../assets/images/logo.svg'
import { FormRow, SubmitButton } from '../components';
import { useActionData } from 'react-router-dom';

const Register = () => {
    const actionData = useActionData();
    return (
        <Form method="post" className="form">
            <img src={Logo} alt='logo' className="logo" />
            <FormRow type='text' name='name' />
            <FormRow type='text' name='lastName' />
            <FormRow type='text' name='location' />
            <FormRow type='email' name='email' />
            <FormRow type='password' name='password' />
            {actionData?.errorMsg && <p className="error" >{actionData.errorMsg}</p>}
            <SubmitButton />
            <p>Aleardy a member<Link to='/login' className="member-btn" >Login</Link>

            </p>
        </Form>


    )
}

export default Register;