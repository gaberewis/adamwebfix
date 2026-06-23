import { Form, Link } from "react-router-dom";
import { FormRow, SubmitButton } from '../components';
import { useActionData } from 'react-router-dom';

const Register = () => {
    const actionData = useActionData();
    return (
        <>
            <img className="logo" src="/logo.png" alt="app-logo" />
            <div className="form-container">
                <Form method="post" className="form">
                    <FormRow type='text' name='name' />
                    <FormRow type='email' name='email' />
                    <FormRow type='password' name='password' />
                    {actionData?.errMsg && <p className="error" >{actionData.errMsg}</p>}
                    <SubmitButton />
                    <p className="margin-t">Aleardy a member?{" "}<Link to='/login' className="member-btn" > Login</Link>

                    </p>
                </Form>
            </div>
        </>


    )
}

export default Register;