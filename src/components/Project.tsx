import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { StaticImageData } from 'next/image';
import vid from "../../public/sql.mp4"

type Props = {
    title?: string
    backgroundImg: string  | StaticImageData
    tech?: string
    projectUrl: string


};


const ProjectItem = ({ title, backgroundImg, tech, projectUrl }: Props) => {
  

  function vidType(file: string ) {
    if (["mp4", "webm"].includes(file.split('.').pop()!)) {
      console.log(file, "first")
           
      return (<video className=' rounded-xl group-hover:opacity-10 h-auto w-full'  autoPlay loop muted>
      <source src={file} height="50" type='video/mp4' className='h-auto'/>
      </video>) 
      
      }

    else {
      console.log(file, "second")
      return (<Image className='rounded-xl group-hover:opacity-10 h-auto w-full' width="80" height="80" src={file} alt='/' /> )
  
    }
  }


  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-ThemeColor rounded-xl group hover:bg-gradient-to-r from-ThemeColor to-[#709dff]'>
      {vidType(backgroundImg.toString())}
      {/* <Image className='rounded-xl group-hover:opacity-10 h-auto w-full' width="100" height="100" src={backgroundImg} alt='/' />  */}
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
        <Link href={projectUrl}>
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
        </Link>
      </div>
      
    </div>
    
  )
}

export default ProjectItem