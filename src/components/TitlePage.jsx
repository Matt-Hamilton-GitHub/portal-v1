import React, { useState } from 'react'
import styled from 'styled-components'

//assets
import profileImg from '../assets/img/title-img-circle.png'
import bear from '../assets/img/bear.svg'

const TitlePage = () => {

    const [jobTitle, setJobTitle] = useState('')


    const generateTitle = () => {

        const value = 'Software Engineering & Cybersecurity'
        const interval = 100;

        setTimeout(() => {
            const inv = setInterval(() => {
                if (jobTitle.length !== value.length) {
                    setJobTitle(jobTitle + value[jobTitle.length]);
                }
                clearInterval(inv);
            });
        }, interval)

    }

    generateTitle();

    return (
        <Wrapper id='title-page'>
            <div className="title-main-section">
                <div className="title-div">
                    <h1>MATT <b>HAMILTON</b></h1>
                    <h3>{jobTitle}</h3>
                </div>

                <div className="profile-logo">
                    <img className='profile-img' src={profileImg} alt='profile' />
                {/* <button type='sumbit' className='custom-btn'>Contact</button> */}
                {/* <div className="cal-div">
                        <span className='golden-bear-slogan'><h3>Go Bears!</h3></span>
                        </div> */}
                        <img className='golden-bear' src={bear} alt='golden bear' />
            </div>
                        </div>

            {/* <div className="custom-shape-divider-title-page">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" width="100%">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div> */}

        </Wrapper>

    )
}

export default TitlePage

const Wrapper = styled.div`
position: relative;
display:flex;
justify-content: center;
flex-direction: column;
text-align: center;
flex-wrap: wrap;
align-items: center;
z-index: 100;
height: 85vh;
// overflow-x: hidden;


.title-div {
margin: 10px ;
user-select: none;


}

.title-div > h1 {
    margin: 5px;
    display: block;
    position: relative;
    width: 100%;
    /* right: 10%; */
    font-weight: 400;
    font-size: 4pc;
   
    color: var(--secondary-bear-blue);
    letter-spacing: 15px;
    font-family: "Bungee", sans-serif;
    text-shadow: rgba(140,82,255,0.7) 4px 3px 1px;
    background-color:rgba(255, 255, 255, 0.5);
     box-shadow:  5px 5px 3px -14px rgba(0, 0, 0, 1);
}

.title-div > h3 {
font-weight: 600;
background-color:rgba(255, 255, 255, 0.5);
padding: 5px 0px 5px 5px;

}

.title-div h3::after{
    content: "}";
    position: relative;
    width: 2px;
    height: 10px;
    color: transparent;
    background: rgba(0, 0, 0, 0.99);
    animation: fade-black 1s linear infinite;
}

 .profile-logo {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 25px;
    
   
    
    text-align: center;
    width: 400px
    z-index:100;
    user-select: none;
}

.title-div::before{
    content: "";
    position: relative;
    width: 190px;
    height: 190px;
    top: 140px;
    left: 0px;
    background: linear-gradient(338deg, rgba(140,82,255,1) 2%, #ff8a41 99%);
    border-radius: 40px;
    box-shadow:  0px 0px 63px -14px rgba(0, 0, 0, 1);
    animation: rotate-around 10s ease-in-out infinite;
    z-index: -100;
    
}


.profile-logo > .profile-img {
    position: relative;
    //border: solid 5px  rgba(140,82,255,1) ;
    //border-radius: 20px;
    max-width: 80vw;
    height: 320px;
    min-width: 30vw;
    z-index:10;
    pointer-events: none;
    background-color:rgba(255, 255, 255, 0.3);
    object-fit: cover;
    filter: grayscale(100%)
}
    
.glass-div{
background-color:rgba(000, 000, 000, 0.6);

}

.cal-div{
    display: block;
    position: relative;
    right: 10px;
    top: 0;
    margin: 10px;
    
}

.golden-bear-slogan {
    position: relative;
    display: flex;
    justify-content: center;
    font-weight: 100;
    align-items: center;
    
    padding: 0 10px;
  
}

.golden-bear {
    position: relative;
    width: 90px;
    pointer-events: none;
    
    border-radius: 50px;
    padding: 5px;
    
}

.navigate-up {
    position: fixed;
    border-radius: 25px;
    display: block;
    z-index: 1000;
    left: 92%;
    bottom: 20%;
    background-color: rgba(255, 255, 255, 0.69);
    padding: 10px;
    box-shadow: inset 1px 1px 1px 1px rgb(0,0,0);
    border: 1px solid white;
    transition: .2s linear;
}

.navigate-up:hover {
    cursor: pointer;
    padding: 15px;
    box-shadow: inset 2px 2px 2px 1px rgb(0,0,0);

}

@media (max-width: 850px){
height: 850px;

.title-div > h1 {
    text-wrap: wrap;
    font-size: 2pc;
}

.golden-bear {
    position: relative;
    width: 80px;

}

}

.custom-btn {
  align-items: center;
  appearance: none;
  background-image: linear-gradient(338deg, rgba(140,82,255,1) 2%, #ff8a41 99%);
  border: 0;
  border-radius: 6px;
  box-shadow: rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: "JetBrains Mono",monospace;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s,transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow,transform;
  font-size: 18px;\
}

.custom-btn:focus {
  box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
}

.custom-btn:hover {
  box-shadow: rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
  transform: translateY(-2px);
}

.custom-btn:active {
  box-shadow: #3c4fe0 0 3px 7px inset;
  transform: translateY(2px);
}

// --------------------------ANIMATION COMPONENETS------------------------- 



.custom-shape-divider-title-page{
    position: absolute;
    bottom: -1px;
    width: 150vw;
    line-height: 0;
    transform: rotate(180deg);
   
}

.animation-container{

}

.custom-shape-divider-title-page svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 259px;
    animation: wave-animation 15s infinite linear;
    
}


.custom-shape-divider-title-page .shape-fill {
    fill: #8D64E0;
}

`