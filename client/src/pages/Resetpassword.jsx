import { Form, useActionData } from "react-router-dom";
import { SubmitButton, FormRow, Navbar  } from "../components";


const ResetPassword = ()=>{
const actionData = useActionData();

    return (
         <Form method='post' className="form">

        <FormRow type='password' name='Otp' />
        <FormRow type='password' labelText={'Enter your new password'} name='password' />
       {actionData?.errMsg &&<p className="error" >{actionData.errMsg}</p>}
        <SubmitButton />

        </Form>
    )
}

export default ResetPassword;