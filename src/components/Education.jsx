
import React from 'react'
import styled from 'styled-components'

import CourseItem from './CourseItem'

import ucbCourses from '../assets/data_base/courseUCB'
import ucb from '../assets/img/uc b.jpg'


export const Education = () => {
  return (
    <Wrapper>
<div className='animation-container adjust-1'>
<div className="custom-shape-divider-1">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
    </svg>
</div>
</div>

<div className='animation-container adjust-2'>
<div className="custom-shape-divider-2">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
    </svg>
</div>

</div>

<div className="main-section"> 

        <div className="title-div">
            <h1>Education</h1>  
        </div>
  
        <div className="berkeley-img">
            <img src={ucb} alr='UC Berkeley' />
        </div>

        <div className="ucb-desc">
                <h2>UC Berkeley</h2>
            <h3>
                The University of California, Berkeley, commonly known as UC Berkeley or simply Berkeley, stands as a 
                 of academic excellence and innovation in the heart of the San Francisco Bay Area. Established in 1868, 
                 this public research university has consistently ranked among the top institutions globally. Known for its 
                 rigorous academic programs, Berkeley boasts a distinguished faculty, including Nobel laureates, 
                 Pulitzer Prize winners, and Fields Medalists. The campus is renowned for its vibrant and politically active student body,     
            </h3>
        </div>

        <div className="course-work-section">
            <h3>Course Work</h3>
            <hr />
            <div className="courses">
                {ucbCourses.map((item, idx) => {return <CourseItem key={idx} item={item}/>})}
            </div>
        </div>
    </div>

    <div className='animation-container adjust-3'>
        <div className="custom-shape-divider-3">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div>
</div>
    </Wrapper>
  )
}


export default Education

const Wrapper = styled.div`
position: relative;
display: flex;

justify-content: center;
align-items: center;
text-align: center;
flex-direction: column;

align-items: center;
z-index: 1;
user-select: none;


.main-section{
    display: flex;
    padding: 40px;
    margin: 200px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
}

.main-section > h3 {
font-size: 30px;
/* color: orange; */

/* font-family: 'Josefin Sans', sans-serif;
font-family: 'Julius Sans One', sans-serif;
font-family: 'Poiret One', cursive;

font-family: 'Sacramento', cursive;

font-family: 'Tourney', cursive;
font-family: 'Borel', cursive;
font-family: 'Bungee Outline', cursive; */
}

.ucb-desc > h2 {
    font-weight: 900;
    font-family: 'Nixie One', system-ui;
  
}

.course-work-section > h3 {
    font-weight: 900;
}

.berkeley-img{
    display: flex;
    justify-content: center;
    margin: 40px;
    position: relative;
    border-radius: 50%;
    -webkit-box-shadow: 0px 11px 41px 2px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 11px 41px 2px rgba(0,0,0,0.75);
    box-shadow: 0px 11px 41px 2px rgba(0,0,0,0.75);
    
}

.ucb-desc{
 width: 80vw;  
 max-width: 70vw;
}

.berkeley-img > img{
    display: block;
    top: 40px;
    border-radius: 50%;
    width: 350px;
    height: 350px;
    object-fit: cover;
    border: solid #ff8a41 3px;
    z-index: 10;
    
}

.berkeley-img::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #ff8a41;
    box-shadow: 0px 11px 41px 2px rgba(0,0,0,0.75);
    z-index: 1;

    /* animation: 10s infinite orbit-move-small-cc linear; */
}

.berkeley-img::after{
    content: '';
    position: absolute;
    top: -30px;
    left: -50px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: #7c3dfb;
    box-shadow: 0px 11px 41px 2px rgba(0,0,0,0.75);
    z-index: -1;


    /* animation: 10s infinite orbit-move-small linear; */

}


.course-work-section{
    position: relative;
 
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
.course-work-section > h3{
    // border-bottom: 1px solid black
}
.courses{
    position: relative;
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
    
}

hr{
    position: absolute;
    top: 40px;
    right: 25%;
    width: 50%;
  
    
}
.course-item{
    margin: 5px;
    background: linear-gradient(338deg, rgba(140,82,255,1) 2%, #ff8a41 99%);
    border-radius: 15%;
}

.adjust-1{
    top: 0px;
    height: 230px
}

.adjust-2{
z-index: 300;
height: 230px;
top: -1px;
}

.adjust-3{
    
    bottom:0;
}

.title-div{
    position: relative;
    margin-top: -100px;
    margin-bottom: 150px;
    height: 100px;
    z-index: 400;
}

.title-div > h1{
  line-height: 50px;
  font-family: 'Bungee Shade', cursive;
  user-select: none;
  position: relative;
  animation: fade-in-title cubic-bezier(.81,.36,.3,.81);
  animation-timeline: view();
  animation-range:enter enter;
  z-index: 10;
}

.custom-shape-divider-1 {
    position: relative;
    top: 10px;
    left: -15vw;
    width: 150vw;
    transform: rotate(180deg);
    z-index: 20;
 
}

.custom-shape-divider-1 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 220px;
    animation: wave-animation 15s infinite linear;
    
}

.custom-shape-divider-1 .shape-fill {
    fill: #ff8a41;
    
}

.custom-shape-divider-2 {
    position: relative;
    top: 10px;
    left: -15vw;
    width: 150vw;
    transform: rotate(180deg);
    z-index: 21;
}

.custom-shape-divider-2 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 200px;
    transform: rotateY(180deg);
    animation: wave-animation 15s infinite linear;
}

.custom-shape-divider-2 .shape-fill {
    fill: #8D64E0;
}

.custom-shape-divider-3 {
    position: relative;
    bottom: 0;
    left: -15vw;
    width: 150vw;
    transform: rotate(180deg);
    z-index: 20;
    flex-wrap: wrap;
}

.custom-shape-divider-3 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 209px;
    transform: rotateY(180deg);
    animation: wave-animation 15s infinite linear;
}

.custom-shape-divider-3 .shape-fill {
    fill: #ff8a41;
}


@media (max-width: 500px){

    .berkeley-img::after{
    content: '';
    position: absolute;
    top: -10px;
    left: -20px;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: #7c3dfb;
    box-shadow: 0px 11px 41px 2px rgba(0,0,0,0.75);
    z-index: -1;


    /* animation: 10s infinite orbit-move-small linear; */

}
}

`
