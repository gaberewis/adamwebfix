import { Form } from "react-router-dom";
import { FormRow }  from "../components"
import { SubmitButton } from "../components"

const ForgetPassword = ()=>{
    return (
        <>
        <img className="logo" src="/logo.png" alt="app-logo" />
        <div className="form-container">
        <form className="form">
            <FormRow  type='email' name='email' labelText="insert your registred email" required />
            <SubmitButton />
        </form></div></>
    )
}

export default ForgetPassword;