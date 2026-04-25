import axios from "axios";
import { redirect } from "react-router-dom";


export const dashboardloader = async () => {
  try {
    const { data } = await axios.get('/api/pnwx/auth/current');
    return data;
  } catch (error) {
    console.error("Loader Error: ", error.response?.data || error.message);
    return { error: true, meg: error.response?.data };
  }
};

export const allproductsLoader = async ({ request }) => {
  const url = new URL(request.url);
  const params = Object.fromEntries(url.searchParams);
  try {
    const { data } = await axios.get('/api/pnwx/products', { params });
    return { data, searchValues: { ...params } };

  } catch (error) {
    console.error("Loader Error: ", error.response?.data || error.message);
    return { error: true, meg: error.response?.data };
  }
};


export const editProductLoader = async ({ params }) => {

  try {
    const { data } = await axios.get(`/api/pnwx/products/${params.id}`);
    return  data ; 
  } catch (error) {
    console.error("Loader Error: ", error.response?.data || error.message);
    return { error: true, meg: error.response?.data };
  }
};

export const fullDescription = async({ params })=>{
try {
  const { data } = await axios.get(`/api/pnwx/products/${params.id}`);
  return data;
} catch (error) {
  console.log("Loader Error : ", error.response.data || error.message)
  return {error : true , msg : error.response?.data}
}
  

};

export const clientFormLoader = async()=>{

  try{
const { data } = await axios.get('/api/pnwx/auth/clientform');
  return data;

  }catch(error){

    console.log("Loader Error : ", error.response.data || error.message);
     return {error : true , msg : error.response?.data};

  }

  
};

export const adminAccess = async()=>{

try {
  await axios.post('/api/pnwx/auth/login', {
    "email" : "salesd@pnwx.com",
     "password" : "pnwx@143"
  }, { withCredentials: true});
  return redirect('/dashboard');
} catch (error) {
  console.log("Loader Error : ", error.response?.data?.msg || error.message);
}

};