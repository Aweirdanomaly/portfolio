"use client";
import React from 'react'
import { motion} from "framer-motion"
import Skill from "./Skill"
import python from "../../public/python.png"
import jjs from "../../public/JS.jpg"
import rust from "../../public/rust.png"
import sql from "../../public/sql2.jpg"
import cpp from "../../public/cpp.png"
import lua from "../../public/lua.png"
import tw from "../../public/tw.png"
import rt from "../../public/react.svg"
import njs from "../../public/nodejs.png"
import pt from "../../public/pytorch.png"
import tf from "../../public/tensorflow.jpg"
import sk from "../../public/scikit.svg"
import gd from "../../public/ghidra.png"
import dk from "../../public/docker.webp"
import kb from "../../public/kubernetes.svg"
import sd from "../../public/sol.png"
import mdb from "../../public/mdb.png"
import redis from "../../public/redis.webp"
import oml from "../../public/ocaml.png"
import sel from "../../public/selenium.png"
import fl from "../../public/flask.png"
import ocv from "../../public/openCV.webp"
import np from "../../public/numpy.png"
import pd from "../../public/pandas.png"

type Props = {};

export default function Skills({}:Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
  

      className="flex flex-col text-center md:text-left xl:flex-row max-w-[2000px]
         xl:px-10 min-h-0 justify-center xl:space-y-0 mx-auto items-center flex-1"
    
      
    >
          
      
      <div className='p-5 text-center'>
      <h3 className=" relative uppercase tracking-[20px] text-ThemeColor text-2xl">
              Skills
          </h3>

          <h3 className=" relative uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over skill for name
        </h3>
      </div>
      
      <div className="grid grid-cols-2 gap-5 px-20 top-60 py-100 md:grid-cols-4 lg:grid-cols-4">

        <Skill Left={false}  img={python} text="Python"/>
        <Skill Left={true} img={jjs} text="Javascript"/>
        <Skill Left={false} img={rust} text="Rust"/>
        <Skill Left={true} img={sql} text="SQL"/>
        <Skill Left={false} img={cpp} text="C&C++"/>

        <Skill Left={true} img={lua} text="Lua" />
        <Skill Left={false} img={tw} text="Tailwind" />
        <Skill Left={true} img={rt} text="React"/>
        <Skill Left={false} img={njs} text="NodeJS"/>
        <Skill Left={true} img={pt} text="Pytorch"/>

        <Skill Left={false}  img={tf} text="Tensorflow"/>
        <Skill Left={true} img={sk} text="Scikit"/>
        <Skill Left={false} img={gd} text="Ghidra"/>
        <Skill Left={true} img={dk} text="Docker"/>
        <Skill Left={false} img={kb} text="Kubernetes"/>    

        <Skill Left={true} img={sd} text="Solidity" />
        <Skill Left={false} img={oml} text="Ocaml"/>
        <Skill Left={true} img={sel} text="Selenium"/>
        <Skill Left={false} img={fl} text="Flask"/>
        <Skill Left={true} img={mdb} text="MongoDB" />
        
        <Skill Left={false} img={redis} text="Redis" />
        <Skill Left={true} img={ocv} text="OpenCV" />
        <Skill Left={false} img={np} text="Numpy" />
        <Skill Left={true} img={pd} text="Pandas" />

          </div>
    </motion.div>
  )
}
