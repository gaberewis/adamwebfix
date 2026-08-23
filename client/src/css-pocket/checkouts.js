import styled from "styled-components";

const Stl = styled.main`
  min-height: 100vh;
  background: #f4f7fb;
  

 
.main{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}
  .card {
    width: 100%;
    max-width: 500px;
    background: #fff;
    padding: 2.5rem;
 
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.08);
  }

  .title {
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    color: #334155;
    margin-bottom: 2rem;
  }

  .plan-section {
    border: 1px solid #e5e7eb;
    border-radius: 14px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    text-align: center;
    background: #fafafa;
  }

  .plan-title {
    font-size: 1.2rem;
    font-weight: 600;
    color: #334155;
    margin-bottom: 0.75rem;
  }

  .price {
    font-size: 3rem;
    font-weight: 700;
    color: var(--light-paypal);
    line-height: 1;
    margin-bottom : .8rem;
  }



  .security-text {
    text-align: center;
    color: #6b7280;
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }
`;

export default Stl;