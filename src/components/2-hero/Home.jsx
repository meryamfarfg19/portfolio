import React from "react";
import "./hero.css"
import Lottie from "lottie-react";//Install using npm install lottie-react(for animation)
import devAnimation from "../../animation/developer.json"
import { useRef } from "react";
import {motion} from "framer-motion";//Install using npm install framer-motion

export default function UsersApp() { 
  
  const lottieRef= useRef();

   return <section id="home" className="hero flex" >
              <div className="left-section ">
                  <div className="parent-avatar flex">
                    <motion.img src="./avatar.png" 
                                className="avatar" 
                                alt="parent-avatar"
                                initial={{transform:"scale(0)",}}
                                animate={{transform:"scale(1)",}}
                                transition={{damping:6, type:"spring",stiffness:100}}
                    />
                    <div className="icon-verified"/> 
                  </div>
                  <motion.h1 className="title"
                             initial={{
                              opacity:0,
                            }}
                            animate={{
                              opacity:1,
                             }}
                             transition={{duration:3}}
                  >
                    Hi,I'm Maria<br/>Junior Fall Stack Developer
                  </motion.h1>
                  <motion.h2 className="subtitle">Currently in Enola, PA</motion.h2>
                  <p className="subtitle">
                    {/* to work with a React team to contribute to the growth  */}
                    {/* I am looking for a position as a web developer to contribute to the growth, invest my skills and continue to develop experience in a professional way. 
                    <br/>I am skilled in web development and willing to learn more tools and technologies in my field. 
                    <br/>I worked on some projects, developing and designing high quality code, responsive web templates, dynamic and efficient applications. 
                    <br/>I take pride in writing clean and reusable code and components while keeping performance in mind. And I love what I do. */}
                    Innovative and adaptable Junior Full Stack Developer with a passion for software development and a strong foundation in both front-end and back-end technologies.
                    <br/>Leveraging practical experience gained through educational projects, I excel in developing high-quality code by writing clean, efficient, and well-documented code for responsive web templates, and dynamic applications. 
                    <br/>Eager to contribute technical expertise and creative problem-solving skills to the forward-thinking team, while remaining committed to continuous learning and staying updated on emerging technologies in the field.
                  </p>
                  <div className="all-icons flex">
                      <a href="https://github.com/meryamfarfg19" ><div className="icon icon-github"/></a>
                      <a href="https://www.linkedin.com/in/maria-eljilali" ><div className="icon icon-linkedin"/></a>
                  </div>
              </div>
              <div className="right-section">
              <Lottie animationData={devAnimation}
                      lottieRef={lottieRef}
                      onLoadedImages={()=>{
                        //https://Lottiereact.com
                        lottieRef.current.setSpeed(0.5);
                      }}
              />
              </div>
     </section>
           
}