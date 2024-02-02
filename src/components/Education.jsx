
import React from 'react'
import styled from 'styled-components'

import ucb from '../assets/img/uc b.jpg'

export const Education = () => {
  return (
    <Wrapper>

<div className="title-div">
            <h1>Education</h1>  
</div>

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
            <h2>UC Berkeley</h2>
        <div className="berkeley-img">
            <img src={ucb} alr='UC Berkeley' />
        </div>
        <div className="ucb-desc">
            <h3>
                The University of California, Berkeley, commonly known as UC Berkeley or simply Berkeley, stands as a 
                 of academic excellence and innovation in the heart of the San Francisco Bay Area. Established in 1868, 
                 this public research university has consistently ranked among the top institutions globally. Known for its 
                 rigorous academic programs, Berkeley boasts a distinguished faculty, including Nobel laureates, 
                 Pulitzer Prize winners, and Fields Medalists. The campus is renowned for its vibrant and politically active student body,
                  as well as its commitment to social justice and diversity. Berkeley's sprawling campus is home to iconic landmarks such 
                  as the Campanile and the Doe Library, providing a picturesque backdrop to a wealth of academic pursuits. 
                  With a rich history of groundbreaking research, UC Berkeley continues to contribute significantly to advancements in science,
                   technology, and the humanities, solidifying its status as a leader in higher education and a hub for intellectual curiosity.
            </h3>
        </div>

        <div className="course-work-section">
            <h3>Course Work</h3>
            <div className="courses">
                <div className="course-item"><h2>CS 61A</h2></div>
                <div className="course-item">CS 61B</div>
                <div className="course-item">CS 61C</div>
                <div className="course-item"></div>
                <div className="course-item"></div>
                <div className="course-item"></div>
                <div className="course-item"></div>
                <div className="course-item"></div>
                <div className="course-item"></div>
                <div className="course-item"></div>
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
display:flex;
height: 1600px;
justify-content: center;
align-items: center;
text-align: center;
flex-direction: column;

flex-wrap: wrap;
align-items: center;
z-index: 1;



.main-section{
    display: flex;
    padding: 40px;
    margin: 25px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    overflow: hidden;

}

.main-section > h2 {
    font-size: 45px;
    /* color: orange; */

/* font-family: 'Josefin Sans', sans-serif;
font-family: 'Julius Sans One', sans-serif;
font-family: 'Poiret One', cursive;

font-family: 'Sacramento', cursive;

font-family: 'Tourney', cursive;
font-family: 'Borel', cursive;
font-family: 'Bungee Outline', cursive; */
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
    border: solid black 2px;
}

.courses{
    display: flex;
    flex-direction: row;
    justify-content:center;
    
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
    position: absolute;
    top: 0;
    height:100px;
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
`
