import { Form, Link } from 'react-router-dom';
import { FormRow, FormRowSelect, SubmitButton, currencies } from '../components';
import Stl from '../css-pocket/create-edit';
import { useState } from 'react';
import { RiDashboardFill, RiAddBoxFill } from "react-icons/ri";





const EditPage = () => {


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
            <FormRow type='file' name='images' labelText={'Edit product images'} accept='images/*' multiple required />
                        <FormRow type='text' name="company" labelText={'Edit business name'} maxLength={100} value={'company'} required />

            <FormRow type='text' name="name" labelText={'Edit product Name'} maxLength={20}  value={'name'} required />

            <FormRow type='number' labelText={'Edit price'} maxLength={20} value={'price'} required />
            <FormRow type='checkbox' labelText={'have a product discount?'}
                onChange={() => setDiscount(pre => !pre)}
            />
            {showDiscount &&
                <FormRow type='text' name="discount" labelText={'Edit product discount'} maxLength={20}  value={'discount'} />
            }
            <FormRowSelect name='currency' list={currencies} labelText={'Edit Currency'} />

            <textarea className='form-textarea' name="Edit description" maxLength={1000}
                placeholder="Enter product description..." value={'description'}
                required ></textarea>


            <FormRow type='number' mame='phone' labelText={'Edit phone number'} value={'phone'} />
            <FormRow type='number' mame='whatsapp' labelText={'Edit wahts app  number'} value={'whatsapp'} />
            <FormRow type='email' mame='email' labelText={'Edit email'} />
            <FormRowSelect name='order' list={orderContact} labelText={'Edit order method'} value={'order'} />

            <textarea className='form-textarea' name="address" maxLength={3000}
                placeholder="Edit address optional..." value={'address'}
            ></textarea>


            <div>
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
            </div>
            <SubmitButton />

        </Form>

    </Stl>)

}

export default EditPage;