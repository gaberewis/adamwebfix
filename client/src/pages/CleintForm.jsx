import { useLoaderData } from "react-router-dom";


const ClientForm = ()=>{

    const { data } = useLoaderData();
const{name, email, phone, cleintmsg } = data;

   return (
    <>
    <p>{name}</p>
      <p>{email}</p>
        <p>{phone}</p>
          <p>{cleintmsg}</p>
          <hr />
    </>
   ) 
}

export default ClientForm;