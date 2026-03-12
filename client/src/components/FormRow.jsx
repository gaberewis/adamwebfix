const FormRow = ({ name, labelText, ...rest  }) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>
      <input
        id={name}
        name={name}
        className='form-input'
        {...rest}
      />
    </div>
  );
};
export default FormRow;
