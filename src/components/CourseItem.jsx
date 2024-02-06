import React from 'react'
import styled from 'styled-components'
import { CiCirclePlus } from "react-icons/ci";

const CourseItem = (item) => {

    const {title, desc} = item.item
    console.log(item)
  return (
    <Wrapper>
    
        <div className="preview-div">
            {/* <CiCirclePlus size={45} styled={{'cursor':'pointer'}}/> */}
            <p>{title}</p>
        </div>

        {/* <div className="skill-description">
            <h4>{desc}</h4>
        </div> */}
    </Wrapper>
  )
}

export default CourseItem



const Wrapper = styled.div`
display: flex;
margin: 5px;
padding: 0 10px ;
height: 30px;
justify-content: center;
flex-direction: row;
align-items: center;
flex-wrap: nowrap;
border: 2px solid black;
border-radius: 50px;




.preview-div{
    display: flex;
    text-align: start;
    justify-content: space-evenly;
    align-items: center;
 
   
.skill-description {
    display: none;
}

.visible{
    display: block;
}
`