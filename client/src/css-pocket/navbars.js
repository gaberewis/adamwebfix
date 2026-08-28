import styled from "styled-components";


const Stl = styled.main`

.main{
 display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem ;
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


.user-list div:first-child{
display : flex;

}


.hide{
display : none;
}

.show-list{
display : block;
}

.logout{
cursor  : pointer;
}


`;




export default Stl;
