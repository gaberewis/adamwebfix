import { Form, Link, useLoaderData } from 'react-router-dom';
import { FormRow, FormRowSelect, SubmitButton, currencies } from '../components';
import Stl from '../css-pocket/create-edit';
import { RiDashboardFill, RiAddBoxFill } from "react-icons/ri";
import { TiDelete } from "react-icons/ti";
import { useState } from 'react';


const EditPage = () => {


    const { page } = useLoaderData();
    const { company, product, price, discount,
        currency, description, phone, email, whatsapp,
        address, order, specification, images
    } = page;


    const [specs, setSpecs] = useState(specification);

    const addSpecification = () => {
        setSpecs(prev => {
            if (prev.length >= 10) { return prev; }
            return [...prev, { spec: '', details: '' }];
        });
    };
    const deleteSpec = (i) => {
        setSpecs(prev => prev.filter((_, index) => index !== i)
        );
    };




    const orderContact = ['phone', 'whatsapp', 'email'];

    return (<Stl>
        <Link to="/dashboard" ><RiDashboardFill /> dashboard</Link>

        <Form method="post" className='form' encType="multipart/form-data" >
            <FormRow type='file' name='images' labelText={'Edit product images'} accept='images/*' multiple />
            <FormRow type='text' name="company" labelText={'Edit company / business name'} maxLength={100} defaultValue={company} />
            <FormRow type='text' name="product" labelText={'Edit product Name'} maxLength={100} defaultValue={product} />
            <FormRow type='text' name="price" labelText={'Edit Product price'} maxLength={20} defaultValue={price} />
            <FormRow type='text' name="discount" labelText={'Edit price before discount (optional)'} maxLength={20} defaultValue={discount} />
            <FormRowSelect name='currency' labelText={'edit currency'} list={currencies} defaultValue={currency} />
            <textarea className='form-textarea' name="description" placeholder={'edit product description'} maxLength={1000}
                defaultValue={description}
            ></textarea>
            <FormRow type='text' name='phone' labelText={'Edit phone number'} defaultValue={phone} />
            <FormRow type='text' name='whatsapp' labelText={'Edit Wahts app  number'} defaultValue={whatsapp} />
            <FormRow type='email' name='email' labelText={'Edit email'} defaultValue={email} />
            <FormRowSelect name='order' list={orderContact} labelText={'recieve order by: '} defaultValue={order} />
            <textarea className='form-textarea' name="address" maxLength={3000}
                defaultValue={address}
            ></textarea>



            {

                specs.map((sp, index) =>
                (
                    <div className='spec' key={index} >
                        <span onClick={() => deleteSpec(index)} ><TiDelete size={22} /></span>
                        <input className='form-input' name={`spec${index}`} maxLength={100}
                            onChange={(e) => {
                                setSpecs(pre => (
                                    pre.map((item, i) => (
                                        i === index ? { ...item, spec: e.target.value } : item
                                    ))))
                            }}

                             defaultValue={sp.spec}
                        />
                        <textarea name={`details${index}`} className='form-textarea' maxLength={300}
                            onChange={(e) => {
                                setSpecs(pre => (
                                    pre.map((item, i) => (
                                        i === index ? { ...item, details: e.target.value } : item
                                    ))))
                            }}

                     defaultValue={sp.details}
                     ></textarea>
                    </div>
                )
                )
            }

            {specs.length < 10 ?
                <p className='add-spec'>
                    <span>{specification.length < 1 ? 'Add Specification' : 'Add More'}</span>
                    <span onClick={addSpecification}>
                        <RiAddBoxFill size={22} /></span></p> : ""}
            <input type="hidden" name="specification" value={JSON.stringify(specs)} />
            <SubmitButton />
        </Form>
    </Stl>)

}

export default EditPage;