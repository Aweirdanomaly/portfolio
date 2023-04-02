
import "../styles/globals.css"
import Navbar from "../components/Navbar"
import Main from "../components/Main"
import Showcase from "../components/Showcase"
import Skills from "../components/Skills"
import Contact from "../components/Contact"
// import ParticleBG from "@/components/ParticleBG";
import About from "@/components/About"


export default function Home() {
  return (
    <>
      
    <div className="h-screen overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-ThemeColor ">
      

    

      <section>
        <Navbar />
        </section>

            
      <section id="main" className="snap-start">
          <Main />
        </section>

      <section id="about" className="snap-center">
        <About/>
      </section>

      <section id="skills" className="snap-start">
              <Skills />  
      </section>
            
      <section id="projects" className="snap-start">
              <Showcase />
      </section>
              
          
      <section id="contact" className=" snap-start">
        <Contact />
      </section>

            
      
        <footer>
        
      </footer>
      

    </div>
    
      


      
</>
    
  )
  
}
