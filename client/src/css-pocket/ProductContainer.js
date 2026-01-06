import styled from 'styled-components';

const CssStl = styled.main`
width : 90%;
margin : 0 auto;

.products-container{
display : grid;
grid-template-columns: 1fr;
gap : 1rem;

}

@media (min-width : 992px){
.products-container {
 grid-template-columns: 1fr 1fr 1fr;
}
}
  
  h5 {
    font-weight: 500;
    margin-bottom: 1.5rem;
  }
  .products {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  
    header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--grey-100);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
  }
  .main-icon {
    width: 50px;
    height: 50px;
    display: grid;
    place-items: center;
    background: var(--primary-500);
    border-radius: var(--border-radius);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--white);
    margin-right: 2rem;
  }
  .info {
 
    p {
      margin: 0;
      text-transform: capitalize;
      letter-spacing: var(--letter-spacing);
      color: var(--text-secondary-color);
    }
  }
  .content {
    padding: 1rem 1.5rem;
  }
  .content-center {
    display: grid;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    grid-template-columns: 1fr;
    row-gap: 1.5rem;
    align-items: center;
    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr ;
    }
  }
  .status {
    border-radius: var(--border-radius);
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    text-align: center;
    width: 100px;
    height: 30px;
    display: grid;
    align-items: center;
  }
  .actions {
    margin-top: 1rem;
    display: flex;
    align-items: center;
  }
  .edit-btn,
  .delete-btn {
    height: 30px;
    font-size: 0.85rem;
    display: flex;
    align-items: center;
  }
  .edit-btn {
    margin-right: 0.5rem;
  }
    .Product{
     background: var(--background-secondary-color);
  border-radius: var(--border-radius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);
    }
  .Product-icon {
    font-size: 1rem;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    margin-bottom : .7rem;§
    svg {
      color: var(--text-secondary-color);
    }
        .Product-text {
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
  }
   

`;
export default CssStl;



//   margin-top: 3rem;
//   display: grid;
// grid-template-columns: 1fr ;
// gap: 1rem;


// @media (min-width: 992px) {
//       grid-template-columns: 1fr 1fr 1fr;
//   }
  