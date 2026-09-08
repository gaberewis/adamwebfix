import { Form, Link } from 'react-router-dom';
import { FormRow, FormRowSelect, SubmitButton, currencies } from '../components';
import Stl from '../css-pocket/create-edit';
import { RiDashboardFill } from "react-icons/ri";


const EditPage = () => {

    const orderContact = ['phone', 'whatsapp', 'email'];

    return (<Stl>
        <Link to="/dashboard" ><RiDashboardFill /> dashboard</Link>

        <Form method="post" className='form' >
            <FormRow type='file' name='images' labelText={'Edit product images'} accept='images/*' multiple  />
            <FormRow type='text' name="company" labelText={'Edit company / business name'} maxLength={100} defaultValue={'company'} />
            <FormRow type='text' name="product" labelText={'Edit product Name'} maxLength={100} defaultValue={'product'} />
            <FormRow type='text' labelText={'Edit Product price'} maxLength={20} defaultValue={'price'} />
            <FormRow type='text' labelText={'Edit price before discount (optional)'} maxLength={20} defaultValue={'discount'} />
            <FormRowSelect name='currency' labelText={'edit currency'} list={currencies}  defaultValue={'currency'} />
            <textarea className='form-textarea' name="description" labelText={'edit product description'}  maxLength={1000}
               defaultValue={'description'}
                 ></textarea>
            <FormRow type='text' mame='phone' labelText={'Edit phone number'} defaultValue={'phone'} />
            <FormRow type='text' mame='whatsapp' labelText={'Edit Wahts app  number'}  defaultValue={'whatsapp'} />
            <FormRow type='email' mame='email' labelText={'Edit email'} defaultValue={'email'} />
            <FormRowSelect name='order' list={orderContact} labelText={'recieve order by: '} defaultValue={'order'} />
            <textarea className='form-textarea' name="address" maxLength={3000}
               defaultValue={'address'}
            ></textarea>
                   <div className='spec'>
                        <input className='form-input' name={`spec`} maxLength={100} defaultValue={'specification'} />
                        <textarea name={`details`} labelText="Details" className='form-textarea' maxLength={300} defaultValue={'spec details'} ></textarea>
                    </div>
            <SubmitButton />
        </Form>
    </Stl>)

}

export default EditPage;