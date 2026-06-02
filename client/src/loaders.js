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



<<<<<<< HEAD
=======
  
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
>>>>>>> 0aecc7a41d2e2e10b76b3d80fad63eda3b062376
