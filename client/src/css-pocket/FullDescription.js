import styled from "styled-components";

const SliderStyles = styled.main`

width: 100vw;
margin: 0 auto;
max-width: 800px;
background: #fff;
padding: 2rem;
position: relative;
margin-top : 1px;
margin-bottom :  1px;

.slide {
  max-width: 600px;
  margin: 2rem auto;
  text-align: center;
  padding: 0 1rem;
}

.slide-img {
  width: 100%;
  height: 320px; /* better default */
  object-fit: contain;
  border-radius: 12px;
  background: var(--grey-100);

  display: block;
}

/* Tablet */
@media (min-width: 576px) {
  .slide-img {
    height: 360px;
  }
}

/* Desktop */
@media (min-width: 992px) {
  .slide-img {
    height: 420px;
  }
}


  .dots {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 16px;
  }

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 999px;
    border: none;
    background: #bbb;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .dot.active {
    width: 16px;
    background: #333;
  }

  .dot:hover {
    background: #333;
  }

h5 {
font-size : 1rem;
color : var(--red-mid);
font-weight : 500;
margin-bottom : .6rem;
margin-top : 2rem;
}
p {
line-height: 1.5;
color : #555;
font-size : .875rem;

}


`;

export default SliderStyles;