"use client";
import React from 'react'
import Typewriter from 'typewriter-effect';


export default function Type() {
  return (
    <Typewriter
  options={{
    strings: ['Full-Stack Developer', 'Data Scientist', "Cybersec Enthusiast", "Lifelong Learner"],
    autoStart: true,
    loop: true,
  }}
/>
  )
}