import React from 'react'
import styled from 'styled-components'
import projectsData from '../assets/data_base/web_list'
import SingleProject from './SingleProject'

function Projects() {
  return (
    <Wrapper id='projects'>

      <div className='main-projects-div'>
        <div className="section-title-container">
          {/* <span><FaBriefcase size={50} /></span> */}
          <h1>Projects</h1>
        </div>
      </div>

      <div className="projects">
        {projectsData.map((item, idx) => {
          return (
            <SingleProject key={idx} item={item} />
          )
        })}

        <div className="dummy"></div>
      </div>

      {/* <div className='animation-container adjust-1'>
  <div className="custom-shape-divider-1">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
    </svg>
</div>
</div> */}
    </Wrapper>
  )
}

export default Projects

const Wrapper = styled.div`

position: relative;
z-index: 20;
background: rgb(141,100,224);
background: linear-gradient(180deg, rgba(141,100,224,1) 21%, rgba(255,138,65,1) 100%);
padding-bottom: 100px ;
box-shadow: inset 10px 9px 2px -17px rgba(255, 255, 255, 0.75);

h1{
  font-family: 'Bungee Shade', cursive;
  user-select: none;
  font-size: 3pc;
  letter-spacing: 15px;
  color: #000000;

}

.main-projects-div {
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
  padding-bottom: 10vh;  
  width:100vw;
  z-index: 1;
}

.projects{
    padding: 100px 0;
    display: block;
    position: relative;
    overflow: auto;
    height: 500px;
    width: 100vw;
    white-space: nowrap;
    z-index: 20;
    padding-bottom: 100px;
    
}

/* ::-webkit-scrollbar-track {
  background: grey;
 }
 ::-webkit-scrollbar {
   width: 5px;
}

 ::-webkit-scrollbar-thumb {
   background: white;
   border-radius: 10px 1px;
 } */

.main-projects-div > h1 {
  position: relative;
  // animation: fade-in-title cubic-bezier(.81,.36,.3,.81);
  // animation-timeline: view();
  // animation-range:enter enter;
  
 
}

.projects-div{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  width: 100vw;
  z-index:20;
  
}


.dummy {
height: 200px;
width: 200px;
}

.custom-shape-divider-1 {
    position: relative;
    top: -1px;
    left: -15vw;
    width: 150vw;
    transform: rotate(180deg);
    z-index: 27;
 
}

.custom-shape-divider-1 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 220px;
    animation: wave-animation 10s infinite linear;
    
}

.custom-shape-divider-1 .shape-fill {
    fill: #ff8a41;
    
}


@supports(animation-timeline: view()){
  .main-projects-div > h1 {
  animation: fade-in-title cubic-bezier(.81,.36,.3,.81);
  animation-timeline: view();
  animation-range:enter enter;
}
}

@media (max-width: 850px){
  width: 100vw;

.projects{
    padding: 50px 0;
    padding-left: 30px;
    margin: 0;
    width: 90vw;
    height: 500px;
   
    display: flex;
    position: relative;
    justify-content: center;
    flex-wrap: wrap;
    gap: 25px;
    align-items: center;
    text-align: center;
    flex-direction: row;

    overflow-x: hidden;
}

h1 {
    font-size: 2pc;
    
}


}
`