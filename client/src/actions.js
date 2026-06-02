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
    return redirect('/login');
  } catch (error) {
    console.log(error.response?.data?.msg);
    console.log('BACKEND ERROR:', error.response?.data);
    const errorMsg = error.response?.data?.msg || 'Registration failed';
    return { errorMsg };

  }
};

export const loginAction = async ({ request }) => {

  const formData = await request.formData();
  const email = formData.get('email');
  formData.set('email', email.toLowerCase());
  const data = Object.fromEntries(formData);
  try {

    await axios.post('/api/auth/login', data);
    return redirect('/');

  } catch (error) {
    console.log('BACKEND ERROR:', error.response?.data.msg);
    const errorMsg = error.response?.data?.msg || 'Login failed';
    return { errorMsg };
  }

}




export const clientMsg = async ({ request }) => {

  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {

    await axios.post('/api/auth/clientmsg', data);
    return redirect('/requestdone');

  } catch (error) {
    console.log(error.response?.data?.msg);
    const errorMsg = error.response?.data?.msg || 'Request faild';
    return { errorMsg };
  }
}



