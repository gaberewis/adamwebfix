import styled from "styled-components";

const Stl = styled.section`

width : 90vw;
margin : 0 auto;
padding-top : 2rem;
max-width : 992px;
.green{
color : #50C878
}
.red{
color:  #E0115F
}


.pages {
display : flex;
flex-direction : column;
gap : 2rem;
margin-top: 3rem;
align-items : center;
}

.card{
position : relative;
display : flex;
flex-direction : column;
gap : 3.2rem;
background-color : #fff;
padding: 5rem;
border-radius : 23px;
width : 100%;
max-width : 600px;


url {
list-style: none;
}



img{
max-width : 100px;
margin-bottom : 1rem;


}

.side-url{
position : absolute;
top : 2rem;
right : 2rem;
display : flex;
flex-direction : column;
gap : .8rem;

}

.urls{
position : relative;
}

.main-url{
display : flex;
gap : .4rem;
}

.main-url li:nth-child(3){
cursor : pointer;
}

.sub-url{
position : absolute;
display : flex;
gap : .6rem;
opacity: 0;
margin-top : 1rem;
transform: translateY(3rem);
transition: opacity 0.5s ease, transform 0.3s ease;
}

.sub-url li{
background: var(--grey-100);
padding : .7rem;
margin-top : .3rem;
width : fit-content;
min-width : 100px;
text-align : center;
font-size : .875rem;
}

.sub-url li:last-child a{
  color: var(--red);
}

 .show-ul {
  opacity: 1;
  transform: translateY(0);

}

}
//  end of the card

`;


export default Stl;