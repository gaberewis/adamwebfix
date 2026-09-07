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
gap : 2rem;
align-items : center;
margin-bottom : 1rem;

.form-input {
max-width : 50%;
border-radius : 10px;
}

.form-textarea {
max-height : 80px;
max-width : 50%;
}

span{
 color : var(--red);
 position : absolute;
 top : .5rem;
 left : .5rem;
cursor : pointer;
}

}
//end of spec

.add-spec {
  display: flex;
 align-items: center;
  gap: .2rem;
}
.add-spec span:nth-child(2){
color :var(--pure-green);
margin-top : .5rem;
cursor :pointer;
}



`;

export default Stl;