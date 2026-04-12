import { FcApprove } from "react-icons/fc";
import styled from "styled-components";



const RequestReceived = ()=>{
   return( <Stl>
      <div className="content">
 <h5><span><FcApprove /></span>Your request has been received successfully</h5>
 <p>We will reply to you as soon as possible</p>
    </div></Stl>)
   
}

export default RequestReceived;

const Stl = styled.section`
  margin: 0 auto;
  width: 90%;
  text-align: center;
  margin-top: 3rem;
  color: #666;
  font-weight: 500;

  .content h5 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size : clamp(1.2rem, 1.7vw, 2rem)
  }

  .content svg {
    font-size: 2rem;
    margin-right: 7px;
  }

  .content p {
    margin: 1.2rem 0 0 0;
  }

`;