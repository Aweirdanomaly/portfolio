"use client";
import React from 'react'
import selfie from "../../public/a1.jpg"
import testImg from '../../public/kirbo.jpg';
import s from '../../public/p.png';
import { motion} from "framer-motion"

type Props ={}

export default function About({ }: Props) {
  return (
      <>
          <div className='mb-40 min-h-screen relative flex flex-col items-center px-10 mx-auto text-center md:text-left md:flex-row md:flex-wrap max-w-7xl justify-evenly'>
                  <h3 id="chunk" className='md:w-full md:text-center p-10 top-2 uppercase tracking-[20px] text-ThemeColor text-2xl sm: mb-10 '>About Me</h3>
              
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
                  src={s}
                //   object-top makes it round and moves pic up
                  className="  object-cover object-top mb-20 rounded-full md:mb-5 md:rounded-lg md:h-95 xl:w-[500px] xl:h-[500px] "
                  />

              <div className='xl:w-1/2 space-y-10'>
                <h4 className='text-4xl font-semibold'>A Little Background</h4>
                  <p className='text-sm'>
                      Hello! My name is Carlos, I'm from Brownsville, TX and last year (2022) I graduated from Boston University with a Bachelor's degree in Physics and Computer Science, mainly specializing in cybersecurity and quantum computing. I was able to complete my degree in just three years, which required a lot of hard work and dedication.
                      <br></br>
                      Since graduating, I've been honing my craft by freelancing in a variety of tech-related projects, with a focus mainly on Data Science and Full Stack Development. However, I have a passion for exploring diverse fields within tech and constantly expanding my skillset. As a result, over the past couple of years, I have ventured beyond my primary focus of Data Science and Full Stack Development, and have tackled a range of projects in areas such as web scraping, automation of trading strategies, development of command line tools, implementation of smart contracts, reverse engineering of software, creation of Discord bots, and much more.
                      <br></br>
                      Currently, I am trying to get more acquainted with cloud technologies like AWS and the Google Cloud Platform while getting more comfortable with using Rust as my everyday language. In my free time, I enjoy staying up-to-date with the latest advancements in technology, particularly in the fields of cybersecurity, artificial intelligence, and quantum computing. I also enjoy contributing to open-source projects and participating in hackathons to challenge myself and connect with other developers. Beyond tech related hobbies, I enjoy going cooking and going to the local beach to surf and sculpt in the sand.
                      <br></br>
Thank you for taking the time to visit my online portfolio. If you have any questions or would like to discuss potential collaborations, please feel free to reach out to me.               
                      </p>
              </div>
        </div>

      </>
  )
}
