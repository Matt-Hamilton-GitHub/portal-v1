import React from 'react'
import styled from 'styled-components'

//assets
import profileVideo from '../assets/video/profile-video-v1.mp4'
import profileImg from '../assets/img/profile-image-cl.jpg'
import crown from '../assets//img/crown.png'
import desktop from '../assets/img/desktop.svg'

import msg from '../assets/icons/msg.svg'
import linkedin from '../assets/icons/linkedin.svg'
import home from '../assets/icons/home.svg'
import bear from '../assets/img/bear.svg'
import palms from '../assets/img/palms.svg'
import cloud from '../assets/img/cloud.svg'

 
function TopSection() {
  return (
    <Wrapper>
        <div className="main-top-div">
        <div className="left-div">
                <div className="upper-triangle">
                {/* <video playsInline src={profileVideo}/> */}
                <div className="profile-logo">
                    <img className='home-img' src={home} alt='home-btn' />
                    <img className='crown-img' src={crown} alt='crown' />
                    <img className='profile-img' src={profileImg} alt='profile' />
                    <span className='golden-bear-slogan'>Go Bears!</span>
                    <img className='golden-bear' src={bear} alt='golden bear' />
                </div>
                </div>
            </div>
            <div className="right-div">
                <div className="cloud-div" >
                    <img className='cloud-img' src={cloud} alt='cloud' />
                </div>
                <h1>Full Stack Web Developer</h1>
                <h4>Coding: Where Logic Meets Creativity</h4>
                {/* <p>The pursuit of elegance in code and the joy of turning intricate ideas into functional software are what fuel my passion. It's not just about building applications; it's about pushing the boundaries of what's possible, solving complex problems, and ultimately contributing to a digital world that's continually evolving.
</p> */}
                <img className='message' src={msg} alt='message' />
                <div className="desktop-div">
                    <img  src={desktop} alt='desktop' />
                </div>
                <div className="palms-div">
                    <img className='palms' src={palms} alt='palms' />
                </div>
                <div className="impression-div">
                    <div className="imp"><span>16600+</span><h3>Lines of Code</h3></div>
                    <div className="imp"><span>20+</span><h3>Projects Completed</h3></div>
                    <div className="imp"><span>4+</span><h3>Years Of Experience</h3></div>
                </div>
            </div>
        </div>
        <div className="main-bottom-div">
            <div className="lower-triangle">
                <img className='linked-in' src={linkedin} alt='linkedin' />
            </div>
            <div className='btn-section'>
                <button>Projects</button>
                <button>Education</button>
                <button>Skills</button>
            </div>
        </div>

    </Wrapper>
  )
}

export default TopSection

const Wrapper = styled.div`

display: flex;
position: relative;
flex-direction: column;


/* background: linear-gradient(
    338deg,
    rgba(55, 73, 144, 1) 2%,
    rgba(180, 110, 182, 1) 93%
  );
  */
 

 background: linear-gradient(338deg, rgba(140,82,255,1) 2%, rgba(255,145,77,1) 99%);
  

  width: 100%;
 height: 800px;

  
.main-top-div {
    display: flex;
    flex-direction: row;
    height:90%;
    border-bottom: solid 1px black;
}


.right-div{
    padding-left: 500px;
}

.upper-triangle{
    display: flex;
    position: absolute;
    top:0px;
    background-color: #fbfbfb;
    z-index: 15;
    /* width: 40vw; */
    width: 600px;
    aspect-ratio: 12/9;
    box-shadow: rgba(0, 0, 0, 0.5) 4px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    /* clip-path: polygon(50% 0%, 100% 0, 100% 12%, 30% 73%, 0 100%, 0% 60%, 0 0); */
    clip-path: polygon(50% 0%, 100% 0, 100% 0, 29% 71%, 0 100%, 0% 60%, 0 0);
    user-select: none;
}

.upper-triangle > .profile-logo {
    position: relative;
    top: 60px;
    /* left: 3vw; */
    left: 6px;
    display: block;
    width: 300px;
    z-index:100;
    user-select: none;
}



.profile-logo::before{
    content: "";
    position: absolute;
    width: 150px;
    height: 150px;
    top: -10px;
    left: 70px;
    
    background: linear-gradient(338deg, rgba(140,82,255,1) 2%, rgba(255,145,77,1) 99%);
    border-radius: 110px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}


.profile-logo > .profile-img {
    position: relative;
    border: solid 2px black;
    left: 50px;
    border-radius: 100%;
    width: 200px;
    z-index:10;
    pointer-events: none;
}

.profile-logo > .crown-img { 
    position: absolute;
    width: 90px;
    top: -60px;
    left: 100px;
    z-index:100;
    pointer-events: none;
}

.home-img {
    position: absolute;
    top: -50px;
    left: 10px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    
}

.golden-bear-slogan {
    position: absolute;
    font-family: 'Silkscreen', cursive;
    left: 100px;
    top: 210px;
}

.golden-bear {
    position: absolute;
    widtH: 50px;
    left: 120px;
    top: 230px;
}

.cloud-div{
    position: absolute;
    transform: rotateZ(2deg);
    
}
.cloud-img{
    position: absolute;
    width: 100px;
    top: 50px;
    left: 500px;
    z-index:1000;


}

h1 {
position: absolute;
left: 300px;
top: 100px;
z-index: 100;
font-size: 50px;
line-height: 50px;
font-family: 'Bungee Shade', cursive;
user-select: none;
transform: rotateZ(5deg);

}

h4 {
position: absolute;
left: 500px;
top: 160px;
z-index: 100;
font-size: 20px;
line-height: 50px;
transform: rotateZ(5deg);


/* font-family: 'Cutive Mono', monospace; */
/* font-family: 'Poiret One', cursive; */
/* font-family: 'Sacramento', cursive; */
font-family: 'Borel', cursive;
user-select: none;
 
}

p {
position: absolute;
left: 500px;
top: 250px;
z-index: 100;
font-size: 20px;
line-height: 20px;
max-width: 900px;
font-family: 'Cutive Mono', monospace;
/* font-family: 'Poiret One', cursive; */
/* font-family: 'Sacramento', cursive; */
user-select: none;  
}


.impression-div{
position: absolute;
display: flex;
justify-content: space-evenly;
align-items: center;
width: 80%;
height: 200px;
bottom: 80px;
left: 0px;
}

.imp {
    display: flex;
    justify-content:center;
    align-items: center;
    text-align: center;
    font-family: 'Silkscreen', cursive;
    height: 50px;
    color: white;
    text-shadow: -4px 11px 11px #020202;

}


.imp > span {
    padding-right: 10px;
    font-size: 30px;
}

.palms-div{
    position: absolute;
    z-index: 1;
    top: 300px;
    right: -100px;
    
}

.palms{
    user-select: none;  
}

.lower-triangle{
    background-color: white;
    position:absolute;
    bottom: 0px;
    right: 0px;
    width: 200px;
    height: 200px;
    clip-path: polygon(100% 31%, 100% 0, 100% 0, 29% 71%, 0 100%, 100% 100%, 100% 100%);
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px inset;
    z-index: 5;
}

.desktop-div > img {

    width: 300px;
    pointer-events: none;
}

.message {
    position: absolute;
    width: 50px;
    top: 10px;
    right: 10px;
    cursor: pointer;
    z-index: 100;
}

.desktop-div {
    position: relative;
    top: 200px;
    right: 340px;
    transform: rotateY(40deg);

}

.main-bottom-div {
    height: 50px;
}


.linked-in {
    position: absolute;
    width: 50px;
    bottom: 20%;
    right: 40px;
    cursor: pointer;
    transition: all 4s;

}

.lower-triangle:hover > .linked-in {
    transform:  scale(1.4);
    transform: rotateY(180deg);
    
}

.btn-section{
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-evenly;
    height:150px;
    width:80vw;
    z-index: 100000;

}

button {
    width: 200px;
    height: 40px;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    
    font-family: 'Tourney', cursive;
    font-weight: 900;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}
`