import { useLoaderData, useActionData } from "react-router-dom";
import { Form } from "react-router-dom";
import { FormRow, FormRowSelect, SubmitButton } from "../components";


const EditProduct = () => {
  const productstatusArr = ['pending', 'interview', 'declined'];
  const ProductTypeArr = ['full-time', 'part-time', 'internship'];
  const { Product } = useLoaderData();
  const { position, company, ProductLocation, ProductType, productstatus } = Product;
  const actionData = useActionData();

  return (
    <Form method="post" className="form">
      <h4 className="title">edit Product</h4>
      <FormRow type='text' name='company' defaultValue={company} />
      <FormRow type='text' name='position' defaultValue={position} />
      <FormRow type='text' name='ProductLocation' labelText='user location' defaultValue={ProductLocation} />
      < FormRowSelect name='ProductType' labelText='jop type' defaultValue={ProductType} list={productstatusArr} />
      < FormRowSelect name='productstatus' defaultValue={productstatus} labelText='Product status' list={ProductTypeArr} />
      {actionData?.errorMsg && <p className="error">{actionData.errorMsg}</p>}
      <SubmitButton />
    </Form>
  )
}

export default EditProduct;