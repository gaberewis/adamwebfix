import { FcApprove } from "react-icons/fc";
import styled from "styled-components";

const MsgReceived = () => {
  return (
    <Stl>
      <div className="content" role="status">
        <FcApprove className="icon" aria-hidden="true" />
        <h2>Your request has been received successfully</h2>
        <p>We will reply to you as soon as possible.</p>
      </div>
    </Stl>
  );
};

export default MsgReceived;

const Stl = styled.section`
  width: 90%;
  max-width: 600px;
  margin: 3rem auto 0;
  color: var(--grey-600);
  font-weight: 500;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.8rem;
    padding: 2rem 1.5rem;
    border: 1px solid #e5e5e5;
    border-radius: 12px;
    background: #fff;
  }

  .icon {
    font-size: 3.5rem;
  }

  h2 {
    margin: 0;
    font-size: clamp(1.2rem, 1.7vw + 0.5rem, 2rem);
    line-height: 1.3;
  }

  p {
    margin: 0;
    line-height: 1.6;
  }
`;