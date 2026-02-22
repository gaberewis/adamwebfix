import styled from "styled-components";

const SliderStyles = styled.main`

width : 90vw;
margin:0 auto;


  .slide{
  max-width: 800px;
  margin: 40px auto;
  text-align: center;
  }

 .slide-img {
  width: 100%;
  height: 420px;
  object-fit: contain; /* instead of cover */
  border-radius: 16px;
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.25);
  background: #ffff; /* optional: gray background for empty space */
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
    background: #111;
  }

  .dot:hover {
    background: #111;
  }
.description-text{
line-height: 1.5;
}

`;

export default SliderStyles;