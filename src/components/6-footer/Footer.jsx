
import React from "react";
import "./footer.css"
import {motion} from "framer-motion";
import { HashLink as Link } from 'react-router-hash-link';//npm install --save react-router-hash-link




function Footer() {

  return ( 
    <footer>
      {/* <div className="flex">
          <p>Get connected with us:</p>
          <div className="all-icons flex">
                      <a href="https://github.com/meryamfarfg19" ><div className="icon icon-github"/></a>
                      <a href="https://www.linkedin.com/in/maria-eljilali" ><div className="icon icon-linkedin"/></a>
          </div>
      </div>
      <div className='dividerfooter'/> */}
      <div className="flex">
      <motion.h3 className="logotext"animate={{
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
          <img alt="logo" src="portfolio/logo.png" style={{width:"55px"}} />
          ME | Portfolio
      </motion.h3>
      <ul className="flex">  
            <li><Link to="#home">About</Link></li>
            <li><Link to="#skills">Skills</Link></li>
            <li><Link to="#projects">Projects</Link></li>
            <li><Link to="#contact">Contact</Link></li>  
      </ul>  
      </div>
      {/* <div className='dividerfooter'/> */}
      <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin:'1rem',
           // backgroundColor: 'rgba(0, 0, 0, 0.2)'
        }}>
        <p >        
          &copy; {new Date().getFullYear()} Copyright: Maria El Jilali. All Rights Reserved. 
        </p> 
      </div>
</footer>


//     <footer className="flex">
//          <motion.h3 className="logotext"animate={{
//                       scale:[0.7, 1.1, 0.9] ,
//                       duration:2,
//                     }}
//                     transition={{
//                       duration:3,
//                       delay:3,
//                       repeat:3,
//                       ease:'easeInOut'
//                     }}   
//       >
//           <img alt="logo" src="./logo.png" style={{width:"55px"}} />
//           ME | Portfolio
//       </motion.h3>
//         <ul className="flex">  
//               <li><Link to="#home">About</Link></li>
//               <li><Link to="#skills">Skills</Link></li>
//               <li><Link to="#projects">Projects</Link></li>
//               <li><Link to="#contact">Contact</Link></li>  
//         </ul>  
//       <p className="">
//         &copy; {new Date().getFullYear()} Copyright: Maria El Jilali. All Rights Reserved. 
//       </p>  
//  </footer>     
  );
}

export default Footer;
