import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import NavBar from "./components/1-header/NavBar"
import Home from "./components/2-hero/Home"
import Projects from './components/3-projects/Projects'
import Skills from './components/4-skills/Skills'
import Contact from './components/5-contact/Contact'
import Footer from "./components/6-footer/Footer"

function App() {
  const [showScrolBtn,setShowScrolBtn]=useState(false)
  useEffect(()=>{
      window.addEventListener("scroll",()=>{
              if(window.scrollY>300){setShowScrolBtn(true)}
              else setShowScrolBtn(false) 
      })
  },[])

  return (
    <div  className="containerr">
      <Router basename='/'>
          <NavBar />
          <div className='dividerr' id="up"/>
           <Home/>
          <div className='dividerr'/>
          <Projects/>
          <div className='dividerr'/>
          <Skills/>
          <div className='dividerr'/>
          <Contact/>
          <div className='dividerr'/>
          <Footer/>
      <a href="up" style={{opacity: showScrolBtn? 1:0, transition:"1s"}}><button className="icon-circle-up myBtne" /></a>
      </Router>
    </div>
  );
}

export default App;