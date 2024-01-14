
import React from 'react'
import styled from 'styled-components'

export const Education = () => {
  return (
    <Wrapper>

{/* <div className="custom-shape-divider-top-1705211709">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
    </svg>
</div> */}


{/* <div className="custom-shape-divider-top">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
    </svg>
</div> */}

        <div>
            <h1>Education</h1>  
        </div> 

        {/* <div className="custom-shape-divider-bottom-1705211970">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div> */}
    </Wrapper>
  )
}


export default Education

const Wrapper = styled.div`
position: relative;
width: 100vw;
height: 80vh;
display:flex;
justify-content: start;
flex-direction: column;
text-align:center;
flex-wrap: wrap;



h1{
  line-height: 50px;
  font-family: 'Bungee Shade', cursive;
  user-select: none;

  position: relative;
  animation: fade-in-title cubic-bezier(.81,.36,.3,.81);
  animation-timeline: view();
  animation-range:enter enter;
  z-index: 100;
}

.custom-shape-divider-top-1705211709 {
    position: absolute;
    top: -100px;
    left: -5vw;
    width: 150vw;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);

}

.custom-shape-divider-top-1705211709 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 259px;
    transform: rotateY(180deg);
    animation: wave-animation 15s infinite linear;
    
}

.custom-shape-divider-top-1705211709 .shape-fill {
    fill: #ff8a41;
    
}

.custom-shape-divider-top {
    position: absolute;
    top: -100px;
    left: -5vw;
    width: 150vw;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-top svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 109px;
    transform: rotateY(180deg);
    animation: wave-animation 15s infinite linear;
}

.custom-shape-divider-top .shape-fill {
    fill: #8D64E0;
}


.custom-shape-divider-bottom-1705211970 {
    position: absolute;
    bottom: 0;
    left: -5vw;
    width: 150vw;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-bottom-1705211970 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 209px;
    transform: rotateY(180deg);
    animation: wave-animation 15s infinite linear;
}

.custom-shape-divider-bottom-1705211970 .shape-fill {
    fill: #ff8a41;
}
`
