import styled from "styled-components";

const Stl = styled.section`

width : 90vw;
margin : 0 auto;
padding-top : 2rem;
max-width : 992px;
color :  var(--grey-700); 
font-weight : 600;
.btn {
background :var(--grey-700); 
color : var(--grey-100);
border-radius :  3px;
font-weight : 600;
cursor : pointer; 
font-size : clamp(.9rem, 1.2vw, 1.1rem);
padding : .3rem .5rem;

}


.green{
color : green;
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
margin-bottom : 3rem;
}

.card{
position : relative;
display : flex;
flex-direction : column;
gap : 2.5rem;
background-color : #fff;
padding: 4rem 2rem 3rem;
border-radius : 7px;
width : 100%;
max-width : 600px;
box-shadow: var(--shadow-1);


ul {
list-style: none;
}



img{
max-width : 100px;
margin-bottom : 1rem;


}

.side-ul{
position : absolute;
top : 2rem;
right : 2rem;
display : flex;
flex-direction : column;
gap : .8rem;

}
.side-ul li{
cursor : pointer;
}

.uls{
position : relative;
}

.main-ul{
display : flex;
gap : .8rem;

}

.main-ul li:nth-child(3){
cursor : pointer;
}

.sub-ul{

position : absolute;
display : flex;
gap : .3rem;
opacity: 0;
margin-top : .4rem;
transform: translateY(3rem);
transition: opacity 0.5s ease, transform 0.3s ease;
}
.sub-ul li{
background :var(--grey-200);
padding : .3rem;
border-radius : 5px;
min-width : 80px;
text-align : center;
cursor : pointer;


}




 .show-ul {
  opacity: 1;
  transform: translateY(0);

}


.side-ul  li:hover{
opacity : .8;
}
.red{
cursor : pointer;
}
.red:hover {
opacity : .7;
}

.icon{
font-size : 18px;
 transform: translateY(3px);
}


}
//  end of the card



`;


export default Stl;