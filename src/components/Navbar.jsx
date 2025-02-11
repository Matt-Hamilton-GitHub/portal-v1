import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const MIN_WIDTH = 920;

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
                <a href='#projects'><h3>Projects</h3></a>
                <a href='#education'><h3>Education</h3></a>
                <a href='#experience'><h3>Experience</h3></a>
            </div> : null }
            <div className="social-links">
                <span ><a href="https://github.com/Matt-Hamilton-GitHub" ><FaGithub color='rgb(12, 68, 118)' size={35} /></a></span>
                <span><a href="https://www.linkedin.com/in/matt-hamilton-6a1037210/" ><FaLinkedin color='rgb(12, 68, 118)' size={35} /></a></span>
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

h3{
    color: var( --secondary-bear-blue);
}

a > h3{
padding: 10px;
transform: * 0.4;

}
a > h3:hover {
border-bottom: 7px solid var( --secondary-bear-blue); }
}

@media (max-width: 850px){
.nav-logo > h2 {
font-size: 20px;
}

.page-navigation {
    gap: 10px;
}


`