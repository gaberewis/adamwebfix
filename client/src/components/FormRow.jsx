const FormRow = ({ name, labelText, disabled, ...rest  }) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>
      <input
        id={name}
        name={name}
        className='form-input'
        disabled={disabled}
        
        {...rest}
      />
    </div>
  );
};
export default FormRow;
