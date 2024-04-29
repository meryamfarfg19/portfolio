import React from "react";
import "./skills.css"
import { myskills } from "./skillsdata";


export default function Skills() {  
 return <section id="skills" className="skills" >
          <h1 className="title">Skills</h1>
          <div className="skill flex" >
                {myskills.map((item)=>{
                      return(
                         <button key={item}><div className={item.image}/> {item.skill}</button>
                )})} 
          </div>
        </section>
    
}
              
              
        