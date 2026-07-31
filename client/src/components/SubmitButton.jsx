import { useNavigation } from 'react-router-dom';



const SubmitButton = ({disabled})=>{
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return(
 <button type='submit' className='btn btn-block' disabled={isSubmitting || disabled } >
    {isSubmitting ? 'submitting...' : 'submit'}
  </button>
  )
 

}
export default SubmitButton;