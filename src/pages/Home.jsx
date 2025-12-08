import { Outlet } from "react-router-dom";
import {  useState } from "react";
import styled from "styled-components";


const Home = ()=>{

const [showBar, setShowBar] = useState(false)
    return<Stl   showBar={showBar} >
      <div  className="sid-bar">
<h4>side bar</h4>
      </div>

        <div className="content">

    <nav> <button type='submit' onClick={()=> setShowBar(!showBar)}>Links</button><h4 >Home</h4></nav>
    <Outlet />
        </div>

    </Stl> 
}
export default Home;




const Stl = styled.main`

display: grid;
grid-template-columns : auto 1fr;

 nav{background: #eee;
  height: 78px;
  display: flex;
  justify-content: space-between;
  padding : 20px;
 }

 .sid-bar {
 width : 250px;
 height : 100vh;
  margin-left : ${(props) => (props.showBar ? "0px" : "-250px")};
    background: #eee;
    transition: margin-left .7s ease-in-out;
  }
button{
width : 50px;
height : 50px;
cursor : pointer}
  

`;

