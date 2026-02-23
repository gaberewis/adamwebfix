import styled from "styled-components"


const CssSTL = styled.section`
  display: flex;
  flex-direction: column;
  gap : 1.5rem
  min-height: 100px;
  background: #fff;
  color: #333;
  width: 100vw;
  padding: 2rem;
  min-height : 10vh;
  margin-top : 3rem;
  line-height : 2;
  box-shadow : 0 0 0 1px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.01);

  .head-part{
  line-height : 2.5;
  img{
  max-height : 38px;
  margin-top : 1.2rem;
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
  p{
  text-align: center; 
 }
}
.small-text{ font-size: .9rem}
.tiny-text{ font-size: .7rem}


`;

export default CssSTL;