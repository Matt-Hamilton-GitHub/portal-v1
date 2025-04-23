import React, { useState } from 'react'
import styled from 'styled-components'

//assets
import profileImg from '../assets/img/title-img-circle-nbg.png'
import bear from '../assets/img/bear.svg'

const TitlePage = () => {

    const [jobTitle, setJobTitle] = useState('')


    const generateTitle = () => {

        const value = 'Software Engineer & Cybersecurity'
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
                    <img className='golden-bear' src={bear} alt='golden bear' />
                    <h1>MATT <b>HAMILTON</b></h1>
                    <h3>{jobTitle}</h3>
                </div>

                <div className="profile-logo">
                    <img className='profile-img' src={profileImg} alt='profile' />
                    <div className="cal-div">
                        <span className='golden-bear-slogan'>Go Bears!</span>
                    </div>
                </div>
                {/* <button type='sumbit' className='custom-btn'>Contact</button> */}
            </div>

            <div className="custom-shape-divider-title-page">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" width="100%">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>

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
// overflow-x: hidden;
padding-bottom: 100px;


.title-div {
margin: 70px 10px ;
user-select: none;

}

.title-div > h1 {
    margin: 5px;
    display: block;
    position: relative;
    width: 100%;
    /* right: 10%; */
    font-weight:3pc;
    color:rgb(12, 68, 118);
    letter-spacing: 15px;
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
    width: 90vw;
    z-index:100;
    user-select: none;
}

.profile-logo::before{
    content: "";
    position: relative;
    width: 90px;
    height: 90px;
    top: 70px;
    left: 40px;
    background: linear-gradient(338deg, rgba(140,82,255,1) 2%, #ff8a41 99%);
    border-radius: 90px;
    box-shadow:  0px 0px 63px -14px rgba(0, 0, 0, 1);
    animation: rotate-around 3s cubic-bezier(.81,.36,.3,.81) infinite;
    z-index: -100;
    
}


.profile-logo > .profile-img {
    position: relative;
    border: solid 2px black;
    border-radius: 210px;
    max-width:17vw;
    min-width: 190px;
    z-index:10;
    pointer-events: none;
    background-color:rgba(255, 255, 255, 0.43);
    
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
    font-weight:900;
    align-items: center;
    font-family: 'Poiret One', sans-serif;
  
}

.golden-bear {
    position: relative;
    width: 120px;
    pointer-events: none;
    
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