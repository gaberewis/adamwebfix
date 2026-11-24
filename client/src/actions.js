import { redirect } from 'react-router-dom';
import axios from 'axios';

export const registerAction = async ({ request }) => {

  try {
    const formData = await request.formData();
    const email = formData.get('email');
    formData.set('email', email.trim().toLowerCase());
    const data = Object.fromEntries(formData);
    await axios.post('/api/user/register', data);
    return redirect('/login');
  } catch (error) {
    console.log('BACKEND ERROR:', error.response?.data);
    const errMsg = error.response?.data?.msg || 'Registration failed';
    return { errMsg };

  }
};


export const loginAction = async ({ request }) => {

  try {
    const formData = await request.formData();
    const email = formData.get('email')?.trim().toLowerCase() || '';
    formData.set('email', email);
    const data = Object.fromEntries(formData);
    await axios.post('/api/user/login', data);
    return redirect('/dashboard');
  } catch (error) {
    console.error('Login Error:', error.response?.data || error.message);
    const errMsg =
      error.response?.data?.msg || 'Login failed';
    return { errMsg };
  }
};


export const createPage = async ({ request }) => {

  try {
    const formData = await request.formData();
    await axios.post('/api/page/create-page', formData);
    return redirect('/dashboard');

  } catch (error) {
    const errMsg = error.response?.data?.msg || 'Request faild';
    return { errMsg }
  }
};


export const editUser = async ({ request, params }) => {

  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    await axios.patch(`/api/user/edit-user/${params.id}`, data);
    return redirect('/login');
  } catch (error) {
    const errMsg = error.response?.data?.msg || 'update failed';
    return { errMsg };
  }
}

export const forgetPassword = async ({ request }) => {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    await axios.post('/api/user/forget-password', data);
    const confirmOtp = 'An OTP has been sent to your email';
    return { confirmOtp }

  } catch (error) {
    const errMsg = error.response?.data?.msg || 'Request failed';
    return { errMsg };
  }
}

export const resetPassword = async ({ request }) => {

  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    await axios.patch('/api/user/reset-password', data);
    return redirect('/login');

  } catch (error) {
    const errMsg = error.response?.data?.msg || 'Request failed';
    return { errMsg };

  }
};

export const editPage = async ({ request, params }) => {

  try {
    const formData = await request.formData();
    await axios.patch(`/api/page/${params.id}`, formData);
    return redirect('/dashboard');
  } catch (error) {
    const errMsg = error.response?.data?.msg || 'Request failed';
    return { errMsg }

  }
};

export const reportPage = async ({ request, params }) => {

  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    await axios.patch(`/api/page/report/${params.id}`, data);
    const reported = "Page has been reported";
    return { reported };

  } catch (error) {
    const errMsg = error.response?.data?.msg || "Something went wrong";
    return { errMsg }
  }

}

export const clientMsg = async ({ request }) => {

  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    await axios.post('/api/user/client-msg', data);
    return redirect('/request-done');

  } catch (error) {
    const errMsg = error.response?.data?.msg || 'Request failed';
    return { errMsg };
  }
}



