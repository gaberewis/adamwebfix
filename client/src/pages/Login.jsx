import { Form, Link } from "react-router-dom";
import { SubmitButton, FormRow } from "../components";
import { useActionData } from 'react-router-dom';

const Login = () => {
    const actionData = useActionData();
    return (

        <Form method='post' className="form">
        
            <FormRow type="email" name="email" />
            <FormRow type='password' name='password' />
            {actionData?.errMsg && <p className="error" >{actionData.errMsg}</p>}
            <SubmitButton />
            <p className="margin-t"> Not a member yet ? <Link to='/register' className="member-btn" > Register</Link></p>

        </Form>

    )
}

export default Login;