import React from 'react'
import styled from 'styled-components'

export const SingleProject = ({item}) => {

    const { name, url,img, desc , tags} = item;

  return (
   
<Wrapper>
        <a href={url}>
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
            </a>
    </Wrapper>

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
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid white;
   


h5{
    margin: -1px 0px; 
    padding: 0px;
    white-space: wrap;
    font-size: 20px;
    font-weight: 900;
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
    width: 100%;
    background-color:#ff8a41;
 
   
}

.tech-perks > span{
    margin: 0px 5px;
    color: black;
   
}

a {
    text-decoration: none;
    color: black;
}


@media (max-width: 850px){

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 15px;
    width: 150px;
    flex-wrap: wrap;
    flex-direction: row;

 
    margin: 5px 0;
    left: 0;
    
    border-radius: 20px 5px;
    z-index: 100;
    overflow: hidden;
    animation: none;

    box-shadow: 0px 1px 5px 2px rgba(0,0,0,0.75);

.project{
    position: relative;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    height: 170px;
    /* background: linear-gradient(338deg, rgba(140,82,255,1) 2%, #ff8a41 99%); */

    z-index: 100;
   
   
}

.proj-img{
    position: relative;
    
}

img{
    position: relative;

 
    object-fit: cover;
    border-bottom: 2px solid white;
}

h5{

    font-size: 13px;
    font-weight: 6600;


}
}

`
