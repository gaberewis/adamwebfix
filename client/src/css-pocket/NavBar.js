import styled from 'styled-components';

const CssStl = styled.nav`
  min-height : 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  background: var(--background-secondary-color);
  .nav-center {
    display: flex;
    width: 98vw;
    align-items: center;
    justify-content: space-between;
  
   
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
.head-name{

  font-family: "Fira Sans", sans-serif;
  font-weight: 600;
  font-style: normal;
  


margin-top: 1.7rem;
margin-bottom: 1rem;
text-align : center;
h3{
color : var(--red-mid);
font-weight : 600;

}
h4{
margin-top : 1rem;
font-weight : 500;
color : var(--grey-600);
  font-weight: 500;
  font-style: italic;
}
  span{
  opacity : .5;
  margin-left : 1.5rem;
  margin-right : 1.5rem;
  }

}
 

`;
export default CssStl;
