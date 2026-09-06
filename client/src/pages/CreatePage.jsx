import { Form, Link } from 'react-router-dom';
import { FormRow, FormRowSelect, SubmitButton, currencies } from '../components';
import Stl from '../css-pocket/create-edit';
import { useState } from 'react';
import { RiDashboardFill, RiAddBoxFill } from "react-icons/ri";
import { TiDelete } from "react-icons/ti";





const CreatePage = () => {



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

    const deleteSpec = (i) => {
        setSpecifications(prev =>
            prev.filter((_, index) => index !== i)
        );
    };

    return (<Stl>
        <Link to="/dashboard" ><RiDashboardFill /> dashboard</Link>

        <Form method="post" className='form' >
            <FormRow type='file' name='images' labelText={'Add product images'} accept='images/*' multiple required />
            <FormRow type='text' name="company" labelText={'company / business name'} maxLength={100} required />
            <FormRow type='text' name="name" labelText={'product Name'} maxLength={100} required />
            <FormRow type='text' labelText={'Product price'} maxLength={20} required />
            <FormRow type='text' labelText={'price before discount (optional)'} maxLength={20} />
            <FormRowSelect name='currency' list={currencies} />
            <textarea className='form-textarea' name="details" labelText={'Enter product details'} maxLength={1000}
                placeholder="Enter product description..."
                required ></textarea>
            <FormRow type='text' mame='phone' labelText={'Phone number'} />
            <FormRow type='text' mame='whatsapp' labelText={'Wahts app  number'} />
            <FormRow type='email' mame='email' labelText={'email'} />
            <FormRowSelect name='order' list={orderContact} labelText={'recieve order by: '} />
            <textarea className='form-textarea' name="address" maxLength={3000}
                placeholder="Add business address optional..."
            ></textarea>

            <div className='p-spec'>
                <p>Add product specification (optional)</p>
                <div className='spec'>
                    <FormRow
                        name={`spec`}
                        labelText="Specification"
                        maxLength={100}
                    />
                    <textarea
                        name={`details`}
                        labelText="Details"
                        className='form-textarea'
                        maxLength={300}
                        placeholder='specification details'
                    ></textarea>
                </div>

                <div className='spec'>
                    <FormRow
                        name={`spec`}
                        labelText="Specification"
                        maxLength={100}
                    />
                    <textarea
                        name={`details`}
                        labelText="Details"
                        className='form-textarea'
                        maxLength={300}
                        placeholder='specification details'
                    ></textarea>

                </div>
                <div className='spec'>
                    <FormRow
                        name={`spec`}
                        labelText="Specification"
                        maxLength={100}
                    />
                    <textarea
                        name={`details`}
                        labelText="Details"
                        className='form-textarea'
                        maxLength={300}
                        placeholder='specification details'
                    ></textarea>

                </div>
                {specifications.map((item, index) => (
                    <div key={index}>

                        <div className='spec'>
                            <span onClick={() => deleteSpec(index)} ><TiDelete size={22} /></span>

                            <FormRow
                                name={`specifications[${index}].spec`}
                                labelText="Specification"
                                maxLength={100}
                            />
                            <textarea
                                name={`specifications[${index}].details`}
                                labelText="Details"
                                className='form-textarea'
                                maxLength={300}
                                placeholder='specification details'
                            ></textarea>

                        </div>

                    </div>

                ))}

                {
                    specifications.length < 7 ? <p className='add-spec'>
                        <span>Add more</span> <span onClick={addSpecification}>
                            <RiAddBoxFill size={22} /></span></p> : ""

                }
            </div>
            <SubmitButton />

        </Form>

    </Stl>)

}

export default CreatePage;