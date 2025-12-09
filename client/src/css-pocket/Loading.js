import styled from 'styled-components';

const CssStl = styled.main`


  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(1px);  /* Background blur */
  background: rgba(0, 0, 0, 0.7); /* Slight dark overlay */
  z-index: 9999;


.orbit {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: relative;
  animation: orbit-rotate 1s linear infinite;
}

.dot {
  width: 23px;
  height: 23px;
  background: #fff; 
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  animation: dot-scale 1s ease-in-out infinite;
}

@keyframes orbit-rotate {
  to {
    transform: rotate(360deg);
  }
}

@keyframes dot-scale {
  0%, 100% {
    transform: translateX(-50%) scale(1);
  }
  50% {
    transform: translateX(-50%) scale(0.5);
  }
}

`;
export default CssStl;