import { redirect } from 'react-router-dom';
import axios from 'axios';

export const registerAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await axios.post('/api/pnwx/auth/register', data);
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
    
    await axios.post('/api/pnwx/auth/login', data);
    return redirect('/pnwx');

  } catch (error) {
     console.log('BACKEND ERROR:', error.response?.data.msg);
  const  errorMsg = error.response?.data?.msg || 'Login failed';
  return { errorMsg };
  }

}

export const addProductAction = async({ request })=>{
  const formData = await request.formData();

  const files = formData.getAll('images');
for(const oneFile of files ){
  if(oneFile.size > 1000000){
    return {error : 'File must be less than 1 MB' }
  }
}

try {
  await axios.post('/api/pnwx/products', formData);
  return redirect('/pnwx');
} catch (error) {
 console.log('BACKEND ERROR:', error.response?.data);
const errorMsg = error.response?.data?.msg || 'Adding Product failed';
 return {errorMsg}
 
}
};

// export const editAction = async({ request, params })=>{

//   const formData = await request.formData();
//  const files = formData.getAll('images').filter(f => f.size > 0);

// for(const oneFile of files ){
//   if(oneFile.size > 1000000){
//     return {error : 'File must be less than 1 MB' }
//   }
// }

//   try {
// await axios.patch(`/api/pnwx/products/${params.id}`, formData);
// return redirect('/pnwx');
//   } catch (error) {
 
//     const errorMsg = error.response?.data.msg || 'Editing Product failed';
//     return {errorMsg};
//   }

// };




export const editAction = async ({ request, params }) => {
  const formData = await request.formData();
  const files = formData.getAll('images').filter(f => f.size > 0);

  for (const file of files) {
    if (file.size > 1000000) return { error: 'File must be less than 1 MB' };
  }

  try {
    await axios.patch(`/api/pnwx/products/${params.id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return redirect('/pnwx');
  } catch (err) {
    console.error('EDIT BACKEND ERROR:', err.response?.data);
    return { errorMsg: err.response?.data?.msg || 'Editing Product failed' };
  }
};


export const deleteProductAction = async({ params })=>{
  try {
    await axios.delete(`/api/pnwx/products/${params.id}`);
    return redirect('/pnwx');
  } catch (error) {
    console.log('BACKEND ERROR', error.response?.data );
    const errorMsg = error.response?.data.msg || 'Product cannot be deleted';
    return{errorMsg}
  }
};


