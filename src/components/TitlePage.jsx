import React, {useState} from 'react'
import styled from 'styled-components'
import Projects from './Projects'

//assets

import profileImg from '../assets/img/profile-image.svg'
import bear from '../assets/img/bear.svg'
import {Parallax, ParallaxLayer} from '@react-spring/parallax'






 const TitlePage = () => {
    const TITLE = 'MATT'
    const INTERVAL = 500;
    const [title, setTitle] = useState('')


    const generateTitle = () => {
        setTimeout(() =>{
            const inv = setInterval(() => {
     
                if (title.length !== TITLE.length) {
                  setTitle(title + TITLE[title.length]);
                } 
                clearInterval(inv);
               
              }, INTERVAL);
        }, 600)
       
    }

generateTitle();

  return (
    <Wrapper>
<div className='container'>
<div className="custom-shape-divider-bottom-1705205650">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" width="100%">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div>
    

</div>
        <div className="title-main-section"> 
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
        </div>


    </Wrapper>
   
  )
}

export default TitlePage

const Wrapper = styled.div`
position: relative;
width: 100vw;
height: 90vh;
display:flex;
justify-content: center;
flex-direction: column;
flex-wrap: wrap;
align-items: center;
border-radius: 100% 50%;
z-index: 1;


.container{
position: absolute;
overflow: hidden;
width: 100vw;
bottom: 0;
z-index: 900000;
}

.custom-shape-divider-bottom-1705205650 {
    position: relative;
    bottom: 0;
    left: -15vw;
    width: 150vw;
    line-height: 0;
    transform: rotate(180deg);
   
   
}
/* 
.layer1{
position: absolute;
overflow: hidden;
}

path{

    position: absolute;
    overflow: hidden;
} */

.custom-shape-divider-bottom-1705205650 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 259px;
    animation: wave-animation 15s infinite linear;
    
}

 /* .custom-shape-divider-bottom-1705205650 {
    position: relative;
    bottom: 0;
    left:0;
    width: 100%;
    height: 200px;
    overflow: hidden; 
    transform: rotate(180deg);
    z-index: 30000000;
}

.custom-shape-divider-bottom-1705205650 svg {
    position: absolute;
    width: 200%; 
    height: 200px; 
    margin-left: -100%; /
    animation: wave-animation 15s infinite linear;
}  */

.custom-shape-divider-bottom-1705205650 .shape-fill {
    fill: #8D64E0;
}

.title-div{
    position: relative;
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
    align-items: center;
}

.title-div > h1 {
    display: inline-block;
    position: relative;
    margin: 50px;
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

   animation: fade-out linear;
   /* animation-timeline: view(); */
   /* animation-range-start: cover;
   animation-range-end: contain; */
   /* animation-range: contain; */
}




.upper-triangle > .profile-logo {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 30px 20px;
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
    animation: rotate-around 6s cubic-bezier(.81,.36,.3,.81) infinite;
   
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
    margin: 20px;
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



`