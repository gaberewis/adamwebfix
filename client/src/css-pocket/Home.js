import styled from "styled-components";

const CssSTL = styled.main`

  padding: 2rem;
  max-width: 650px;
  margin: 0 auto;
  background: #3a2b20;
  min-height: 100vh;
  color: #e6d3a3;
  font-family: "Helvetica", "Verdana", sans-serif;

  .head-part {
    text-align: center;
    margin-bottom: 2rem;
  }

  .head-part img {
    max-width: 90px;
    margin: 2rem auto 1rem;
  }

  .head-part h4{
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 1.3rem;
    font-size : clamp(1.8rem, 3vw, 4rem)
  }

  .head-part p {
   
    line-height: 1.7;
     
  }

   hr {
    margin-top: 2rem;
    border: 1px solid #ffffff30;
  }

.cta {
  margin-top: 2rem;
  padding: 5px 10px;
  color: #fff;
  text-align: center;
  font-weight: 600;
  line-height : 1.7;
  font-size : clamp(1rem, 1.3vw, 1.2rem);
}

  .contact {
    margin-bottom: 2rem;
    margin-top : 2.5rem;
  }

  .contact h5 {
    margin-bottom: 1rem;
    color: #fff;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 0.8rem;
    font-size: 0.95rem;
  }

  .contact-item svg {
    font-size: 1.4rem;
  }

  .contact a {
    text-decoration: none;
    color: inherit;
    transition: 0.3s;
  }

  .contact a:hover {
    color: #ffffff;
  }

  .c-title{
    margin-bottom: 1rem;
    color: #fff;
  }

  .icons {
    display: block;
    font-size: 1.8rem;

  }

  .icons svg { 
    margin-right : 10px;
    cursor: pointer;
    transition: 0.3s;
  }

  .icons svg:hover {
    transform: scale(1.2);
    color: #ffffff;
  }

  /* 📱 Mobile */
  @media (max-width: 480px) {
    padding: 1.5rem;

    .head-part p {
      font-size: 0.93rem;
    }

    .icons {
      justify-content: center;
    }
  }
    .head-part .form{
    color : #3a2b20;
    max-width : 500px;
    }
    .head-part .form-input, textarea{
    background : #e6d3a3
    }
    .head-part .btn{
     background : #3a2b20
   }
`;

export default CssSTL;





