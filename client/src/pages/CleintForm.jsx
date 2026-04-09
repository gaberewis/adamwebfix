import { useLoaderData } from "react-router-dom";

const ClientForm = () => {
  const { data } = useLoaderData();

  return (
    <>
      {data.map((item) => (
        <div key={item._id}>
          <p>{item.name}</p>
          <p>{item.email}</p>
          <p>{item.phone}</p>
          <p>{item.clientMsg}</p>
          <hr />
        </div>
      ))}
    </>
  );
};

export default ClientForm;