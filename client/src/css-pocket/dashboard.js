import styled from "styled-components";

const Stl = styled.main`


display: grid;
grid-template-columns:auto 1fr;
width : 100%;


.dash-nav-bar{
min-height : 40px;
background : blue;



}

.side-bar{
width : 250px;
padding: 2rem;
height : 100vh;
background : green;
margin-left : -250px;
transition : margin-left .4s ease;
}
   .show-sidebar {
      margin-left: 0;
    }



`;

export default Stl