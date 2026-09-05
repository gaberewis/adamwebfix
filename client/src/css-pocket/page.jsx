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
    margin-bottom : .2rem;
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
  height: 320px;
  display: flex;
  justify-content: center; /* vertical */
  align-items: center;     /* horizontal */
}

.slide img {
  display: block;
  width: 90%;
  max-width : 420px;
  max-height: 100%;
  object-fit: contain;
}

.dots {
  margin-top: 2rem;
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
    gap: 1rem;
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
       width : 75VW;
        max-width : 485px;
        margin-top : .2rem;
        gap : 2.5rem;
        display: flex;
       justify-content: space-between;
       background-color: var(--grey-100);
       padding: 1rem;
    }
       .spec-items span{
       width : 50%;
       }
    

    
    }
    // end of spec

    .order{
    cursor : pointer;
    margin : 3.5rem auto 0 ;
    display : flex;
    justify-content : center;
    align-items : center;
    gap : .4rem;
    font-size : 1.8rem;
    font-weight : 500;
    color : var(--pure-green);
  
    }

     .order span:nth-child(2){
     font-size : 3rem;
     }

  .show-more {
  margin-top: 3rem;
  padding: 1.6rem;
  width :100%;

  .more {
    margin-top: 1.6rem;
    display: flex;
    gap: 2rem;
    padding : 1rem;

    overflow-x: auto;
    overflow-y: hidden;

    .price span:nth-child(1) {
    color : var(--red);
    } 

  img {
  width: 80px;
  height: 80px;
  max-width: 80px;
  flex-shrink: 0;

}

    div {
      font-size: 0.825rem;
      flex-shrink: 0;
    }
  }
}
   
    //  end of show more
  

      }
    // end of content

.contact {
background-color: var(--grey-600);
color : var(--grey-50);
display : flex;
flex-direction : column;
gap : 1.6rem;    
padding : 2.3rem;
border-top : solid 4px var(--grey-700);
}

.contact p{
max-width : 385px;

}



`;

export default Stl;