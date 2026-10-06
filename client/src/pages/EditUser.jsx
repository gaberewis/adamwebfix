import { FormRow } from "../components";
import { Form, Link } from "react-router-dom";
import { SubmitButton } from '../components';
import { DashboardContext } from './Dashboard';




const EditUser = ()=>{

    const {user } = DashboardContext();
    console.log(user);

    return(
         <Form className="form" method="post" >
            <p className="title-underline">Edite</p>
            <FormRow type="text" name="name" defaultValue={user.userName} />
             <FormRow type="email" name="email" defaultValue={user.userEmail} />
              <FormRow type="password"  name="password"  />
              < SubmitButton />
         </Form>
    )
}
export default EditUser;