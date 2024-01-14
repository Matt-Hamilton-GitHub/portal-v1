import React from 'react'
import styled from 'styled-components'
import { SingleProject } from './SingleProject'
import projectsData from '../assets/data_base/web_list'


function Projects() {
  return (
  <Wrapper>
    
<div className='main-projects-div'>
     <h1>Projects</h1>
 </div>

<div className="projects-div">
    <div className="projects">
     
        {projectsData.map((item, idx)=>{
          return(
            <SingleProject key={idx} item={item} />
          )
        })}
    </div>
</div>
  </Wrapper>
   
  )
}

export default Projects

const Wrapper = styled.div`
width: 100vw;
position: relative;
z-index: 2;

background-color:#8d64e0;




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
  margin-bottom: 20vh;  
  width:100vw;

}

.projects{
  position: relative;


}

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
  margin: 100px 0;
  z-index:20;
}
`