import { Outlet } from "react-router-dom";
import { use, useState } from "react";
import styled from "styled-components";


const Home = ()=>{


    return<Stl>
        <div>
   
        </div>
        <div>
    <nav> <button type='submit' onClick={()=> setShowLinks()}>Links</button><h1>Home</h1></nav>
    <Outlet />
        </div>
    </Stl> 
}
export default Home;

const Stl = styled.main`
width : 98%;
display: grid;
grid-template-columns : 250px auto;

.sid-bar {
margin-left : -250;
}

`;

// display: grid;
// grid-template-columns: 1fr 1fr;