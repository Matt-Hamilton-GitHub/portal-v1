import React from 'react'
import styled from 'styled-components'
import { MdOutlinePlace } from "react-icons/md";


const ExperienceItem = ({ item }) => {
  const { title, place, work_period, achivements } = item
  return (
    <Wrapper>
      <div className="job-title">
        <h2>{title}</h2>
      </div>
      <div className="description">
        <span><MdOutlinePlace size={20}/><h3>{place}</h3></span>
        <span> <h4>{work_period}</h4></span>
        <div className="item-description">
          {achivements.map((item, idx) => {
            return (<span><p key={idx}>{item}</p></span>)
          })}
        </div>
      </div>
    </Wrapper>
  )
}

export default ExperienceItem

const Wrapper = styled.div`

display: flex;
position: relative;
justify-content: start;
align-items: flex-start;
padding: 0 20px;
flex-direction: column;
border-left: 10px solid white;

.job-title::before{
position: relative;
display: inline-block;
top: 3pc;
right: 40px;
background-color: rgb(255, 255, 255);
content: ' ';
min-width: 20px;
min-height: 20px;
border-radius: 50%;
padding: 5px;
// box-shadow: 1px 1px 3px 1px rgb(0, 0, 0);

}

.job-title {
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: flex-start;

  margin-top: -50px;
}
  
 
}

h2{
letter-spacing: 2px;
color: rgb(255, 255, 255);
font-weight: bold;
padding-left: 15px;
}

h4 {
padding-left: 25px;
font-size: .8pc;
font-weight: 700;
color: rgb(0, 0, 0);
}
.description {
  padding: 0 30px 30px 10px;
}

.description > .item-description{
padding-left: 50px;
}

.description > span {
  display: flex;
  align-items: center;
  justify-conter: center;
  padding-left: 10px;
  gap: 10px;
}


span{
font-weight: bold;
}

.item-description >span{
display: flex;
flex-direction: row;
align-items: center;
gap: 5px;

}

p{
background-color: rgb(255, 255, 255);
padding: 10px;
border-radius: 10px;
font-weight: 600;
// color: var(--main-golden);
box-shadow: inset 1px 1px 5px 1px rgb(0,0,0);
letter-spacing: 2px;
  
}




@media (max-width: 850px){

.job-title::before{
  top: 2.2pc;
  min-width: 10px;
  min-height: 10px;
  right: 30px;
}

p{
  font-size: 1pc;
}

h2{font-size: 1.2pc;}

h3{
font-size: .9pc;
font-weight: 900;
}

h4 {
font-size: .8pc;
}

p {font-size: .75pc;}


`