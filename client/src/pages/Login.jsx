import { Form, Link, useActionData } from "react-router-dom";
import { SubmitButton, FormRow } from "../components";


const Login = () => {
    const actionData = useActionData();
    return (
        <>
            <div className="slogan">
                <Link to="/">
                    <img src="/logo.png" alt="colored-logo" /> 
                </Link> <span>adamWebFix</span> </div>
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