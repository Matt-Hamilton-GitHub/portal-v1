
import React, {useEffect} from 'react';
import Projects from './components/Projects';
import TitlePage from './components/TitlePage';
import Footer from './components/Footer';
import Education from './components/Education ';
import Navbar from './components/Navbar';
import Experience from './components/Experience';


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
      <Navbar />
      <TitlePage /> 
      <Projects />
      <Education />
      <Experience />
      <Footer />

    </>
  );
}

export default App;
