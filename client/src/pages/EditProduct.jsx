import { useLoaderData, useActionData } from "react-router-dom";
import { Form } from "react-router-dom";
import { FormRow, FormRowSelect, SubmitButton } from "../components";


const EditProudct = () => {
  const productstatusArr = ['pending', 'interview', 'declined'];
  const ProudctTypeArr = ['full-time', 'part-time', 'internship'];
  const { Proudct } = useLoaderData();
  const { position, company, ProudctLocation, ProudctType, productstatus } = Proudct;
  const actionData = useActionData();

  return (
    <Form method="post" className="form">
      <h4 className="title">edit Proudct</h4>
      <FormRow type='text' name='company' defaultValue={company} />
      <FormRow type='text' name='position' defaultValue={position} />
      <FormRow type='text' name='ProudctLocation' labelText='user location' defaultValue={ProudctLocation} />
      < FormRowSelect name='ProudctType' labelText='jop type' defaultValue={ProudctType} list={productstatusArr} />
      < FormRowSelect name='productstatus' defaultValue={productstatus} labelText='Proudct status' list={ProudctTypeArr} />
      {actionData?.errorMsg && <p className="error">{actionData.errorMsg}</p>}
      <SubmitButton />
    </Form>
  )
}

export default EditProudct;