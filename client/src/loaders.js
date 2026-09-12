import axios from "axios";





export const getUser = async()=>{
try{
const { data } = await axios.get('/api/user/user');
  return data;
}
  catch(error){
    console.log("Loader Error : ", error.response.data || error.message);
     return {error : true , msg : error.response?.data};
  }

}


export const clientMsg = async()=>{

  try{
const { data } = await axios.get('/api/user/client-msg');
  return data;

  }catch(error){

    console.log("Loader Error : ", error.response.data || error.message);
     return {error : true , msg : error.response?.data};

  }
}


export const dashboard = async()=>{

  try {
    
   const { data } =  await axios.get('/api/user/get-user');
   return data;
 
  } catch (error) {
   console.log("Loader Error : ", error.response.data || error.message);
     return {error : true , msg : error.response?.data};
  }
};

