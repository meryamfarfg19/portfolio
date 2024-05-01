import React, { useState } from "react";
import "./projects.css"
import { myprojects } from "./projectsdata";
import {motion} from "framer-motion";//Install using npm install framer-motion
import { AnimatePresence } from "framer-motion";


export default function Projects() { 
    
 const [isActive, setIsaActive]=useState("all") 
 const [projects, setProjects]=useState(myprojects) 
 
 const handleClick=(pl)=>{
    setIsaActive(pl);
    let newarray=myprojects;
    if (pl!=="all"){
            newarray=myprojects.filter((item,index)=>{
                return item.category.find((cat)=>{
                          return cat.toLowerCase()===pl.toLowerCase()}
                 )
            })
    }
    setProjects(newarray)
 }

 return <section id="projects" className="projects flex" >
              <div className="left-section flex">
                  <button onClick={()=>{handleClick("all")}} className={isActive==="all"? "active" : null}>All Projects</button> 
                  <button onClick={()=>{handleClick("css")}} className={isActive==="css"? "active" : null}>HTML & CSS </button>
                  <button onClick={()=>{handleClick("react")}} className={isActive==="react"? "active" : null}>React </button>
                  <button onClick={()=>{handleClick("node")}} className={isActive==="node"? "active" : null}>Node & Express</button>
                  <button onClick={()=>{handleClick("php")}} className={isActive==="php"? "active" : null}>PHP </button>
                  <button onClick={()=>{handleClick("wordpress")}} className={isActive==="wordpress"? "active" : null}>wordpress</button>
                   
              </div>
              <div className="flex right-section ">
                <AnimatePresence>
                    {projects.map((item,index)=>{return(
                        < motion.article 
                            key={index} className="card"
                            layout
                            initial={{transform:"scale(0)",}}
                            animate={{transform:"scale(1)",}}
                            transition={{damping:6, type:"spring",stiffness:100}}
                        >
                        <img width={266} height={266} src={item.image} alt={item.title}/>
                        <div style={{ width: "266px", height: "210px" }} className="box">
                            <h1 className="title">{item.title}</h1>
                            <p className="subtitle">{item.description}</p>
                            <div className="inner flex all-icons">
                                <div className="flex" style={{gap:"1.2rem"}}>
                                    <a href={item.link} ><div className="icon icon-link"/></a>
                                    <a href={item.github} ><div className="icon icon-github"/></a>
                                </div>
                                <a className="link flex" href="/">
                                    more
                                    <span style={{alignSelf:"end"}} className="icon icon-arrow-right2"/>
                                </a>   
                            </div>
                        </div>
                        </ motion.article >
                    )})}
                </AnimatePresence>
              </div>
     </section>
}