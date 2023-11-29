"use client"
import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';

export default function Type() {




  return (
    <div>
      {/* <Typewriter
            words={['Full-Stack Developer', 'Data Scientist', 'Marketing Manager', 'Lifelong Learner']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          /> */}
      <Typewriter
        options={{
          strings: ['Full-Stack Developer', 'Data Scientist', 'Software Engineer', 'Lifelong Learner'],
          autoStart: true, // Disable autoStart here
          loop: true,
        }}
      />
    </div>
  );
}
