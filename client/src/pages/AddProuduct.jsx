
import { useOutletContext, Form } from "react-router-dom";
import { FormRowSelect, SubmitButton, FormRow}  from '../components';


const AddProudct = () => {

  const { user } = useOutletContext();
  const ProudctStatus = ['pending', 'interview', 'declined'];
  const ProudctType = ['full-time', 'part-time', 'internship'];

 




return(
  <div>


<Form method='post' className='form' >
  
  <h4 className="title">add Proudct</h4>
  <div className="form-center">
<FormRow type='text' name='company' />
<FormRow type='text' name='position' />
<FormRow type='text' name='ProudctLocation' labelText='user location' defaultValue={user?.location}/>
<FormRowSelect name='ProudctStatus' id='ProudctStatus' list={ProudctStatus} labelText='Proudct Status' defaultValue="pending"/>
<FormRowSelect name='ProudctType'  id='ProudctType' list={ProudctType} labelText='Proudct Type' defaultValue='full-time'/>
<SubmitButton />
</div>
</Form>
</div>

  )
};
export default AddProudct;




