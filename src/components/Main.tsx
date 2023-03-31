import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Type from "../components/Type"

export default function Main() {
  return (
 <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='text-sm tracking-widest uppercase text-white-600'>
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-white-700'>
            Howdy, I'm <span className='text-ThemeColor'> Carlos</span> A
          </h1>
          
          
          <h1 className='py-2 text-white-700'> <Type/>
          </h1>
          

          <p className='py-4 text-white-600 sm:max-w-[70%] m-auto'>
            I'm focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/carlos-lopez-98aa4b1a9/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-ThemeColor hover:scale-110'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/Aweirdanomaly'
              target='_blank'
              rel='noreferrer'
            >
              <div className='p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-ThemeColor hover:scale-110'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-ThemeColor hover:scale-110'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-ThemeColor hover:scale-110'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
