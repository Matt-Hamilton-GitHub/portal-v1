import React from 'react'
import { CiSquarePlus } from "react-icons/ci";
import styled from 'styled-components';

const SingleCourse = ({ course }) => {
    const { title } = course
    return (
        <Wrapper>
            <span className="course-title">
                <CiSquarePlus size={25} color='rgb(141,100,224)' />
                <h4>{title}</h4>
            </span>
        </Wrapper>
    )
}

export default SingleCourse

const Wrapper = styled.div`
    display: flex;
    // justify-content: start;
    // align-items: start;
    // flex-wrap: wrap;
    // flex-basis: 1;
    // flex: 3;
    background-color: white;
    border-radius: 50px;
    padding: 0 20px;
    box-shadow: inset 1px 1px 1px 1px rgb(0,0,0);
    


span{
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 5px;
}
    h4{olor: rgb(0, 0, 0);font-weight: 900;}


@media (max-width: 850px){
    h4 {font-size: .7pc;}
}
`