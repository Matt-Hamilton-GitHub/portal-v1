import React from 'react'
import styled from 'styled-components'

export const SingleProject = ({item}) => {

    const { name, url,img, desc , tags} = item;

  return (
    <>
    {/* <Wrapper>
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
</WrapperSideBar> */}


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

    </>
  )
}


const Wrapper = styled.div`
    

@supports(animation-timeline: view()){
    animation: zoom-in-project linear;
    animation-timeline: view();
    animation-range: contain cover;
}

    position: relative;
    left: -20%;
    width: 200px;
    height: 170px;
    margin: 100px 0;
    border-radius: 20px 5px;
    z-index: 100;
    overflow: hidden;


h5{
    margin: 1px 0px; 
    padding: 0px;
    white-space: wrap;
    font-size: 15px;
    border-bottom: 1px black solid;
    width: 100%;
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
    /* background: linear-gradient(338deg, rgba(140,82,255,1) 2%, #ff8a41 99%); */
   background: white;
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
    color: black;
   
}


`
