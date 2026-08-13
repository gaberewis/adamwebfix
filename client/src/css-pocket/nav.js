import styled from "styled-components";


const Stl = styled.main`

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem ;


 a:first-child {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  
}

.nav-bar span,
a {
font-weight : 500;
  color: var(--grey-700);
  font-size : .875rem;
}
 img {
  max-width: 40px;
}

.contact{
display: flex;
gap : .6rem;
}


`;




export default Stl;
