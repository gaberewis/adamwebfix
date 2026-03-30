import styled from "styled-components"


const CssSTL = styled.section`
  display: flex;
  flex-direction: column;
  gap : 1.5rem
  min-height: 100px;
  background: #fff;
  color: #333;
  width: 100vw;
  padding: 1.8rem;
  min-height : 10vh;
  line-height : 2;
  box-shadow : 0 0 0 1px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.01);

 @media (max-width: 576px) {
    .small-text,  p {
      font-size : .83rem;
    }
  }
 

  .head-part{
  img{
  max-height : 30px;
  margin-top : 1rem;
  }
a {
  color: #333;
  text-decoration: underline;
}

  span{
  margin-right : .3rem}
  
}


.hill{
margin : 2.5rem auto;
width : 85vw;
margin-top : 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
   line-height : 1.4;
  p{
  text-align: center; 
  margin-bottom : 1rem;
 }

}
.small-text{ font-size: .84rem}
.tiny-text{ font-size: .7rem}


 


`;

export default CssSTL;