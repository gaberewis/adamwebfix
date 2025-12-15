
import { useOutletContext, Form } from "react-router-dom";
import { FormRowSelect, SubmitButton, FormRow } from '../components';


const AddProduct = () => {

  const { user } = useOutletContext();

  const productSection = ['equipment', 'accessories', 'supplies', 'parts', 'other'];





  return (
    <div>


      <Form method='post' className='form' encType='multipart/form-data' >

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
          <FormRow type='text' name='catagory' />
          <FormRow type='radio' name='popular' lableText='Yes' defaultValue='yse' />
          <FormRow type='radio' name='popular' lableText='No' defaultValue='no' />

          <textarea
            maxLength="1000"
            name="shortDescription" className="short-description"
            placeholder="Add a brief product description"
          ></textarea>
          <textarea
            maxLength="10000"
            name="fullDescription" className="full-description"
            placeholder="Add the full product description"
          ></textarea>

          <FormRowSelect name='section' labelText='Product Type' id='section' list={productSection} defaultValue="equipment" />

          <SubmitButton />
        </div>
      </Form>
    </div>

  )
};
export default AddProduct;




