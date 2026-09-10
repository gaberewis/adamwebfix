import { Form, Link } from 'react-router-dom';
import { FormRow, FormRowSelect, SubmitButton, currencies } from '../components';
import Stl from '../css-pocket/create-edit';
import { useState } from 'react';
import { RiDashboardFill, RiAddBoxFill } from "react-icons/ri";
import { TiDelete } from "react-icons/ti";


const CreatePage = () => {

    const [specifications, setSpecifications] = useState([]);
    const orderContact = ['whatsapp', 'phone', 'email'];

    const addSpecification = () => {

        setSpecifications(prev => {
            if (prev.length >= 10) {
                return prev;
            }
            return [
                ...prev,
                { spec: '', details: '' }
            ];
        });
    };

    const deleteSpec = (i) => {
        setSpecifications(prev =>
            prev.filter((_, index) => index !== i)
        );
    };

    return (<Stl>
        <Link to="/dashboard" ><RiDashboardFill /> dashboard</Link>

        <Form method="post" className='form'    encType="multipart/form-data" >
            <FormRow type='file' name='images' labelText={'Add product images'} accept="images/*" multiple required />
            <FormRow type='text' name="company" labelText={'company / business name'} maxLength={100} required />
            <FormRow type='text' name="product" labelText={'product Name'} maxLength={100} required />
            <FormRow type='text' name='price' labelText={'Product price'} maxLength={20} required />
            <FormRow type='text' name='discount' labelText={'price before discount (optional)'} maxLength={20} />
            <FormRowSelect name='currency' list={currencies} />
            <textarea className='form-textarea' name="description" maxLength={1000}
                placeholder="Enter product description..."
                required ></textarea>
            <FormRow type='text' name='phone' labelText={'Phone number'} required />
            <FormRow type='text' name='whatsapp' labelText={'Wahts app  number'} required />
            <FormRow type='email' name='email' labelText={'email'} required />
            <FormRowSelect name='order' list={orderContact} labelText={'recieve order by: '} />
            <textarea className='form-textarea' name="address" maxLength={3000}
                placeholder="Add business address optional..."
            ></textarea>

            {specifications.map((item, index) => (
                <div key={index}>``

                    <div className='spec'>
                        <span onClick={() => deleteSpec(index)} ><TiDelete size={22} /></span>

                        <input className='form-input' name={`specifications[${index}].spec`}
                            maxLength={100} placeholder='Specification' />
                        <textarea name={`specifications[${index}].details`} labelText="Details"
                            className='form-textarea' maxLength={300} placeholder='specification details'  ></textarea>
                    </div>

                </div>

            ))}

            {specifications.length < 10 ?
                <p className='add-spec'>
                    <span>{specifications.length < 1 ? 'Add Specification' : 'Add More'}</span>
                    <span onClick={addSpecification}>
                        <RiAddBoxFill size={22} /></span></p> : ""}

            <input type="hidden"  name="specification"  value={JSON.stringify(specifications)} />

            <SubmitButton />
        </Form>

    </Stl>)

}

export default CreatePage;