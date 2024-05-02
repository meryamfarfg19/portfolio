import React, { useEffect, useState } from "react";
import "./header.css"
import {motion} from "framer-motion";
import { HashLink as Link } from 'react-router-hash-link';//npm install --save react-router-hash-link
//Hash links navigate to a specific element on a page by targeting the element id


function NavBar() {
   const [theme,setTheme]=useState( localStorage.getItem("currentMode")?? "dark")
   const[showModal,setShowModal]=useState(false);

   useEffect(()=>{
      if(theme==="light"){
        document.body.classList.remove("dark")
        document.body.classList.add("light")
      }
      else{
        document.body.classList.remove("light")
        document.body.classList.add("dark")
      }
   },[theme])
  return (
  <header className="flex ">
    <button className="menu icon-menu flex" onClick={()=>setShowModal(true)}/>
    <motion.h3 className="logotext"
                    animate={{
                      scale:[0.7, 1.1, 0.9] ,
                      duration:2,
                    }}
                    transition={{
                      duration:3,
                      delay:3,
                      repeat:3,
                      ease:'easeInOut'
                    }}   
      >
            <img alt="logo" src="./portfolio/logo.png" style={{width:"55px"}} />
            {"  "}ME | Portfolio
    </motion.h3>
      
    <nav >
        <ul className="flex">  
              <li><Link to="#home">About</Link></li>
              <li><Link to="#skills">Skills</Link></li>
              <li><Link to="#projects">Projects</Link></li>
              <li><Link to="#contact">Contact</Link></li>  
        </ul>  
    </nav> 
    <button className="mode flex" 
            onClick={()=>{
                /*send value to local storage*/
                 localStorage.setItem("currentMode",theme==="dark"?"light":"dark")
                /*get value from local storage*/
                  setTheme(localStorage.getItem("currentMode"))
              }}>
       <span className={theme==="dark" ? "icon-moon-o" : "icon-sun"}></span>
    </button>
    {showModal && (
      <div className="fixed">
        <ul className="model">
              <li>
                <button className="icon-close" onClick={()=>setShowModal(false)}/>
              </li>  
              <li><Link to="#home">About</Link></li>
              <li><Link to="#skills">Skills</Link></li>
              <li><Link to="#projects">Projects</Link></li>
              <li><Link to="#contact">Contact</Link></li> 
            </ul> 
      </div>
    )}
  </header>          
  );
}
//export default NavBar;
export default React.memo(NavBar);//we use react memo to render one time
