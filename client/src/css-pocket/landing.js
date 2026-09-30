import styled from "styled-components";

const Stl = styled.section`

width : 90vw;
margin : 0 auto;
padding-top : 2rem;
max-width : 992px;
color :  var(--grey-600); 
font-weight : 600;

li, a {
cursor : pointer;
}
.btn {
background :var(--grey-700); 
color : var(--grey-50);
border-radius :  20px;
font-weight : 600;
cursor : pointer; 
font-size : clamp(.9rem, 1vw, 1rem);
padding : .2rem .7rem;

}


.green{
color : green;
}
.red{
color:  #E0115F
}
.under{
text-decoration : underline;
cursor : pointer;
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


.uls{
position : relative;
opacity : .9;
list-style: none;
font-size:  clamp(.9rem, 1vw, 1rem);
}

.main-ul{
display : flex;
gap : .8rem;

}

.main-ul li:nth-child(3){
cursor : pointer;
}



.icon{
font-size : 18px;
 transform: translateY(3px);
}


}
//  end of the card



`;


export default Stl;