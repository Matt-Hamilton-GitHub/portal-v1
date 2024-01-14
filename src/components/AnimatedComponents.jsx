import React, {useState} from 'react'
import styled from 'styled-components'
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import Projects from './Projects'

//assets

import profileImg from '../assets/img/profile-image.svg'
import bear from '../assets/img/bear.svg'
import ucb from '../assets/img/uc b.jpg'




const AnimatedComponents = () => {
    const TITLE = 'MATT'
    const INTERVAL = 500;
    const [title, setTitle] = useState('')

    const generateTitle = () => {
        setTimeout(() =>{
            const inv = setInterval(() => {
     
                if (title.length != TITLE.length) {
                  setTitle(title + TITLE[title.length]);
                } 
                clearInterval(inv);
              
              }, INTERVAL);
        }, 600)
       
    }

generateTitle();
  return (
    <Wrapper>

           <Parallax pages={2} >
                <ParallaxLayer speed={-1} >
                <div className="title-div">
                    <h1>{title} <b>HAMILTON</b></h1>
                    <div className="upper-triangle">
                <div className="profile-logo">
                    <img className='profile-img' src={profileImg} alt='profile' />
                    <div className="cal-div">
                    <span className='golden-bear-slogan'>Go Bears!</span>
                    <img className='golden-bear' src={bear} alt='golden bear' />
                    </div>
                    </div>
                </div> 
                </div>
                </ParallaxLayer>
                <ParallaxLayer offset={1.4} speed={-0.4}>
                    <div className="greeting-section">
                        <div className="greeting-div">
                        {/* <div className="ucb-img">
                            <img src={ucb} alt='school ucb'/>
                        </div> */}
                        <h1>Software Engineer</h1>
                        <h3>I am an accomplished Full Stack Developer with extensive expertise in constructing robust web applications utilizing a 
                            diverse tech stack encompassing React, Node.js, MongoDB, Firebase, Auth, and various complementary technologies. 
                            In addition to my proficiency in the MERN (MongoDB, Express.js, React, Node.js) stack, I possess a solid foundation 
                            in multiple programming languages including C++ and Python. My experience extends beyond the mere application of these 
                            technologies, leveraging a comprehensive understanding to architect and deploy scalable, efficient, and innovative web solutions.
                            The time that I was able to commit to my education has been invaluable to my professional growth. I am eager to enter 
                            the professional sphere and apply my newfound qualifications and knowledge to the job. I am looking forward to 
                            obtaining new experience and skills that could benefit both myself and the company.
                             I look forward to bringing a fresh and technical touch to any project and becoming a part of your amazing team.</h3>
                    </div>
                    
                    </div>
                </ParallaxLayer>
        </Parallax>
                


    </Wrapper>
   
  )
}


export default AnimatedComponents

const Wrapper = styled.div`
width: 100vw;
height: 100vh;
display:flex;
justify-content: center;
flex-direction: column;
flex-wrap: wrap;
align-items: center;
/* background: linear-gradient(
    338deg,
    #eceef5 2%,
    #f6f6f6 93%
  ); */
  z-index: 1000;


.title-div{
    display:flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: no-wrap;
    align-items: center;
    margin-top:50px;
    
  
}

.title-div > h1 {
    display: block;
    position: relative;
    margin: 70px;
    /* right: 10%; */
    font-weight: 400;
    font-size: 2.5rem;

/* font-family: 'Gruppo', sans-serif; */
/* font-family: 'Sacramento', cursive; */
/* font-family: 'Exo', sans-serif; */
/* font-family: 'Julius Sans One', sans-serif; */
/* font-family: 'Megrim', system-ui; */
font-family: 'Nixie One', system-ui;
/* font-family: 'Poiret One', sans-serif; */




   // top: -50%;
   letter-spacing: 15px;
}


.upper-triangle {
    display: flex;
    position: relative;
    width: 100vw;
    
    justify-content:center;
    align-items: center;
    text-align: center;
}

.upper-triangle > .profile-logo {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    
    text-align: center;
    width: auto;
    z-index:100;
    user-select: none;
    
}


.profile-logo::before{
    content: "";
    position: absolute;
    width: 150px;
    height: 150px;
    top: -30px;
    left: 60px;
    
    background: linear-gradient(338deg, rgba(140,82,255,1) 2%, #ff8a41 99%);
    border-radius: 90px;
    box-shadow:  0px 0px 63px -14px rgba(0, 0, 0, 1);

    animation: rotate-around 3s cubic-bezier(.81,.36,.3,.81) infinite;
   
}


.profile-logo > .profile-img {
    position: relative;
    border: solid 2px black;
    left: 50px;
    border-radius: 90%;
    width: 200px;
    z-index:10;
    pointer-events: none;
}

.cal-div{
    display: block;
    position: relative;
    right: -25%;
    margin: 15px;
}

.golden-bear-slogan {
    position: relative;
    display: flex;
    justify-content: center;

    align-items: center;
    font-family: 'Poiret One', sans-serif;
  
}

.golden-bear {
    position: relative;
    width: 50px;
}


.greeting-section{
    display: flex;
    position: relative;
    justify-content:center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    
}

.greeting-div{
    display: flex;
    position: relative;
    justify-content:center;
    flex-direction: column;
    align-items: center;
    text-align: center;
  
}

.greeting-div > h1 {
color: #a87818;
}

.greeting-div > h3 {
    padding: 0px 6vw;
}
.ucb-img{
position: absolute;
top: -140px;
left: 40px;

}

.ucb-img > img{
    width: 300px;
    border-radius:100px;
    border: 2px solid black;
}

`