import styled from 'styled-components';

const CssStl = styled.nav`
  height: var(--nav-height);
  min-height : 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  background: var(--background-secondary-color);
  .nav-center {
    display: flex;
    width: 96vw;
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

  .btn-container {
    display: flex;
    align-items: center;
  }

`;
export default CssStl;
