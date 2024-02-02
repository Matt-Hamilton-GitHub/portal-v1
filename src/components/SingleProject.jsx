import React from 'react'
import styled from 'styled-components'

export const SingleProject = ({item}) => {

    const { name, url,img, desc , tags} = item;

  return (
    <>
    <Wrapper>
        <div className='project'>
            <div className='proj-img'>
            <img src={img} alt={name} />
            </div>
              <h5>{name}</h5>
              <div className='tech-perks'>
                {tags.map((item, idx)=>{
                    return(
                        <span key={idx}>{item}</span>
                    )
                })}
            </div>
                
            </div>
            
    </Wrapper>

<WrapperSideBar>
    <div className='project-side-bar' >
        <p>{desc}</p>
        <span className='span-link'><a href={url}>Visit</a></span>
    </div>
</WrapperSideBar>
    </>
  )
}


const Wrapper = styled.div`
    
    position: relative;
    left: -20%;
    width: 200px;
    height: 170px;
    margin: 5px 0;
    border-radius: 20px 5px;
    z-index: 100;
    overflow: hidden;

    animation: zoom-in-project linear;
    animation-timeline: view();
    animation-range: contain cover;


h5{
    margin: 1px 0px; 
    padding: 0px;
    white-space: wrap;
    font-size: 15px;
}

p{
    position: relative;
    padding: 5px ;
    margin: 1px;
    font-size: 6.5px;
    width: 100px;
    height: 200px;
    white-space: wrap;
    font-family: 'Nixie One', system-ui;
    font-weight: bold;
}

.proj-img{
    position: relative;
}


.project{
    position: relative;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    align-items: center;
    height: 170px;
    background: linear-gradient(338deg, rgba(140,82,255,1) 2%, #ff8a41 99%);
    z-index: 100;
    
}

img{
    position: relative;
    width: 200px;
    height: 100px;
    /* border-radius: 100%; */
    object-fit: cover;
    border-bottom: 2px solid white;
}

.tech-perks{
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 10px;
   
}

.tech-perks > span{
    margin: 0px 5px;
    color: white
   
}






`

const WrapperSideBar = styled.div`

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  
    width: 350px;
    left: 90%;
    top: -30%;
    animation: zoom-in-project-side-bar linear;
    animation-timeline: view();
    animation-range: contain cover;

  

p{
    position: relative;
    padding: 5px ;
    margin: 1px;
    font-size: 15.5px;
    white-space: wrap;
    font-family: 'Nixie One', system-ui;
    font-weight: bold;
 
}

.project-side-bar{
    position: relative;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    right: -10%;
}


a{
   position: relative;
   text-decoration: none;
   color: black;
   font-size: 10px;
   z-index: 30;
   
}

.span-link{
    position: relative;
    display: flex;
    justify-content: center;
    align-items:center;
    text-align: center;
 
   
    background-color: #ff8a41;
    padding: 1px;
    border-radius: 10% 15%;
    width: 70px;
    z-index: 500;
    box-shadow: inset 10px 9px 2px -17px rgba(255, 255, 255, 0.75);
  
}

.span-link:hover{


}


`