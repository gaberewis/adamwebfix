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

        <div className='form-row'>
          <input type="file" id="images" name="images" accept="image/*" multiple />
          {actionData?.error ? <p className='error'>{actionData.error}</p> : ''}
        </div>

        <div className="form-center">
          <FormRow type='text' name='name' defaultValue={name} />

          <label htmlFor='images' className='form-label'>
            Edit the short product description
          </label>
       <textarea
    name="shortDescription"
    className="form-textarea"
    maxLength={252}   
    defaultValue={shortDescription}
    required
></textarea>


          <label htmlFor='images' className='form-label'>
            Edit the full product description
          </label>
          <textarea
            maxLength="10000"
            name="fullDescription" className="form-textarea"
            defaultValue={fullDescription} required ></textarea>


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