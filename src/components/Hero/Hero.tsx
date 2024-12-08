"use client"
import "./Hero.css"
import Image from "next/image";
import man from "../../../public/assets/man.png"
import Typewriter from 'typewriter-effect';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";





export default function Hero() {
  useGSAP(()=>{
    let tl1 = gsap.timeline();
    tl1.from(".line1",{
      y:80,
      duration:1,
      opacity:0,
    }) 
    tl1.from(".line2",{
      y:80,
      duration:1,
      opacity:0,
    }) 
    tl1.from(".line3",{
      y:80,
      duration:1,
      opacity:0,
    }) 
    gsap.from(".righthome img",{
      x:200,
      duration:1,
      opacity:0,
    })
  })
    return (
      <>
      <div id="hero">
        <div className="lefthome">
        <div className="homedetails">
          <div className="line1">I'm</div>
          <div className="line2 ">Maheen Arif</div>
          <div className="line3">
          <Typewriter
              options={{
              strings: ['Web developer', 'UI/UX designer','AI Agentic Engineer'],
              autoStart: true,
              loop: true,
            }}
          />
          
           
            </div>
          <button>Hire Me</button>
        </div>

        </div>
        {/* ========================================================================================= */}
        <div className="righthome">
            <Image src={man} alt="man" />
            
        </div>
        
      </div>
      </>
    );
  }
  