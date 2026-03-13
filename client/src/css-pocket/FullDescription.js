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


  .slide{
  max-width: 600px;
  margin: 40px auto;
  text-align: center;
  }

 .slide-img {
  width: 100%;
  height: 380px;
  object-fit: contain; /* instead of cover */
  border-radius: 16px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
  background: var(--grey-100); }


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
    background: #111;
  }

  .dot:hover {
    background: #111;
  }
.description-text{
line-height: 1.5;
}
h5 {
font-size : 1.2rem;
color : var(--red-mid);
font-weight : 500;
margin-bottom : .6rem;
margin-top : 2rem;
}

`;

export default SliderStyles;