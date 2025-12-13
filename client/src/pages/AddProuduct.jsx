
import { useOutletContext, Form } from "react-router-dom";
import { FormRowSelect, SubmitButton, FormRow } from '../components';


const AddProudct = () => {

  const { user } = useOutletContext();
  const productstatus = ['pending', 'interview', 'declined'];
  const ProudctType = ['full-time', 'part-time', 'internship'];






  return (
    <div>


      <Form method='post' className='form' encType='multipart/form-data' >

        <h4 className="title">add Proudct</h4>

        <div className='form-raw'>
          <label htmlFor='images' className='form-label'>
            Select product images image less than 1MB:
          </label>
          <input type='file' id='images' name='images' className='form-input' accept='image/*' multiple />
          {actionData?.error ? <p className='error'>{actionData.error}</p> : ''}
        </div>

        <div className="form-center">
          <FormRow type='text' name='company' />
          <FormRow type='text' name='position' />
          <FormRow type='text' name='ProudctLocation' labelText='user location' defaultValue={user?.location} />
          <FormRowSelect name='productstatus' id='productstatus' list={productstatus} labelText='Proudct Status' defaultValue="pending" />
          <FormRowSelect name='ProudctType' id='ProudctType' list={ProudctType} labelText='Proudct Type' defaultValue='full-time' />
          <SubmitButton />
        </div>
      </Form>
    </div>

  )
};
export default AddProudct;




