import axios from "axios";
import { redirect } from "react-router-dom";



export const getUser = async()=>{
try{
const { data } = await axios.get('/api/auth/user');
  return data;
}
  catch(error){
    console.log("Loader Error : ", error.response.data || error.message);
     return {error : true , msg : error.response?.data};
  }

}


export const clientMsg = async()=>{

  try{
const { data } = await axios.get('/api/auth/client-msg');
  return data;

  }catch(error){

    console.log("Loader Error : ", error.response.data || error.message);
     return {error : true , msg : error.response?.data};

  }
}


export const dashboard = async()=>{

  console.log("dashboard");
};

