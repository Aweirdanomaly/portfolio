"use client"
import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';

export default function Type() {
  const typewriterRef = useRef(null);

  useEffect(() => {
    if (typewriterRef.current) {
      typewriterRef.current.start();
    }
  }, []);

  return (
    <div>
      <Typewriter
        onInit={(typewriter) => {
          typewriterRef.current = typewriter;
        }}
        options={{
          strings: ['Full-Stack Developer', 'Data Scientist', 'Marketing Manager', 'Lifelong Learner'],
          autoStart: false, // Disable autoStart here
          loop: true,
        }}
      />
    </div>
  );
}
