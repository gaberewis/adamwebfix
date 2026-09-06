import styled from "styled-components";




const Stl = styled.main`

margin : 0 auto;
margin-top : 2rem;
width : 90vw;


.p-spec p:first-child{
margin-bottom : 1rem;
}

.spec { 
position : relative;
display : flex;
gap : 1.2rem;
margin-bottom : 1rem;

.form-input {
min-width : 150px;
border-radius : 10px;
}

span{
 color : var(--red);
 position : absolute;
 bottom : 2.5rem;
 left : .5rem;
cursor : pointer;
}

}
//end of spec

.add-spec {
  display: flex;
 align-items: center;
  gap: 0.3rem;
}
.add-spec span:nth-child(2){
color :var(--pure-green);
margin-top : .5rem;
cursor :pointer;
}



`;

export default Stl;