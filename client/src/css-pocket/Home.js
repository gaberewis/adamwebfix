import styled from "styled-components";

const CssSTL = styled.main`

  padding: 2rem;
  margin: 0 auto
  max-width: 90vw;

  
  hr{
  margin : 2rem 2rem;
  }
  .intro {
   
    margin-bottom: 2rem;
    img {
      max-width : 40px; 
    }
h1, h5 {
 text-align : center;
margin : 2rem 0 1rem 0;
line-height : 2;
}
p {
text-align : center;
}

a {
  text-decoration: underline;
}
    
  }

  .featurs{
  margin : 0 auto;
  max-width : 900px;
  display: flex;

  div{
  border : 1px solid var(--grey-400);
  border-radius : var(--border-radius);
  padding : 2.5rem 1.8rem;
  margin : 2rem 1rem;
  max-width : 400px;
  }
 
  p, h5 {
   text-align : left;
   margin-bottom : 1rem
   
   }
   h5{
   text-decoration : underline;
   }

  }


 .start  {
 
 a{
 text-decoration : none;
 }
 
 button {
  max-width : 400px;
  margin : 2rem  auto ;
  font-size: 1.5rem;
  padding : .3rem 3rem;
  border-radius : 3rem;
  text-align : center;
  box-shadow : var(--shadow-1);
   display : block;
  }

  button:hover{
  color : var(--grey-800);
  background : var(--grey-300);
  box-shadow : none;
  }
 }



  @media(max-width : 798px){

  .featurs{
  display: block }
  }

`;

export default CssSTL;





