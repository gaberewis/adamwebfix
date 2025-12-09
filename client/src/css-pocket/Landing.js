import styled from "styled-components";

const CssStl = styled.main`
  width: 90vw;
  max-width: 1120px;;
  margin: 0 auto;
  min-height: 100vh ;
  display: grid;
  align-items: center;

.logo {
  max-width: 200px;
  margin-top : 1rem;
  height: auto; 
}
  h1 {
    font-weight: 600;
    span {
      color: var(--primary-500);
    }
    margin-bottom: 1.1rem;
  }
  p {
    line-height: 2;
    color: var(--text-secondary-color);
    margin-bottom: 1.5rem;
    max-width: 35em;
  }
  .register-link {
    margin-right: 1rem;
  }
          .demo{
    background: transparent;
    border: none;
    margin-left: 1rem;
    font-size: .9rem;
    color: #3a43b5;
    text-decoration: underline;
    cursor : pointer;}
  .main-img {
    display: none;
  }
  .btn {
    padding: 0.6rem .8rem;
  }
 
  @media (min-width: 992px) {
      grid-template-columns: 1fr 500px;
      column-gap: 3rem;
    
    .main-img {
      display: block;
    }
  }

}
`;

export default CssStl;