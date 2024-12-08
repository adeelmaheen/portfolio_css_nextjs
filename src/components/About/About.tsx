"use client"
import Card from "../Card/Card";
import "./About.css"
import mern from "../../../public/assets/mern.png"
import dsa from "../../../public/assets/dsa.png"
import java from "../../../public/assets/java.png"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap-trial/all"


export default function About() {
  useGSAP(()=>{

    let tl3 = gsap.timeline();
    tl3.from(".circle",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      ScrollTrigger:  {
        trigger:".circle",
        scroll:"body",
        scrub:2,
      
        start:"top 50",
        end:"top 20%",
      }

    })
    gsap.from(".line",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      ScrollTrigger:{
        trigger:".line",
        scroll:"body",
        scrub:2,
       
        start:"top 50",
        end:"top 30%",
      }

    })
    gsap.from(".aboutdetails h1",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      ScrollTrigger:{
        trigger:".anoutdetails h1",
        scroll:"body",
        scrub:2,
      
        start:"top 50",
        end:"top 30%",
      }

    })
    gsap.from(".aboutdetails li",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      ScrollTrigger:{
        trigger:".aboutdetails li",
        scroll:"body",
        scrub:2,
       
        start:"top 50",
        end:"top 30%",
      }

    })
    gsap.from(".rightabout",{
      x:100,
      duration:1,
      opacity:0,
      stagger:1,
      ScrollTrigger:{
        trigger:".rightabout",
        scroll:"body",
        scrub:2,
        start:"top 50",
        end:"top 30%",
      }

    })
  })
    return (
      <>
      <div id="about">
        <div className="leftabout">
          <div className="circleline">
            <div className="circle"></div>
            <div className="line"></div>
            <div className="circle"></div>
            <div className="line"></div>
            <div className="circle"></div>
          </div>
          <div className="aboutdetails">
            {/* =============================== Personal info  ====================================== */}
            <div className="personalinfo">
              <h1>Personal Info </h1>
              <ul>
                <li>
                  <span>Name</span> : Maheen Arif
                </li>
                {/* ============================================= */}
                <li>
                  <span>Age</span> : 25 Years
                </li>
                {/* ============================================= */}
                <li>
                  <span>Gender</span> : Female
                </li>
                {/* ================================================ */}
                <li>
                  <span>Language</span> : Urdu, English 
                 </li>
                 {/* ================================================ */}
              </ul>
            </div>
             {/* =============================== Education  ====================================== */}
             <div className="education">
              <h1>Education </h1>
              <ul>
                <li>
                  <span>MBA</span> : Master's in Finance and Marketing , Karachi University 
                </li>
                {/* ============================================= */}
                <li>
                  <span>BCOM</span> : Bachler's in Commerce , Karachi University 
                </li>
              
                {/* ================================================ */}
                <li>
                  <span>Intermediate</span> : Govt. Girls Degree College  
                 </li>
                 {/* ================================================ */}
                 <li>
                  <span>Matric</span> : White Rose Grammer School
                 </li>
              </ul>
            </div>
             {/* =============================== skills  ====================================== */}
             <div className="skills">
              <h1>Skills</h1>
              <ul>
                <li>
                  Mern Stack Web Developer
                </li>
                {/* ============================================= */}
                <li>
                  JAVA 
                </li>
                {/* ============================================= */}
                <li>
                 DSA 
                </li>
                {/* ================================================ */}
                <li>
                  Typescript
                 </li>
                 {/* ================================================ */}
              </ul>
            </div>
          </div>
        </div>
        <div className="rightabout">
          <Card htext={"MERN STACK WEB DEVELOPER"} pic={mern} />
          <Card htext={"JAVA"} pic={java}/>
          <Card htext={"DSA"} pic={dsa}/>
        </div>
      </div>
      </>
    );
  }
  