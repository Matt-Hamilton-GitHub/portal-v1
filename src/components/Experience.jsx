import React from 'react'
import styled from 'styled-components'

import experience from '../assets/data_base/experienceDB'
import ExperienceItem from '../components/ExperienceItem'

const Experience = () => {
    return (
        <Wrapper id='experience'>
            <div className="section-title-container">
                <h1>Experience</h1>
            </div>
            <div className="experience-list">
                {experience.map((item, idx) =>{
                    return(<ExperienceItem item={item} key={idx}/>)
                })}
            </div>
        </Wrapper>
    )
}

export default Experience

const Wrapper = styled.div`

background: rgb(140,82,255);
background: linear-gradient(180deg, rgba(141,100,224,1) 21%, rgba(41,200,191,1) 100%);
width: 100vw;
margin-top: -2px;
padding-bottom: 200px;


.section-title-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
}


h1{
  font-family: 'Bungee Shade', cursive;
  user-select: none;
  font-size: 3pc;
  letter-spacing: 15px;
  color:rgb(24, 4, 121);
}

.experience-list {
    margin-top: 25px;
    padding-left: 25px;
    display: flex;
    align-items: start;
    justify-content: flex-start;
    flex-direction: column;
}

@media (max-width: 850px){

h1 {
    font-size: 2pc;
}

}
`