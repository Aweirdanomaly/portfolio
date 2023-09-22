"use client";
import React from 'react'
import { motion} from "framer-motion"
import Skill from "./Skill"
import python from "public/skills/python.webp"
import jjs from "public/skills/typescript.webp"
import rust from"public/skills/rust.webp"
import sql from "public/skills/sql.webp"
import lua from "public/skills/lua.webp"
import cpp from "public/skills/cpp.webp"
import tw from  "public/skills/tw.webp"
import rt from  "public/skills/react.svg"
import njs from "public/skills/nodejs.webp"
import pt from  "public/skills/pytorch.webp"
import tf from  "public/skills/tensorflow.webp"
import sk from  "public/skills/scikit.svg"
import gd from  "public/skills/ghidra.webp"
import dk from  "public/skills/docker.webp"
import kb from  "public/skills/kubernetes.svg"
import mdb from "public/skills/mdb.webp"
import sd from  "public/skills/sol.webp"
import redis from "public/skills/redis.webp"
import oml from "public/skills/ocaml.webp"
import sel from "public/skills/selenium.webp"
import fl from  "public/skills/flask.webp"
import ocv from "public/skills/openCV.webp"
import np from  "public/skills/numpy.webp"
import pd from  "public/skills/pandas.webp"
import bs from  "public/skills/bootstrap.svg"
import b from   "public/skills/bash.webp"
import gcp from "public/skills/gcp.webp"
import aws from "public/skills/aws.webp"



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
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5   py-100 md:grid-cols-4 ">

        <Skill Left={false}  img={python} text="Python"/>
        <Skill Left={true} img={jjs} text="Typescript"/>
        <Skill Left={false} img={rust} text="Rust"/>
        <Skill Left={true} img={sql} text="SQL"/>
        <Skill Left={false} img={cpp} text="C and C++"/>

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

        <Skill Left={false} img={bs} text="Bootstrap" />
        <Skill Left={true} img={b} text="Bash" />
        <Skill Left={false} img={gcp} text="Google Cloud" />
        <Skill Left={true} img={aws} text="Amazon Web Services" />
          </div>
    </motion.div>
  )
}
