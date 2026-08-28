import styled from "styled-components";

const Stl = styled.section`

width : 90vw;
margin : 0 auto;
padding-top : 2rem;
max-width : 992px;


.pages {
display : flex;
flex-direction : column;
gap : 2rem;
margin-top: 3rem;
align-items : center;
}

.card{
display : flex;
flex-direction : column;
gap : 2rem;
background-color : #fff;
padding: 3rem;


img{
max-width : 100px;
}

url {
display : flex;
gap : .6rem;
list-style: none;

}
.more{
display : flex;
flex-direction : column;
gap : .6rem;
align-items: center;
}

.more span:first-child{
cursor : pointer;
}

.more ul {
  list-style: none;
  padding: 0;
  margin: 0;
  opacity: 0;
  transform: translateY(3rem);
  transition: opacity 0.5s ease, transform 0.3s ease;
}

.more .show-ul {
  opacity: 1;
  transform: translateY(0);
}

}
//  end of the card

`;


export default Stl;