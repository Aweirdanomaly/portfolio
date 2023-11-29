"use client";
import React, {useEffect, useState} from 'react'
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


  const [supportsWebP, setSupportsWebP] = useState(false);

  useEffect(() => {
    const elem = document.createElement('canvas');

    if (!!(elem.getContext && elem.getContext('2d'))) {
      // was able or not to get WebP representation
      if (elem.toDataURL('image/webp').indexOf('data:image/webp') === 0) {
        setSupportsWebP(true);
      }
    }
  }, []);



  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
  
      className="flex flex-col text-center md:text-left 
         xl:px-10 min-h-0 justify-center xl:space-y-0  items-center "    
    >
          
      
      <div className='p-5 text-center mb-10'>
      <h3 className=" relative uppercase tracking-[20px] text-ThemeColor text-2xl">
              Skills
          </h3>

          <h3 className=" relative uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over skill for name
        </h3>
      </div>
      
      <div className="grid grid-cols-4 gap-5  w-full  justify-items-center">

        {/* <Skill Left={false} img={supportsWebP ? "/skills/python.webp": "/kirbo.jpg"} text="Python"/>
        <Skill Left={true} img={"/skills/typescript.webp"} text="Typescript"/>
        <Skill Left={false} img={"/skills/rust.webp"} text="Rust"/>
        <Skill Left={true} img={"/skills/sql.webp"} text="SQL"/>
        
        <Skill Left={false} img={"/skills/cpp.webp"} text="C and C++"/>
        <Skill Left={true} img={"/skills/lua.webp"} text="Lua" />
        <Skill Left={false} img={"/skills/tw.webp"} text="Tailwind" />
        <Skill Left={true} img={"/skills/react.svg"} text="React"/>
        
        <Skill Left={false} img={"/skills/nodejs.webp"} text="NodeJS"/>
        <Skill Left={true} img={"/skills/pytorch.webp"} text="Pytorch"/>
        <Skill Left={false}  img={"/skills/tensorflow.webp"} text="Tensorflow"/>
        <Skill Left={true} img={"/skills/scikit.svg"} text="Scikit"/>
        
        <Skill Left={false} img={"/skills/ghidra.webp"} text="Ghidra"/>
        <Skill Left={true} img={"/skills/docker.webp"} text="Docker"/>
        <Skill Left={false} img={"/skills/kubernetes.svg"} text="Kubernetes"/>    
        <Skill Left={true} img={"/skills/sol.webp"} text="Solidity" />
        
        <Skill Left={false} img={"/skills/ocaml.webp"} text="Ocaml"/>
        <Skill Left={true} img={"/skills/selenium.webp"} text="Selenium"/>
        <Skill Left={false} img={"/skills/flask.webp"} text="Flask"/>
        <Skill Left={true} img={"/skills/mdb.webp"} text="MongoDB" />
        
        <Skill Left={false} img={"/skills/redis.webp"} text="Redis" />
        <Skill Left={true} img={"/skills/openCV.webp"} text="OpenCV" />
        <Skill Left={false} img={"/skills/numpy.webp"} text="Numpy" />
        <Skill Left={true} img={"/skills/pandas.webp"} text="Pandas" />

        <Skill Left={false} img={"/skills/bootstrap.svg"} text="Bootstrap" />
        <Skill Left={true} img={"/skills/bash.webp"} text="Bash" />
        <Skill Left={false} img={"/skills/gcp.webp"} text="Google Cloud" />
        <Skill Left={true} img={"/skills/aws.webp"} text="Amazon Web Services" /> */}



        <Skill Left={false} img={python.src} text="Python"/>
        <Skill Left={true} img={jjs.src} text="Typescript"/>
        <Skill Left={false} img={rust.src} text="Rust"/>
        <Skill Left={true} img={sql.src} text="SQL"/>
        
        <Skill Left={false} img={cpp.src} text="C and C++"/>
        <Skill Left={true} img={lua.src} text="Lua" />
        <Skill Left={false} img={tw.src} text="Tailwind" />
        <Skill Left={true} img={rt.src} text="React"/>
        
        <Skill Left={false} img={njs.src} text="NodeJS"/>
        <Skill Left={true} img={pt.src} text="Pytorch"/>
        <Skill Left={false}  img={tf.src} text="Tensorflow"/>
        <Skill Left={true} img={sk.src} text="Scikit"/>
        
        <Skill Left={false} img={gd.src} text="Ghidra"/>
        <Skill Left={true} img={dk.src} text="Docker"/>
        <Skill Left={false} img={kb.src} text="Kubernetes"/>    
        <Skill Left={true} img={sd.src} text="Solidity" />
        
        <Skill Left={false} img={oml.src} text="Ocaml"/>
        <Skill Left={true} img={sel.src} text="Selenium"/>
        <Skill Left={false} img={fl.src} text="Flask"/>
        <Skill Left={true} img={mdb.src} text="MongoDB" />
        
        <Skill Left={false} img={redis.src} text="Redis" />
        <Skill Left={true} img={ocv.src} text="OpenCV" />
        <Skill Left={false} img={np.src} text="Numpy" />
        <Skill Left={true} img={pd.src} text="Pandas" />

        <Skill Left={false} img={bs.src} text="Bootstrap" />
        <Skill Left={true} img={b.src} text="Bash" />
        <Skill Left={false} img={gcp.src} text="Google Cloud" />
        <Skill Left={true} img={aws.src} text="Amazon Web Services" />
          </div>
    </motion.div>
  )
}
