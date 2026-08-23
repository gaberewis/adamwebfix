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
padding :  2.5rem .8rem .8rem .8rem ;

span{
font-size : 1.8rem;
margin-top : -.6rem;
}

h5 {
  font-size: clamp(1.2rem, 2vw, 1.6rem);
  font-weight : 500;
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



 .home-logo{
   display: flex;
  align-items: center;
  color : var(--grey-700);
  gap : .5rem;

  img{
  max-width : 40px;
  }

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