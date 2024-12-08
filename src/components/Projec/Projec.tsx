"use client"
import Card from "../Card/Card";
import "./Projec.css"
import Image from "next/image";
import va from "../../../public/assets/va.png"
import tti from "../../../public/assets/tti.png"
import ise from "../../../public/assets/ise.png"
import cb from "../../../public/assets/cb.png"
import br from "../../../public/assets/br.png"
import fw from "../../../public/assets/fw.png"
import next from "../../../public/next.svg"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)




export default function Projects() {
  useGSAP(()=>{
    gsap.from("#heading1",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      ScrollTrigger:{
        trigger:"#heading1",
        scroll:"body",
        scrub:2,
        start:"top 80%",
        end:"top 30%",
      }

    })
    gsap.from(".slider",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      ScrollTrigger:{
        trigger:".slider",
        scroll:"body",
        scrub:2,
        start:"top 80%",
        end:"top 30%",
      }

    })

  })
    return (
      <>
      <div id="projects">
        <h1 id="heading1">2+ YEARS EXPERIENCE IN PROJECTS</h1>
        <div className="slider">
        <Card htext={"VIRTUAL ASSISTANT"} pic={fw}/>
        <Card htext={"NEXTJS"} pic={next}/>
        <Card htext={"BACKGROUND REMOVER"} pic={br}/>
        <Card htext={"VIRTUAL ASSISTANT"} pic={va}/>
        <Card htext={"TEXT TO IMAGE GENERATOR"} pic={tti}/>
        <Card htext={"IMAGE SEARCH"} pic={ise}/>
        <Card htext={"CHATBOT"} pic={cb}/>
        <Card htext={"FITNESS WEBSITE"} pic={fw}/>
        </div>
        
      </div>
      </>
    );
  }
  