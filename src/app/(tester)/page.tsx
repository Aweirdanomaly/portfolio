"use client"

import next from 'next'
// import vid from "public/sql.mp4"


import React from 'react'
import ReactPlayer from 'react-player'


export default function Home() {
    return (<>
        
        <br></br>
        <br></br>
        <br></br>
        <br></br>



            <div>

            <ReactPlayer url={"https://www.youtube.com/watch?v=E5G0ZP1Kr0Q"} playing loop controls />
            poo1
            
            <video className='VideoTag' autoPlay muted>
            <source src={"/videos/sql.mp4"} type='video/mp4'/>
            </video>


        </div>
        

        


        
    
    
    </>)
    
}