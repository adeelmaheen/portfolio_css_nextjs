"use client"
import "./Contact.css"
import Image from "next/image";
import contact from "../../../public/assets/contact.png"
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  useGSAP(()=>{
    gsap.from(".leftcontact img",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      ScrollTrigger:{
        trigger:".leftcontact img",
        scroll:"body",
        scrub:2,
        start:"top 80%",
        end:"top 30%",
      }

    })
    gsap.from("form",{
      x:100,
      duration:1,
      opacity:0,
      stagger:1,
      ScrollTrigger:{
        trigger:"form",
        scroll:"body",
        scrub:2,
        start:"top 80%",
        end:"top 30%",
      }

    })
  })
    return (
      <>
      <div id="contact">
       
        <div className="leftcontact">
          <Image src={contact} alt="contact1"/>
        </div>
        <div className="rightcontact">
          <form action="https://formspree.io/f/xqakjvbk" method="POST">
            <input type="text" placeholder="Name" name="Username" />
            <input type="email" name="Email" placeholder="Email" />
            <textarea name="message" id="textarea" placeholder="Message me"></textarea>
            <input type="submit" id="btn" value="Submit"/>

          </form>
        </div>
      </div>
      </>
    );
  }
  