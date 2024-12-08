import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Nav/Nav";
import Projects from "@/components/Projec/Projec";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Projects/>
    <Contact/>
    </>
  );
}
