import React from 'react'
import styled from 'styled-components'

import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBarLinks = () => {
    return (<Wrapper>
        <div className="page-navigation">
            <a href='#projects'>Projects</a>
            <a href='#education'>Education</a>
            <a href='#experience'>Experience</a>
        </div>
        <div className='social-links'>
            <span ><a href="https://github.com/Matt-Hamilton-GitHub" ><FaGithub color='rgb(12, 68, 118)' size={35} /></a></span>
            <span><a href="https://www.linkedin.com/in/matt-hamilton-6a1037210/" ><FaLinkedin color='rgb(12, 68, 118)' size={35} /></a></span>
        </div>
    </Wrapper>
    )
}

export default NavBarLinks

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
width: 100vw;
height: 70px;
gap: 25px;

.nav-logo{

display: flex;
justify-content: center;
align-items: center;
text-align: center;
padding: 25px;
}

.nav-logo > h2 {
font-size: 25px;
}

.page-navigation {
    display: flex;
    flex-grow: 1;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    text-align: center;
    gap: 30px;

    
}

.social-links{
    display: flex;
    gap: 25px;
    padding: 20px;
    
}

.social-links-window {
position: absolute;
top: 150px;
background-color: black;
    
}

h2{
  font-family: 'Poiret One', sans-serif; 
  color: var( --secondary-bear-blue);
}

@media (max-width: 850px){
.nav-logo > h2 {
font-size: 20px;
}

.page-navigation {
    gap: 10px;
}
}

`