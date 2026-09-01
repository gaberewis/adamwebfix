import { Form, Link } from 'react-router-dom';
import { FormRow, FormRowSelect, currencies } from '../components';
import Stl from '../css-pocket/create-edit';
import { useState } from 'react';
import { RiDashboardFill, RiAddBoxFill } from "react-icons/ri";





const CreatePage = () => {


    const [showDiscount, setDiscount] = useState(false);
    const [specifications, setSpecifications] = useState([]);
    const orderContact = ['phone', 'whatsapp', 'email'];

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
    return (<Stl>
        <Link to="/dashboard" ><RiDashboardFill /> dashboard</Link>

        <Form method="post" className='form' >
            <FormRow type='file' name='images' labelText={'Add product images'} accept='images/*' multiple required />
            <FormRow type='text' name="name" labelText={'product Name'} maxLength={20} required />

            <FormRow type='number' labelText={'Product price'} maxLength={20} required />
            <FormRow type='checkbox' labelText={'have a product discount?'}
                onChange={() => setDiscount(pre => !pre)}
            />
            {showDiscount &&
                <FormRow type='number' labelText={'enter the price before'} maxLength={20} />
            }
            <FormRowSelect name='currency' list={currencies} />

            <textarea className='form-textarea' name="description" maxLength={1000}
                placeholder="Enter product description..."
                required ></textarea>



            {specifications.map((item, index) => (
                <div key={index}>
                    <FormRow
                        name={`specifications[${index}].spec`}
                        labelText="Specification"
                        maxLength={100}
                    />

                    <FormRow
                        name={`specifications[${index}].details`}
                        labelText="Details"
                        maxLength={100}
                    />
                    <FormRow
                        name={`specifications[${index}].spec`}
                        labelText="Specification"
                        maxLength={100}

                    />

                    <FormRow
                        name={`specifications[${index}].details`}
                        labelText="Details"
                        maxLength={100}
                    />


                </div>

            ))}
            {
                specifications.length < 10 ? <p>{specifications.length > 0 ? 'Add more specification' : 'Add specification'} <span onClick={addSpecification}>
                    <RiAddBoxFill size={25} /></span></p> : ""

            }

            <FormRow type='number' mame='phone' labelText={'Phone number'} />
            <FormRow type='number' mame='whatsapp' labelText={'Wahts app  number'} />
            <FormRow type='email' mame='email' labelText={'email'} />
            <FormRowSelect name='order' list={orderContact} labelText={'Select order method'} />

            <textarea className='form-textarea' name="address" maxLength={3000}
                placeholder="Adsiness address optional..."
            ></textarea>

        </Form>

    </Stl>)

}

export default CreatePage;