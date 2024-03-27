import React from 'react'
import styled from 'styled-components'
import { CiCirclePlus } from "react-icons/ci";
import { IoIosAddCircle } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";
const CourseItem = (item) => {

    const {title, desc} = item.item
    
  return (
    <Wrapper>
        <IoIosAdd size={20} styled={{'cursor':'pointer'}}/>
        <p>{title}</p>
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
text-align: center;
border: 1px solid black;
border-radius: 50px;
background:  #b491fb;




.preview-div{
    display: flex;
    text-align: start;
    justify-content: space-evenly;
    align-items: center;
}
   
.skill-description {
    display: none;
}

.visible{
    display: block;
}
p{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap:wrap;
    font-size: 13px;
}
`