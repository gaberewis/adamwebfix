import axios from "axios";
import { redirect} from "react-router-dom";

export const dashboardloader = async () => {
  try {
    const { data } = await axios.get('/api/users/current');
    return data;
  } catch (error) {
    return redirect('/');
  }
};


export const allProudctsLoader = async({ request })=>{
  
 const params = Object.fromEntries([
  ...new URL(request.url).searchParams.entries(),
 ]);
  try {
     const { data } = await axios.get('/api/Proudcts', { params });
    return { data, searchValues : {...params} };
    
  } catch (error) {
    console,console.log(error.response?.data);
    
    return redirect ('/dashboard');
  }
};

export const editProudctLoader = async({ params })=>{

  try {
    const { data } = await axios.get(`/api/Proudcts/${params.id}`);
    return data;
  } catch (error) {
    console.log(error.response?.data);
      return redirect ('/dashboard');
  }

}


export const adminLoader = async()=>{

  try {
   const { data } = await axios.get('/api/users/app-stats');
   return data;
  } catch (error) {
      console.log(error.response?.data);
      return redirect ('/dashboard');
  }
};

export const satatsLoader = async()=>{
try {
    const { data } = await axios.get('/api/Proudcts/stats');
    
  return data;
 
} catch (error) {
     console.log(error.response?.data);
      return redirect ('/dashboard');
}

}