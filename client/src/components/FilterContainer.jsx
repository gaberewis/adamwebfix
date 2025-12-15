import { Form, Link, useSubmit } from 'react-router-dom';
import FormRow from './FormRow';
import ForRowSelect from './FormRowSelect';
import SubmitButton from './SubmitButton';
import { useproductsContext } from '../pages/Allproducts';

const FilterContainer = () => {
    const submit = useSubmit();
    const { searchValues } = useproductsContext();
    const { search, productstatus, ProductType, sort } = searchValues;

    const productstatusArr = ['all', 'pending', 'interview', 'declined'];
    const ProductTypeArr = ['all', 'full-time', 'part-time', 'internship'];




    const debounce = (onChangeFunc) => {
        let timeOute;
        return (e) => {
            const formToSubmit = e.currentTarget.form;
            clearTimeout(timeOute);
            timeOute = setTimeout(() => {
                onChangeFunc(formToSubmit);
            }, 2000)

        }

    };

    return (
        <Form className='form'>
            <div className='form-center'>
                <h4 className='title'>filter products</h4>

                <FormRow
                    type='search'
                    name='search'
                    defaultValue={search}
                    onChange={debounce((form)=> submit(form))}
                />
                <ForRowSelect name='productstatus' labelText='Product status' list={productstatusArr} defaultValue={productstatus}
                    onChange={(e) => submit(e.currentTarget.form)}
                />
                <ForRowSelect name='ProductType' list={ProductTypeArr} labelText='Product type' defaultValue={ProductType}
                    onChange={(e) => submit(e.currentTarget.form)} />
                <h5>
                    <Link to='/pnws' >reset</Link>
                </h5>
                <SubmitButton />
            </div>
        </Form>
    )
};

export default FilterContainer;