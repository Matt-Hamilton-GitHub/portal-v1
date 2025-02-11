import React from 'react'
import styled from 'styled-components'


const Footer = () => {
    return (
        <Wrapper>
            <div className='animation-container adjust-3'>
                <div className="custom-shape-divider-3">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill">
                        </path>
                    </svg>
                </div>
            </div>
            <div className="social-links">
               <h5>All Rights Reserved</h5>
            </div>

        </Wrapper>
    )
}

export default Footer


const Wrapper = styled.div`

height: 100px;
display: flex;
position: relative;
justify-content: center;
align-items: end;


.social-links{
    display: flex;
    position: relative;
    top: 100px;
    width: 100vw;
    justify-content: end;
    align-items: center;
    flex-direction: column;
    gap: 25px;
}

.custom-shape-divider-3 {
    position: relative;
    bottom: -2px;
    left: -15vw;
    width: 150vw;
    transform: rotate(180deg);
    z-index: 25;
    flex-wrap: wrap;
}

.custom-shape-divider-3 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 209px;
    transform: rotateY(180deg);
    animation: wave-animation 15s infinite linear;
}

.custom-shape-divider-3 .shape-fill {
    fill: rgba(41,200,191,1);
}

.adjust-3{
bottom: -109px;
transform: rotate(180deg);
}
`