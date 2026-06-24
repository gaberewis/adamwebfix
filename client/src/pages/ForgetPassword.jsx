import { Form, useActionData } from "react-router-dom";
import { FormRow }  from "../components"
import { SubmitButton } from "../components"

const ForgetPassword = ()=>{
    const actionData  = useActionData();
    return (
        <>
        <img className="logo" src="/logo.png" alt="app-logo" />
        <div className="form-container">
        <Form method='post' className="form">
            <FormRow  type='email' name='email' labelText="insert your registred email" required />
            {actionData?.errMsg && <p className="error" >{actionData.errMsg}</p>}
            <SubmitButton />
        </Form></div></>
    )
}

export default ForgetPassword;