import styled from 'styled-components';

const CssStl = styled.main`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 3rem;

  /* GRID */
  .products-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  /* Tablet */
  @media (min-width: 576px) {
    .products-container {
      grid-template-columns: 1fr 1fr;
    }
  }

  /* Desktop */
  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  /* CARD */
  .Product {
    background: var(--background-secondary-color);
    border-radius: var(--border-radius);
    display: flex;
    flex-direction: column;
    box-shadow: var(--shadow-2);
    padding: 0.8rem;
  }

  header {
    padding: 0.5rem;
  }

  /* IMAGE */
  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    height: 200px; /* fixed container height */
    overflow: hidden;
  }

  .image-container img {
    max-height: 100%;
    max-width: 100%;
    width: auto;
    height: auto;
    display: block;
    border-radius: var(--border-radius);
  }

  /* TEXT */
  .info {
    margin-left: 0;

    h5 {
      font-weight: 500;
      margin-bottom: 0.5rem;
      font-size: 1rem;
    }

    p {
      font-size: 0.85rem;
      margin: 0;
      text-transform: capitalize;
      letter-spacing: 0.5px;
      line-height: 1.4;
      color: #555;
    }
  }

  /* CONTENT */
  .content {
    margin-top: auto;

    a {
      display: block;
      margin-bottom: 1rem;
      font-size: 0.85rem;
    }
  }

  /* BUTTONS */
  .actions {
    margin-top: 0.8rem;
    display: flex;
  
    gap: 0.5rem;
  }

  .edit-btn,
  .delete-btn {
    height: 30px;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* LOAD MORE */
  .load-more {
    margin-top: 1.3rem;
    text-align: center;
  }

  .content .f-description {
    font-size: 0.85rem;
    color: #333;
    text-transform: capitalize;
  }
`;

export default CssStl;