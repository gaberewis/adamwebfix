import { Form, Link } from "react-router-dom";
import { SubmitButton, FormRow } from "../components";
import { useActionData } from 'react-router-dom';


const Login = () => {
    const actionData = useActionData();
    return (
        <>
            <img className="logo" src="/logo.png" alt="app-logo" />
            <div className="form-container">
                <Form method='post' className="form">
                    <FormRow type="email" name="email" />
                    <FormRow type='password' name='password' />
                    {actionData?.errMsg && <p className="error" >{actionData.errMsg}</p>}
                    <Link to={"/forgetpassword"}>forget password?</Link>
                    <SubmitButton />
                    <p className="margin-t">
                        Not a member yet?{" "}
                        <Link to="/register" className="member-btn">
                            Register
                        </Link>
                    </p>

                </Form></div></>

    )
}

export default Login;