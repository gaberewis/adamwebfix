import { redirect } from 'react-router-dom';
import axios from 'axios';
import { truncates } from 'bcryptjs';

export const registerAction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get('email');
  formData.set('email', email.toLowerCase());
  const data = Object.fromEntries(formData);
  try {
    await axios.post('/api/user/register', data);
    return redirect('/login');
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

    await axios.post('/api/user/login', data);
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

    await axios.post('/api/user/client-msg', data);
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
    await axios.post('/api/user/forget-password', data);
     const confirmOtp = 'An OTP has been sent to your email';
     return { confirmOtp }


  } catch (error) {
    console.log(error.response?.data?.msg);
    const errMsg = error.response?.data?.msg || 'Request faild';
    return { errMsg };
  }
}

export const resetPassword = async({ request })=>{

  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {

    await axios.post('/api/user/reset-password', data);
    return redirect('/login');
    
  } catch (error) {
    console.log(error.response?.data?.msg || 'Request faild');
     const errMsg = error.response?.data?.msg || 'Request faild';
    return { errMsg };

  }

};

export const createPage = async({ request })=>{

  const formData = await request.formData(); 
 
try {
  await axios.post('/api/page/create-page', formData);
  return redirect('/dashboard');
  
} catch (error) {
  console.log(error.response?.data?.msg || 'Request faild');

  const errMsg = error.response?.data?.msg || 'Request faild';
  return { errMsg }

}
}


