import { Form } from 'react-router-dom';
import { FormRow, FormRowSelect } from '../components';
import Stl from '../css-pocket/landing';



const CreatePage = ()=>{

return(<Stl>

<Form method="post" className='form' >
<FormRow type='file' name='images' labelText={'Add product images'} accept='images/*' multiple required />
<FormRow  type='text' name="name" labelText={'product Name'}   required />
<FormRow  type='numbe' labelText={'Product price' }/>
<FormRowSelect name='currency' />
  

    
</Form>

 </Stl>)

}

export default CreatePage;