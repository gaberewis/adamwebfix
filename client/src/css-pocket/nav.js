import styled from "styled-components";


const Stl = styled.main`

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.4rem 2rem ;


 a:first-child {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  
}

.nav-bar span,
a {
  font-weight: 600;
  color: var(--grey-700);
}
 img {
  max-width: 40px;
}

`;




export default Stl;
