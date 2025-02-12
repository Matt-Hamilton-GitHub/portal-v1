import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const MIN_WIDTH = 650;

const Navbar = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth > MIN_WIDTH)

    const handleWindowWidthChange = () => {
        setWindowWidth(window.innerWidth > MIN_WIDTH)
    }

    useEffect(()=>{
        handleWindowWidthChange()
        window.addEventListener("resize", handleWindowWidthChange)
        return () => window.removeEventListener("resize", handleWindowWidthChange)
    }, [])

    return (
        <Wrapper>
            <div className="nav-logo"><h2> <span style={{color:'var(--main-golden)'}}>Golden</span> Bear Lair</h2></div>
            {windowWidth ?
            <div className="page-navigation">
                <a href='#projects'>Projects</a>
                <a href='#education'>Education</a>
                <a href='#experience'>Experience</a>
            </div> : null }
            <div className="social-links">
                <span ><a href="https://github.com/Matt-Hamilton-GitHub" ><FaGithub color='rgb(12, 68, 118)' size={windowWidth ? 35: 25} /></a></span>
                <span><a href="https://www.linkedin.com/in/matt-hamilton-6a1037210/" ><FaLinkedin color='rgb(12, 68, 118)' size={windowWidth ? 35: 25} /></a></span>
            </div>
        </Wrapper>
    )
}

export default Navbar

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
text-wrap: nowrap;
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

h2{
  font-family: 'Poiret One', sans-serif; 
  color: var( --secondary-bear-blue);
}

@media (max-width: 850px){
.nav-logo > h2 {
font-size: 20px;
padding-
}
.nav-logo{
    padding-left: 5px;
}
.page-navigation {
    gap: 10px;
}
}

`