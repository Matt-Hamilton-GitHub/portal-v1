import styled from "styled-components";

import React, { useState } from "react";
import { CgDetailsMore } from "react-icons/cg";
import { CgDetailsLess } from "react-icons/cg";


const CourseItem = (item) => {
    const [isVisible, setVisible] = useState(false);

    const { title, desc, lang } = item.item;

    const handleToggle = () => {
        setVisible((prev) => !prev); // Toggle visibility
    };

    return (
        <Wrapper>
            {/* <div className="deco-title-div">

            </div> */}
            <div className="course-content">
            
                <div className="skill-desc-span">
                        <h3>{title}</h3>
                        <span>[{lang}]</span>
                    </div>
                <div className={isVisible ? "visible" : "skill-description"} >
                    <p>{desc}</p>
                </div>
                </div>

                <div>
            </div>
                <button onClick={handleToggle}>
                    {isVisible ? <CgDetailsLess /> : <CgDetailsMore />}
                </button>
        </Wrapper>
    );
};

export default CourseItem;




const Wrapper = styled.div`
display: flex;
// background:  #b491fb;

text-align: center;
align-content: center;
border: 1px solid black;
border-radius: 0 25px 0 25px;
flex-direction: column;
margin: 20px;


// font-family: 'Borel', cursive;



h3:hover{
color:  #b491fb;
}

button {
    border-radius: 0 0 0 25px;
    border: 0;
    border-top: 1px solid black;
    border-left: 22px solid black;
    border-right: 22px solid black;
}

button:hover{
cursor: pointer;
}

span{
display: flex;
flex-basis: 20%;
justify-content: space-evenly;
gap: 15px;
align-items: end;
size: 25px;
}

.course-content{
display: flex;
flex-basis: 100%;
align-content: start;
flex-direction: column;
justify-content: space-between;
text-align:center;
gap: 15px;


}

   
.skill-description {
    display: none;
}

.skill-desc-span{
display:flex;
padding:  15px 0;
justify-content: space-between;
align-items:center;
flex-direction: column;

}
.visible{

    display: block;
}

h3{
font-weight: bold;
font-family: 'Poiret One', cursive;
font-weight: bold;
}

p{

display: flex;
justify-content: center;
align-items: center;
flex-wrap:wrap;
font-size: 15px;
gap: 10px;
padding: 10px 25px;

}

.set-layout-column{
flex-direction: column;}

`