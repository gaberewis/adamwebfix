import { useLoaderData, useActionData } from "react-router-dom";
import { Form } from "react-router-dom";
import { FormRow, FormRowSelect, SubmitButton } from "../components";




const EditProduct = () => {


  const popularList = ['yes', 'no'];
  const sectioList = ['equipment', 'accessories', 'supplies', 'parts', 'other'];
 

  const  { product } = useLoaderData();
  
 
  const {  name,  shortDescription, fullDescription, section, catagory, popular  } = product ;
const actionData = useActionData();


  return (
    <div>
      <Form method='post' className='form' encType="multipart/form-data" >

        <h4 className="title">Edit Product</h4>

        <div className='form-raw'>
          <label htmlFor='images' className='form-label'>
            Select product images image less than 1MB:
          </label>
          <input type='file' id='images' name='images' className='form-input' accept='image/*' multiple />
          {actionData?.error ? <p className='error'>{actionData.error}</p> : ''}
        </div>

        <div className="form-center">
          <FormRow type='text' name='name' defaultValue={name} />
          <FormRow type='text' name='catagory' defaultValue={catagory} />
         
          <textarea
            maxLength="1000"
            name="shortDescription" className="short-description"
            placeholder="Add a brief product description"
            defaultValue={shortDescription} ></textarea>
          <textarea
            maxLength="10000"
            name="fullDescription" className="full-description"
            placeholder="Add the full product description"
            defaultValue={fullDescription} ></textarea>
          <FormRowSelect name='section' labelText='Product Type' id='section' list={sectioList} defaultValue={section}/>
           <FormRowSelect name='popular' labelText='Popular Product' id='popular' list={popularList} defaultValue={popular}/>
          {actionData?.error ? <p className="error">{actionData.errorMsg} </p> : ''}
          <SubmitButton />
        </div>
      </Form>
    </div>
  )

}

export default EditProduct;