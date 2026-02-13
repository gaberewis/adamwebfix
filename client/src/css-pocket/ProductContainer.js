import styled from 'styled-components';

const CssStl = styled.main`
  width: 90%;
  margin: 0 auto;

  .products-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: 1fr 1fr 1fr;
    }
     
  }

  .Product {
    background: var(--background-secondary-color);
    border-radius: var(--border-radius);
    display: grid;
    grid-template-rows: auto 1fr;
    box-shadow: var(--shadow-2);
    text-align: left; 
  }

  header {
    padding: 1rem 1.5rem;
  }


  .image-container {
    display: flex;
    justify-content: center; /* center image horizontally */
    margin-bottom: 1.3rem;
  }

  .image-container img {
    display: block;
    height: 330px;
    width: auto; /* maintain aspect ratio */
    border-radius: var(--border-radius);
  }

  .info {
    h5 {
      font-weight: 500;
      margin-bottom: 0.8rem;
    }
 p {
 font-size : .9rem;
      margin: 0;
      text-transform: capitalize;
      letter-spacing:.8px;
        line-height: 1.5; 
      color: var(--text-secondary-color);
    }
  }

  .content {
    padding: 1.5rem 1.5rem;
  }

  .content-center {
    display: grid;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    grid-template-columns: 1fr;
    row-gap: 1.5rem;
    align-items: center;

    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr;
    }
  }


  .actions {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .edit-btn,
  .delete-btn {
    height: 30px;
    font-size: 0.85rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default CssStl;
