
import { useOutletContext, Form, useActionData } from "react-router-dom";
import { FormRowSelect, SubmitButton, FormRow } from '../components';


const AddProduct = () => {

  const { user } = useOutletContext();

  const actionData = useActionData();

  const categoryList = ['equipment', 'accessories', 'supplies', 'parts'];
  const popularList = ['yes', 'no'];


  return (
    <div>


      <Form method='post' className='form' encType="multipart/form-data" >

        <h4 className="title">Add Product</h4>

        <div className='form-raw'>
          <label htmlFor='images' className='form-label'>
            Select product images image less than 1MB:
          </label>
          <input type='file' id='images' name='images' className='form-input' accept='image/*' multiple />
          {actionData?.error ? <p className='error'>{actionData.error}</p> : ''}
        </div>

          <div className="form-center">
            <FormRow type='text' name='name' />
          <textarea
            name="shortDescription" className="short-description"
            placeholder="Add a brief product description"
         required ></textarea>
          <textarea
            name="fullDescription" className="full-description"
            placeholder="Add the full product description"
          required ></textarea>

          <FormRowSelect name='category' labelText='category' id='category' list={categoryList} defaultValue="equipment" />
          <FormRowSelect name='popular' labelText='Popular Product' id='popular' list={popularList} />
          {actionData?.errorMsg ? <p className="error">{actionData.errorMsg} </p> : ''}
          <SubmitButton />
        </div>
      </Form>
    </div>

  )
};
export default AddProduct;




