import styled from "styled-components";

const Stl = styled.main`


  .brand {
    font-size: clamp(1.3rem, 1.8vw, 1.7rem);
    font-weight: 600;
    background-color: #fff;
    padding: 1.6rem;
    box-shadow: var(--shadow-1);
    font-family: Oxygen;
  }

  .content {
    margin: 0 auto;
    width: 90vw;
    max-width: 992px;
    padding: 3rem 1.6rem;
    background-color: #fff;
    margin-top: .1rem;

h5{
font-weight : 500;
font-size : clamp(1.2rem, 1.5vw, 1.4rem);
color : var(--red);
}




  .head {
    max-width: 480px;
    margin: 0 auto;
   


  .slide {
    display: flex;
    flex-direction: column;
    height : 400px;
    align-items: center;
    gap: 1.8rem;
  }

  .slide img {
    display: block;
    width: 90%;
    max-width: 385px;
    max-height : 385px;
    margin: 0 auto;
  }

  .dots {
   margin-top : 2rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  .dots span {
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.3s ease;
  }

  .dots span.active {
    opacity: 1;
  }

  .name {
    margin-top: 2rem;
    font-size: 1.2rem;
    font-weight: 500;
  }

  .price {
    margin-top: .8rem;
    display: flex;
    gap: 2rem;
    font-weight: 600;
    font-size: 1.4rem;
    color: var(--pure-green);
  }

  .price span:first-child {
    color: var(--red);
    font-size: 1.2rem;
  }
      }
  // end of head

    .details{
    margin-top : 2.6rem;
    display : flex;
    flex-direction : column;
    gap : 1.3rem;


    }

    .spec{
     margin-top : 4rem;
     display: flex;
     flex-direction : column;
     align-items: center;

     h5{
     margin-bottom : 1.3rem;
     }

      .spec-items{
      
       display : flex;
      gap : 3rem;
      background-color : var(--grey-100);
      padding : 1rem;
    }
    
    }
    // end of spec

  

      }
    // end of content

`;

export default Stl;