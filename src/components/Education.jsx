
import React from 'react'
import styled from 'styled-components'

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
width: 100vw;
height: 90vh;
display:flex;
justify-content: center;
flex-direction: column;
flex-wrap: wrap;
align-items: center;
z-index: 1;


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

h1{
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
