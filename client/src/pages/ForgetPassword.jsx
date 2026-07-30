import { Form, useActionData } from "react-router-dom";
import { FormRow } from "../components"
import { SubmitButton } from "../components"


const ForgetPassword = () => {

    const actionData = useActionData();
   
    return (
        <>
            <div className="slogan">
                <Link to="/">
                    <img src="/logo.png" alt="colored-logo" /> 
                </Link> <span>adamWebFix</span> </div>
            <div className="form-container">
                <Form method='post' className="form">
                    {actionData?.confirmOtp ? <p className="info">{actionData.confirmOtp}</p> : <p>insert your registred email</p>}
                    <FormRow
                        type="email"
                        name="email"
                        labelText=" "
                        required
                      value = {actionData?.confirmOtp && ''}
                    />
                    {actionData?.errMsg && <p className="error" >{actionData.errMsg}</p>}
                    <SubmitButton />
                </Form></div></>
    )
}

export default ForgetPassword;  