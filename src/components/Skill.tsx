import React from 'react'
import { motion } from "framer-motion"
import testImg from '../../public/kirbo.jpg';
import { StaticImageData } from 'next/image';

type Props = {
    Left?: boolean
    img: StaticImageData
    text?: string


};

export default function Skill({Left, img, text}: Props) {
  return (<>
      <div className="relative flex cursor-pointer group">
          <motion.img
              initial={{
                  x: Left ? -100 : 100,
                  opacity: 0
              }}
              transition={{ duration: 0.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport = {{once: true}}
              src={img.src}
              className="w-24 h-24 transition duration-300 ease-in-out border border-gray-500 rounded-full md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale"
          />
      


       <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white md:w-28 md:h-28 xl:w-32 xl:h-32 "> 
      <div className="flex items-center justify-center h-full">
                  <p className="text-xl font-bold text-black opacity-100 ">{text}</p>
          </div>
          </div> 
          </div>
          
      </>
  )
}
