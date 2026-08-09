import styled from "styled-components";

const Stl = styled.main`


  margin: 0 auto;
  max-width: 90%;


  
  hr{
  margin : 2rem 2rem;
  }
  .intro {
    margin-bottom: 2rem;

  
h1, h5 {
 text-align : center;
margin : 1.5rem 0 1rem 0;
line-height : 2;
}
p {
text-align : center;
max-width : 1000px;
margin : 0 auto;
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

 .start a {
 text-decoration : none;
 }

  @media(max-width : 798px){

  .featurs{
  display: block }
  }

`;

export default Stl;





