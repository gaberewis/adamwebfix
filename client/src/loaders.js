import axios from "axios";




export const getUser = async()=>{
try{
const { data } = await axios.get('/api/user/getuser');
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
  const { data } = await axios.get('/api/user/getuser');
  return data;

} catch (error) {
  console.log("Loader Error : ", error.response.data || error.message);
     return {error : true , msg : error.response?.data};
}
};

export const getPage = async ({ params }) => {
  try {
    const { data } = await axios.get(`/api/page/${params.id}`);
    return data;
  } catch (error) {
    console.log(
      "Loader Error:",
      error.response?.data || error.message
    );

    return {
      error: true,
      msg: error.response?.data || error.message
    };
  }
};