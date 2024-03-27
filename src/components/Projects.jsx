import React from 'react'
import styled from 'styled-components'
import { SingleProject } from './SingleProject'
import projectsData from '../assets/data_base/web_list'
import  { SingleProjectOrig }from './SingleProjectOrig'

function Projects() {
  return (
  <Wrapper>
    
<div className='main-projects-div'>
     <h1>Projects</h1>
 </div>

<div className="projects-div">
    <div className="projects">
     <div className="dummy-start"></div>
        {projectsData.map((item, idx)=>{
          return(
            <SingleProject key={idx} item={item} />
          )
        })}
           <div className="dummy-end"></div>
           
    </div>
</div>
  </Wrapper>
   
  )
}

export default Projects



const Wrapper = styled.div`

position: relative;
z-index: 2;
background-color:#8d64e0;
margin-bottom: -10px ;
box-shadow: inset 10px 9px 2px -17px rgba(255, 255, 255, 0.75);
overflow: hidden;


.dummy-start{
  width: 300px;
  height: 30px;
}

.dummy-end{
  width: 300px;
  height: 300px;
}

h1{
line-height: 50px;
font-family: 'Bungee Shade', cursive;
user-select: none;

}

.main-projects-div {
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 10vh;  
  width:100vw;
}

.projects{
    padding: 200px 0;
    display: block;
    position: relative;
    overflow-x: hidden;
    height: 600px;
    width: 100vw;
    white-space: nowrap;
    z-index: 5;
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
  animation: fade-in-title cubic-bezier(.81,.36,.3,.81);
  animation-timeline: view();
  animation-range:enter enter;
  z-index: 10;
}

.projects-div{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  width: 100vw;
  margin-top: 100px;
  z-index:20;
  
}


@supports(animation-timeline: view()){
  .main-projects-div > h1 {
  animation: fade-in-title cubic-bezier(.81,.36,.3,.81);
  animation-timeline: view();
  animation-range:enter enter;
}
}

@media (max-width: 500px){
  width: 100vw;
  .dummy-start{
    display: none;
}

.dummy-end{
  display: none;
}

.projects{
    padding: 0;
    margin: 0;
    width: 90vw;
    height: 800px;
   
    display: flex;
    position: relative;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    text-align: center;
    flex-direction: row;
    
  
    
}
}
`