
import React, {useEffect} from 'react';
import Education from './components/Education';
import Projects from './components/Projects';
import TitlePage from './components/TitlePage';
import ProjectsOriginal from './components/ProjectsOriginal';

function App() {

  const progressBar = () =>

  { 
  
    let totalHeight = document.body.scrollHeight - window.innerHeight;
  
    window.onscroll = function () {
     
      let progressHeight = (window.pageYOffset / totalHeight) * 100;
      document.getElementById("progressbar").style.height = progressHeight + "%";
  
  
    };
  }

  
    useEffect(()=>{
      
        setTimeout(progressBar(),3)
      
    })
  
  return (
    <>
      <div id="progressbar"></div>
      <div id="scrollPath"></div> 
      <TitlePage /> 
      {/* <Projects /> */}
      <ProjectsOriginal />
      <Education />
    </>
  );
}

export default App;
