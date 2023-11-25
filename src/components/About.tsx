"use client";
import React from 'react'
import { motion} from "framer-motion"

type Props ={}



var info = [
  "Born in Brownsville, TX",
  "Graduated from Boston University in 2022",
  "Bachelor's degree in Physics and Computer Science",
  "Specialized in cybersecurity and quantum computing",
  "Completed degree in three years",
  "Full of hard work and dedication"
]


export default function About({ }: Props) {
  return (
      <>
          <div className='relative flex flex-col items-center min-h-screen px-10 mx-auto mb-40 text-center md:text-left md:flex-row md:flex-wrap max-w-7xl justify-evenly'>
                  <h3 id="chunk" className='md:w-full md:text-center p-10 top-2 uppercase tracking-[20px] text-ThemeColor text-2xl sm: mb-10 '>About Me</h3>
        <div className='lg:flex lg:flex-row '>
          
              <motion.img
                      initial={{
                          x: -200,
                          opacity: 0
                      }}
                      transition={{
                          duration: 1.2
                      }}
                      whileInView={{opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                  src={'/p.png'}
                  alt='profile pic'
                //   object-top makes it round and moves pic up
                  className=" lg:w-1/2 object-cover  mb-20 rounded-full md:mb-5 md:rounded-lg md:h-95 xl:w-[500px] xl:h-[500px] md:mr-4 "
                  />

              <div className='space-y-10 lg:w-1/2'>
                <h4 className='text-4xl font-semibold'>A Little Background</h4>
                  {/* <p className='text-sm'> */}
                      {/* Hello! My name is Carlos, I'm from Brownsville, TX and last year (2022) I graduated from Boston University with a Bachelor's degree in Physics and Computer Science, mainly specializing in cybersecurity and quantum computing. I was able to complete my degree in just three years, which required a lot of hard work and dedication. */}
              
  <ul className='xl:list-disc'>
    {info.map((x, idx)=>(<li className='m-4' key={idx}>{x}</li>))}
  </ul>

            
        
        </div>
        </div>
        </div>

      </>
  )
}
