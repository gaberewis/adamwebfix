import { Form, useActionData, Link } from "react-router-dom";
import { FormRow, Navbar } from "../components"
import { SubmitButton } from "../components"
import { TiTick } from "react-icons/ti";



const ForgetPassword = () => {

    const actionData = useActionData();

    return (
        <>
            <Navbar />

            <div className="form-container">
                <Form method='post' className="form">
                    {actionData?.confirmOtp ? <div className="confirmed"><p className="info"><span><TiTick color="#009cde" size={30} /></span>{actionData.confirmOtp}</p></div> : <p>insert your registred email</p>}
                    <FormRow
                        type="email"
                        name="email"
                        labelText=" "
                        required
                        value={actionData?.confirmOtp && ''}
                    />
                    {actionData?.errMsg &&<p className="error" >{actionData.errMsg}</p>}
                    <SubmitButton />
                </Form></div></>
    )
}

export default ForgetPassword;  



