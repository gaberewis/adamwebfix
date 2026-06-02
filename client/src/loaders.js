import axios from "axios";
import { redirect } from "react-router-dom";


export const clientMsgLoader = async()=>{

  try{
const { data } = await axios.get('/api/auth/clientmsg');
  return data;

  }catch(error){

    console.log("Loader Error : ", error.response.data || error.message);
     return {error : true , msg : error.response?.data};

  }
}



