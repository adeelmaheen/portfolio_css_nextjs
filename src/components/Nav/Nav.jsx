"use client"
import "./Nav.css"
import Link from "next/link";
import {Inter} from "next/font/google"
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


// For google Font
const inter = Inter({subsets:['latin']})

export default function Navbar() {
  let navItems = [
    {
        name:"Home",
        link:"#"
    },
    {
        name:"Projects",
        link:"#projects"
    },
    {
        name:"About",
        link:"#about"
    },
    {
        name:"Contact",
        link:"#contact"
    }
  ]
  let menu= useRef()
  let mobile= useRef()
  useGSAP(()=>{
    let tl = gsap.timeline()
    tl.from("nav h1",{
      y:-100,
      duration:0.7,
      opacity:0
    })
    tl.from("nav ul li",{
      y:-100,
      duration:0.7,
      opacity:0,
      stagger:1,
    })

  })
    return (
      
      <div>
      <nav>
      <h1>PORTFOLIO</h1>
      
      {/* ===================================================================================== */}
       <ul className="desktopmenu">
           {
            navItems.map((item,i)=>(
                <li key={i}> 
                <Link href={item.link} to={"item.name"} smooth={true} duration={500} activeClass="active" spy={true}  >
                {item.name}
                </Link>
                
                </li>
            ))
           }
            
      </ul>
      {/* =================================================================================== */}
      <div className="hamburger" ref={menu} onClick={()=>{
          mobile.current.classList.toggle("activemobile")
          menu.current.classList.toggle("activeham")

      }}>
        <div className="ham"></div>
        <div className="ham"></div>
        <div className="ham"></div>
      </div>
      {/* ===================================================================================== */}
      <ul className="mobilemenu" ref={mobile}>
           {
            navItems.map((item,i)=>(
                <li key={i}> 
                <Link href={item.link} to={"item.name"} smooth={true} duration={500} activeClass="active" spy={true}  >
                {item.name}
                </Link>
                
                </li>
            ))
           }
            
      </ul>
      

      </nav>  
      </div>
      
    );
  }
