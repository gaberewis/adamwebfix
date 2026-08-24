import styled from "styled-components";

const Stl = styled.main`


display: grid;
grid-template-columns:auto 1fr;
width : 100%;

.dash-nav-bar{
display : flex;
justify-content : space-between;
alighn-items : center;
background : #fff;
padding :  2.7rem 2rem 1rem 1rem;
padding-top: 2.7rem;
font-weight: 500;
gap: .8rem;

h5 {
  font-size: clamp(1.2rem, 2vw, 1.6rem);
  font-weight : 500;

} 

span{
font-size : 1.8rem;
margin-top : -.6rem;
}


  p{
  font-weight : 500;
  }

a{
color : var(--grey-700);
}

.nav-right{
font-size: .85rem;
margin-top : 1rem;
font-weight : 500
}

}





.side-bar{
width : 250px;
padding: 2rem;
height : 100vh;
background : #fff;
margin-left : -250px;
transition : margin-left .4s ease;
font-size : .85rem;
font-weight: 600;

.content{
display : flex;
flex-direction : column;
justify-content : center;
align-items : center;

}

.btn{
margin-top : .2rem;
width: 160px;
padding : .6rem 0; 
font-weight : 600;
font-size: .875rem;
}


a {
color: var(--grey-100);
}
li{
max-width : 200px;
margin-top: .8rem;
overflow-wrap: break-word;
font-size : .875rem;
font-weight: 400;
border : 1px solid var(--grey-700);
padding : .3rem;
border-radius : 5px;
color : var(--grey-800);
text-align: center;
background-color: var(--grey-100);
width : 160px;

}


li a{
color : var(--grey-700);
}

li:hover{
background-color : #fff;
}

h5 {
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  margin : 2.5rem 0 2rem 0;

} 

 .home-logo{
   display: flex;
  align-items: center;
  color : var(--grey-700);
  gap : .5rem;

  img{
  max-width : 35px;
  }

 }
 
 .logout{
 display : flex;
 gap : .3rem;
 cursor : pointer;
 font-size : 1.1rem;
 font-weight : 500;
 }

.logout span:first-child{
margin-top: .15rem;

}


}


   .show-sidebar {
      margin-left: 0;
     
    }

 

    @media(min-width : 992px){
    .dash-nav-bar span {
    visibility : hidden;
    }

    .side-bar{
    margin-left : 0;
    }

    }


`;

export default Stl