import { useLoaderData, useActionData } from "react-router-dom";
import { Form } from "react-router-dom";
import { FormRow, FormRowSelect, SubmitButton } from "../components";

const EditProduct = () => {
  const popularList = ['yes', 'no'];
  const categoryList = ['equipment', 'accessories', 'supplies', 'parts'];
  const { product } = useLoaderData();
  const { name, shortDescription, fullDescription, category, popular } = product;
  const actionData = useActionData();


  return (
    <div>
      <Form method='post' className='form' encType="multipart/form-data" >

        <h4 className="title">Edit Product</h4>

        <div className='form-raw'>
          <label htmlFor='images' className='form-label'>
            <p className="small-text" >- Select product images image less than 1MB</p>
            <p className="small-text" >- Click Choose Files and select a maximum of 7 images.</p>
          </label>
          <input type="file" id="images" name="images" accept="image/*" multiple />
          {actionData?.error ? <p className='error'>{actionData.error}</p> : ''}
        </div>
        <div className="form-center">
          <FormRow type='text' name='name' defaultValue={name} />
          

          <textarea
            maxLength="1000"
            name="shortDescription" className="short-description"
            placeholder="Add a brief product description"
            defaultValue={shortDescription} required ></textarea>
          <textarea
            maxLength="10000"
            name="fullDescription" className="full-description"
            placeholder="Add the full product description"
            defaultValue={fullDescription}  required ></textarea>
          <FormRowSelect name='category' labelText='category' id='category' list={categoryList} defaultValue={category} />
          <FormRowSelect name='popular' labelText='Popular Product' id='popular' list={popularList} defaultValue={popular} />
          {actionData?.errorMsg ? <p className="error">{actionData.errorMsg} </p> : ''}
          <SubmitButton />
        </div>
      </Form>
    </div>
  )

}

export default EditProduct;