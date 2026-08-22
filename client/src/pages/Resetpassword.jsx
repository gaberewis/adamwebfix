import { Form, useActionData } from "react-router-dom";
import { SubmitButton, FormRow  } from "../components";


const ResetPassword = ()=>{
const actionData = useActionData();

    return (
         <Form method='post' className="form">

        <FormRow type='password' name='otp' required />
        <FormRow type='password'  name='password' labelText={'Enter your new password'} required />
       {actionData?.errMsg &&<p className="error" >{actionData.errMsg}</p>}
        <SubmitButton />

        </Form>
    )
}

export default ResetPassword;