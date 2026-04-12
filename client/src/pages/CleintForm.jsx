import { useLoaderData } from "react-router-dom";
import styled from "styled-components";

const ClientForm = () => {
  const { data } = useLoaderData();

  return (
    <Stl>
      {data.map((item) => (
        <div key={item._id}>
          <p>Client Name : {item.name}</p>
          <p>Email: {item.email}</p>
          <p>Phone : {item.phone}</p>
          <p>Message : {item.clientMsg}</p>
          <hr />
        </div>
      ))}
    </Stl>
  );
};

export default ClientForm;

const Stl = styled.section`

width : 90vw;
margin : 0 auto;
margin-top : 2rem;
p{
margin : .5rem 0 1rem 0;
line-height : 1.5;
}

`;