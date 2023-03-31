// import { useRouter } from "next/router"

import Link from "next/link";
import ParticleBG from "@/components/ParticleBG";


export default function Showcase({params}:any) {

    // const pName = useRouter().query.projectName


  return (
        <>
              
              <ParticleBG/>
            
      <main className='w-full h-screen flex justify-center items-center text-center relative'>
        This is the {params.PN}</main>
      

      <div><p id="here">Yardy</p></div>



      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
            <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

            <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

            <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

            <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>


              <Link href={params.PN+"/#here"}>
      <a>Here</a>
      </Link>


      
      
</>
  )
}
