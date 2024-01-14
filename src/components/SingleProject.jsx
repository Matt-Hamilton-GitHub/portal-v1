import React from 'react'
import styled from 'styled-components'

export const SingleProject = ({item}) => {

    const { name, url,img, desc , tags} = item;

  return (
    <Wrapper>
        
        <div className='project'>
            <div className='left'>
              <h3>{name}</h3>
              <img src={img} alt={name} />
            </div>
            <div className='right'>
            <div className='tech-perks'>
                {tags.map((item, idx)=>{
                    return(
                        <span key={idx}>{item}</span>
                    )
                })}
            </div>
            <p>{desc}</p>
            <span className='span-link'><a href={url}>Visit</a></span>
            </div>

        </div>
    </Wrapper>
  )
}


const Wrapper = styled.div`
    
display: flex;
position: relative;
justify-content: center;
flex-direction: column;
margin-bottom: 140px;




/* animation: move-left linear ;
animation-timeline: view();
animation-range: enter exit ;
margin-top:50px; */



.project{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 40px;
    max-width: 600px;
    
    animation: fade-in cubic-bezier(.81,.36,.3,.81);
    animation-timeline: view();
    animation-range: cover;
}

img{
    width: 160px;
    height: 160px;
    border-radius: 100%;
    object-fit: cover;
}

.tech-perks{
    padding-top: 15px;
}

.tech-perks > span{
    padding: 15px;
}


a{
    text-decoration: none;
    color: black;
}

.span-link{
    position: relative;
    background-color: orange;
    padding: 5px 10px;
    border-radius: 10% 40%;
    box-shadow: 10px 9px 2px -17px rgba(255, 255, 255, 0.75);
    z-index: 1000;
    transition: all 4 linear;
 
}

.span-link:hover{
    
    color: white;
    box-shadow: 10px 9px 2px -17px rgba(255, 255, 255, 0.75);
    scale:1.3;
}



`