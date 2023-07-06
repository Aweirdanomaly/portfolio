
import "../styles/globals.css"
import Navbar from "../components/Navbar"
import Main from "../components/Main"
import Showcase from "../components/Showcase"
import Skills from "../components/Skills"
import Contact from "../components/Contact"
import ParticleBG from "@/components/ParticleBG";
import About from "@/components/About"


export default function Home() {
  return (
    <>
      
    <div className="h-screen overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-ThemeColor ">
      

    

      <section>
        <Navbar />
        </section>

            
      <section id="main" className="snap-start m-[100px]">
          <Main />
        </section>

      <section id="projects" className="snap-start m-[100px]">
              <Showcase />
      </section>

      <section id="about" className="snap-center m-[100px]">
        <About/>
      </section>

      <section id="skills" className="snap-start m-[100px]">
              <Skills />  
      </section>
            

              
          
      <section id="contact" className=" snap-start m-[100px]">
        <Contact />
      </section>

            
      
        <footer>
        
      </footer>
      

    </div>
    
      


      
</>
    
  )
  
}
