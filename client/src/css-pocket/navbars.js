import styled from "styled-components";


const Stl = styled.main`

.main{
 display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem  ;
}


  .dashboard{
  background : #fff;
  box-shadow : var(--shadow-1);
}



 img {
  max-width: 40px;
}

a {
font-weight : 500;
  color: var(--grey-700);
  font-size : .875rem;
}
 a:first-child {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  
}

.contact{
display: flex;
gap : .6rem;
}


.user-list{

position : fixed;
top : 3rem;
right : 1.8rem;
}
.user-list div:first-child {
  display: flex;
  gap : .3rem;
  justify-content : center;
  
}
.hidden {
margin-top : .5rem;
  display: flex;
  flex-direction: column;
  gap: .5rem;
  align-items: center;
}

.hidden{
background : #fff;
box-shadow : var(--shadow-1);
padding : 1.3rem;
display : flex;
flex-direction : column;
gap : .6rem;
list-style: none;
 
  margin-top: 1rem;
  opacity: 0;
  transform: translateY(3rem);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.show-list{
 opacity: 1;
  transform: translateY(0);
}


.logout{
cursor  : pointer;
}


`;




export default Stl;
