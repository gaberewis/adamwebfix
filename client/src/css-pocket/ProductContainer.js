import styled from 'styled-components';

const CssStl = styled.main`
  width: 90%;
  margin: 0 auto;
  margin-bottom : 3rem;

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
    display: flex;
    flex-direction: column; 
    box-shadow: var(--shadow-2);
    text-align: left;
    padding: 1rem;
  }

  header {
    padding: 1rem 1.5rem;
  }

  .image-container {
    display: flex;
    justify-content: center;
    margin-bottom: 1.3rem;
  }

  .image-container img {
    display: block;
    height: 330px;
    width: auto; 
    border-radius: var(--border-radius);
  }

  .info {
    margin-left: 1rem;
    h5 {
      font-weight: 500;
      margin-bottom: 0.8rem;
    }
    p {
      font-size: 0.9rem;
      margin: 0;
      text-transform: capitalize;
      letter-spacing: 0.8px;
      line-height: 1.5;
      color: #555;
    }
  }

  .content {
  margin-top: auto; 
  left: 1rem;

  Link {
    display: block;
    margin-bottom: 1.2rem;
  }
}

.actions {
  margin-top: 1rem;
  display: flex;          
  flex-direction: row;    
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
    .load-more{
    margin-top : 1.3rem;
    }
    .content .f-description{
    font-size : .9rem;
    color : #333;
    text-transform: capitalize;

    }
  
`;

export default CssStl;




