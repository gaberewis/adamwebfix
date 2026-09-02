import styled from "styled-components";

const Stl = styled.main`

  .brand {
    font-size: clamp(1.3rem, 1.8vw, 1.7rem);
    font-weight: 600;
    background-color: #fff;
    padding: 1.6rem;
    box-shadow: var(--shadow-1);
    font-family: Oxygen;
  }

  .content {
    margin: 0 auto;
    width: 90vw;
    max-width: 992px;
    padding: 3rem 1rem 1rem;
    background-color: #fff;
    margin-top: .1rem;
  }

  .head {
    max-width: 480px;
    margin: 0 auto;
   
  }

  .slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.8rem;
  }

  .slide img {
    display: block;
    width: 90%;
    max-width: 385px;
    margin: 0 auto;
  }

  .dots {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  .dots span {
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.3s ease;
  }

  .dots span.active {
    opacity: 1;
  }

  .name {
    margin-top: 2rem;
    font-size: 1.1rem;
    font-weight: 500;
  }

  .price {
    margin-top: .8rem;
    display: flex;
    gap: 2rem;
    font-weight: 600;
    font-size: 1.4rem;
    color: var(--pure-green);
  }

  .price span:first-child {
    color: var(--red);
    font-size: 1.2rem;
  }

`;

export default Stl;