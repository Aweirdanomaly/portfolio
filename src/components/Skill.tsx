import React from 'react'
import { motion } from "framer-motion"
import testImg from '../../public/kirbo.jpg';
import  Image  from 'next/image';

type Props = {
    Left?: boolean
    img: string
    text: string


};

export default function Skill({Left, img, text}: Props) {
  return (<>
      <div className="relative flex cursor-pointer group justify-center w-min ">
          <motion.div
              initial={{
                  x: Left ? -100 : 100,
                  opacity: 0
              }}
              transition={{ duration: 0.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport = {{once: true}}
              className=" overflow-hidden  relative w-12 h-12  sm:w-28 sm:h-28 xl:w-32 xl:h-32  transition duration-300 ease-in-out border border-gray-500 rounded-full filter group-hover:grayscale"
          >
            <Image
            
            src={img}
            fill
            sizes="100%"
            alt={text}
            />
          </motion.div>
      


       <div className="absolute z-0 w-12 h-12 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white sm:w-28 sm:h-28 xl:w-32 xl:h-32 "> 
      <div className="flex items-center justify-center h-full">
                  <p className="text-[10px] sm:text-xl font-bold text-black opacity-100  text-center">{text}</p>
          </div>
          </div> 
          </div>
          
      </>
  )
}
