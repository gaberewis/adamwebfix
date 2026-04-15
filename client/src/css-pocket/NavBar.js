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
    color: var(--grey-600);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
.head-name{

margin-top: 1.7rem;
margin-bottom: 1rem;
text-align : center;
// font-family: Helvetica, Verdana, "san serif";
font-family : var(--head-font);

  h3{
  color : var(--red-mid);
   font-weight: 700;
   font-size : clamp(1.1rem, 2.4vw, 3rem)
   
}

h5{
 font-weight: 600;
  margin-top : .5rem;
  color: var(--grey-600);
  font-style : italic;
  }

 
}
 

`;
export default CssStl;


// Arial

// Helvetica

// Times New Roman

// Times

// Courier New

// Courier

// Verdana

// Georgia

// Tahoma

// Trebuchet MS