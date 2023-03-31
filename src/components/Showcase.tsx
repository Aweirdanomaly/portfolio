import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import testImg from '../../public/kirbo.jpg';
import dancing from "../../public/dancing.gif";
import sql from "../../public/sql.gif"
import ns from "../../public/wd.gif"




import ProjectItem from './Project';

const Projects = () => {
  return (
    <div id='projects' className='relative w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <h3 className='uppercase text-ThemeColor relative tracking-[20px] text-2xl'>
          Projects
        </h3>
        <h2 className='py-5 uppercase tracking-[3px] text-gray-500 text-sm'>A few Things I've Built</h2>
        <div className='grid gap-8 md:grid-cols-3'>
          <ProjectItem
            title='SQL Table Editor'
            backgroundImg={sql}
            projectUrl='https://github.com/Aweirdanomaly/sql-table-editor'
            tech='Python Tkinter Qt5 SQL'
          />

                    <ProjectItem
            title='Pico-8 Carts'
            backgroundImg={dancing}
            projectUrl='https://github.com/Aweirdanomaly/Pico-8-carts'
            tech='Lua Pico8'

          />
          <ProjectItem
            title='Nutri-Snap'
            backgroundImg={ns}
            projectUrl='https://devpost.com/software/nutrisnap-the-nutritional-helper'
            tech='ReactNative Expo Tensorflow Flask'

          />
          {/* <ProjectItem
            title='ML Handwritten Digit Recognizer'
            backgroundImg={testImg}
            projectUrl='/twitch'
            tech='Next JS'

          /> */}
                    {/* <ProjectItem
            title='Crypto Website'
            backgroundImg={testImg}
            projectUrl='/crypto'
            tech='React JS'

          /> */}

          
        </div>
      </div>
    </div>
  );
};

export default Projects;