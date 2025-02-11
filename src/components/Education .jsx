
import React from 'react'
import styled from 'styled-components'
import ucbCourses from '../assets/data_base/courseUCB'
import { FaGraduationCap } from "react-icons/fa";
import SingleCourse from './SingleCourse'

const Education = () => {
    return (
        <Wrapper id='education'>
            <div className="main-section">
                <div className="section-title-container">
                    <h1> Educ<span><FaGraduationCap size={45} /></span>ation</h1>
                    <h2>BS in Computer Science & Electrical Engineering</h2>
                </div>
            </div>

            <div className="courses-section">
                <div className="courses-title">
                    <h3>- Course Work - </h3>
                </div>
                <div className="courses">
                    {ucbCourses.map((course, idx) => {
                        return (
                            <SingleCourse key={idx} course={course}/>
                        )
                    })}
                </div>
            </div>


        </Wrapper>
    )
}


export default Education

const Wrapper = styled.div`

position: relative;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
flex-direction: column;
background: rgb(141,100,224);
background: linear-gradient(0deg, rgba(141,100,224,1) 21%, rgba(255,138,65,1) 100%);
padding-bottom: 300px;
margin-top: -2px;
z-index: 50;
}

h1{
  text-wrap: nowrap;
  font-family: 'Bungee Shade', cursive;
  user-select: none;
  font-size: 3pc;
  letter-spacing: 15px;
  color:rgb(5, 50, 80);

}
h3 {color: rgb(6, 6, 6);}
    
 h1 > span {
    position: absolute;
    top: 0;
}


.courses {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    padding: 10px 50px;
    }


@media (max-width: 850px){
    
h1 {font-size: 2pc;}

 h1 > span {
    position: absolute;
    right: 47vw;
    top: -10px;
    size: 10px;
}
    h2{font-size: .9pc;}
}      
`
