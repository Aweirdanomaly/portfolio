"use client";
import React from 'react'
import { FaPhone, FaEnvelopeOpen } from 'react-icons/fa';
import { useForm, SubmitHandler } from "react-hook-form";



type Inputs = {
  name: string,
    email: string,
    subject: string,
    message: string
};

type Props = {};

export default function Contact({ }: Props) {
    
    const { register, handleSubmit } = useForm<Inputs>();
    
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        window.location.href = `mailto:tech.lopez0@gmail?subject${data.subject}&body=Hello, my name is ${data.name}. ${data.message}`
    }


    return (
    <div className='relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-ThemeColor text-2xl text-center'>
                Contact
            </h3>

            <div className='absolute flex flex-col space-y-10 top-40'>
                <h4 className='text-4xl font-semibold text-center '>
                    I've got just what you need.<br></br>
                    <span className='underline decoration-ThemeColor'>Let's Talk</span>
                </h4>

            <div>
                    <div className='flex items-center justify-center space-x-5'>
                        <FaPhone className='text-ThemeColor h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>+1 (956) 509-7682</p>
                    </div>


                    <div className='flex items-center justify-center py-5 space-x-5'>
                        <FaEnvelopeOpen className='text-ThemeColor h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>tech.lopez0@gmail.com</p>
                    </div>
            </div>

                
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col px-10 mx-auto space-y-2 w-fit '>
                    <div className='space-y-2 lg:space-x-2 md:space-x-2 text-white'>
                        <input {...register('name')} placeholder="Name" className='contactInput max-md:w-full text-white' type="text"></input>
                        <input {...register('email')} placeholder="Email" className='contactInput max-md:w-full text-white' type="email"></input>
                    </div>
                    <input {...register('subject')} placeholder="Subject" className='contactInput text-white' type="text"></input>

                    <textarea {...register('message')} placeholder="Message" className='contactInput'/>
                    <button className='px-10 py-5 text-lg font-bold text-black rounded-md bg-ThemeColor'>Submit</button>
                    <br></br>
            </form>
        </div>


    </div>
  )
}