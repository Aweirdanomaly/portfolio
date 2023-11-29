import "../styles/globals.css"
import Navbar from "../components/Navbar"
import Main from "../components/Main"
import Showcase from "../components/Showcase"
import Skills from "../components/Skills"
import Contact from "../components/Contact"
import ParticleBG from "@/components/ParticleBG";
import About from "@/components/About"
import Image from "next/image"
import sql from "public/skills/sql.webp"

import { useState, useEffect } from "react"







export default function Home() {

  

  return (
    <>
      
    <div className="h-screen overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-ThemeColor bg-[#121212] text-white ">
      


            
      <section id="main" className="snap-start m-[100px]">
          <Main />
        </section>

    {/* <div className="border-4 border-blue-500 flex justify-center items-center">
        <Image
      src="https://www.gstatic.com/webp/gallery/1.sm.webp"
      width={500}
      height={500}
      alt="Picture of the author"
    />
    </div> */}

      <section id="projects" className="snap-start m-[60px] sm:m-[100px]">
              <Showcase />
      </section>

      <section id="about" className="snap-center m-[60px] sm:m-[100px]">
        <About/>
      </section>

      <section id="skills" className="snap-start m-[60px] sm:m-[100px]">
              <Skills />  
      </section>
              
          
      <section id="contact" className=" snap-start m-[60px] sm:m-[100px]">
        <Contact />
      </section>

            
      
      

    </div>
    
      


      
</>
    
  )
  
}
