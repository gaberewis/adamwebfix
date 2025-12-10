import { redirect } from 'react-router-dom';
import axios from 'axios';





export const registerAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await axios.post('/api/auth/register', data);
    return redirect('/login');
  } catch (error) {
  console.log(error.response?.data?.msg);
   console.log('BACKEND ERROR:', error.response?.data);
   const errorMsg = error.response?.data?.msg || 'Registration failed';
     return {errorMsg};
    
  } 
};

export const loginAction = async({ request })=>{

  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    
    await axios.post('/api/auth/login', data);
    return redirect('/dashboard');

  } catch (error) {
     console.log('BACKEND ERROR:', error.response?.data.msg);
  const  errorMsg = error.response?.data?.msg || 'Login failed';
  return { errorMsg };
  }

}

export const addProudctAction = async({ request })=>{
  const formData = await request.formData();
  const file = formData.get('image');

  if(file && file.size > 1000000)  { return {error : 'File must be less than 1 MB'}};

try {
  await axios.post('/api/Proudcts', formData);
  return redirect('/dashboard');
} catch (error) {
 console.log('BACKEND ERROR:', error.response?.data);
const errorMsg = error.response?.data?.msg || 'Adding Proudct failed';
 return {errorMsg}
 
}
};

export const editAction = async({ request, params })=>{

  const formData = await request.formData();
  const file = formData.get('image');

  if(file && file.size > 1000000)  { return {error : 'File must be less than 1 MB'}};
  try {
await axios.patch(`/api/Proudcts/${params.id}`, formData);
return redirect('/dashboard');
  } catch (error) {
     console.log('BACKEND ERROR:', error.response?.data);
    const errorMsg = error.response?.data.msg || 'Editing Proudct failed';
    return {errorMsg};
  }

};


export const deleteProudctAction = async({ params })=>{
  try {
    await axios.delete(`/api/Proudcts/${params.id}`);
    return redirect('/dashboard');
  } catch (error) {
    console.log('BACKEND ERROR', error.response?.data );
    const errorMsg = error.response?.data.msg || 'Proudct cannot be deleted';
    return{errorMsg}
  }
};


