
import styled from "styled-components";

const Stl = styled.main`



.check-t{
  display: flex;
  align-items: center;
  gap: .6rem;


 a{
  color:#009cde;
  text-decoration: underline;
}

/* Hide default checkbox */
input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid var( --light-paypal);
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
}

/* Checked state */
input[type="checkbox"]:checked {
  background-color: var( --light-paypal);
  border-color: var( --light-paypal);
}

/* Checkmark (✓) */
 input[type="checkbox"]:checked::after {
  content: "✓";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 14px;
  font-weight: bold;
}

/* Hover effect */
input[type="checkbox"]:hover {
  border-color: #0077b3;
  transform: scale(1.1);
}

/* Focus effect */
 input[type="checkbox"]:focus {
  box-shadow: 0 0 0 3px rgba(0, 156, 222, 0.3);
}
}


.terms {
  padding: 5rem 2rem;
  position: absolute;
  z-index: 999;
  background: var(--white);
  width: 100vw;
  min-height: 100vh;
  top: 0;
  left: 0;

   span  {
  background: transparent;
  cursor: pointer;
  position: fixed;
  top: 1.3rem;
  right: 1.3rem;
  box-shadow: var(--shadow-3);
  border-radius: 50%;
  display: flex;
  line-height: 0;
 
}
 

p{
padding : 1rem;
color : var(--grey-500);
border : solid 1px var(--grey-800)
  
}


@media (min-width: 992px) {
   p {
   margin : 0 auto;
    max-width: 65vw;
  }
}
 
}`;

export default Stl;