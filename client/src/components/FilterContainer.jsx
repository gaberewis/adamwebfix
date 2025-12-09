import { Form, Link, useSubmit } from 'react-router-dom';
import FormRow from './FormRow';
import ForRowSelect from './FormRowSelect';
import SubmitButton from './SubmitButton';
import { useProudctsContext } from '../pages/AllProudcts';

const FilterContainer = () => {
    const submit = useSubmit();
    const { searchValues } = useProudctsContext();
    const { search, ProudctStatus, ProudctType, sort } = searchValues;

    const ProudctStatusArr = ['all', 'pending', 'interview', 'declined'];
    const ProudctTypeArr = ['all', 'full-time', 'part-time', 'internship'];




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
                <h4 className='title'>filter Proudcts</h4>

                <FormRow
                    type='search'
                    name='search'
                    defaultValue={search}
                    onChange={debounce((form)=> submit(form))}
                />
                <ForRowSelect name='ProudctStatus' labelText='Proudct status' list={ProudctStatusArr} defaultValue={ProudctStatus}
                    onChange={(e) => submit(e.currentTarget.form)}
                />
                <ForRowSelect name='ProudctType' list={ProudctTypeArr} labelText='Proudct type' defaultValue={ProudctType}
                    onChange={(e) => submit(e.currentTarget.form)} />
                <h5>
                    <Link to='/dashboard' >reset</Link>
                </h5>
                <SubmitButton />
            </div>
        </Form>
    )
};

export default FilterContainer;