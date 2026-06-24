import { redirect } from 'react-router-dom';
import axios from 'axios';
import { truncates } from 'bcryptjs';

export const registerAction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get('email');
  formData.set('email', email.toLowerCase());
  const data = Object.fromEntries(formData);
  try {
    await axios.post('/api/auth/register', data);
    return redirect('/checkout');
  } catch (error) {
    console.log(error.response?.data?.msg);
    console.log('BACKEND ERROR:', error.response?.data);
    const errMsg = error.response?.data?.msg || 'Registration failed';
    return { errMsg };

  }
};

export const loginAction = async ({ request }) => {

  const formData = await request.formData();
  const email = formData.get('email');
  formData.set('email', email.toLowerCase());
  const data = Object.fromEntries(formData);
  try {

    await axios.post('/api/auth/login', data);
    return redirect('/dashboard');

  } catch (error) {
    console.log('BACKEND ERROR:', error.response?.data.msg);
    const errMsg = error.response?.data?.msg || 'Login failed';
    return { errMsg };
  }

}




export const clientMsg = async ({ request }) => {

  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {

    await axios.post('/api/auth/clientmsg', data);
    return null;

  } catch (error) {
    console.log(error.response?.data?.msg);
    const errMsg = error.response?.data?.msg || 'Request faild';
    return { errMsg };
  }
}



export const forgetPassword = async ({ request }) => {

  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await axios.post('/api/auth/forgetpassword', data);
     const confirmOtp = 'An OTP has been sent to your email';
     return { confirmOtp }


  } catch (error) {
    console.log(error.response?.data?.msg);
    const errMsg = error.response?.data?.msg || 'Request faild';
    return { errMsg };
  }
}