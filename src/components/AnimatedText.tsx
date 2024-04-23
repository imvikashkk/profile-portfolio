"use client"
import React from 'react'
import {motion} from "framer-motion"

const qoute = {
    initial:{
        opacity:1,
    },
    animate:{
        opacity:1,
        transition:{
            delay:0.5,
            staggerChildren:0.08
        }
    }
}

const singleword = {
  initial:{
      opacity:0,
      y:50
  },
  animate:{
      opacity:1,
      y:0,
      transition:{
          duration:1
      }
  }
}   

const AnimatedText = ({children, className=""}:{children:string, className?:string}) => {
  return (
    <div className='w-full mx-auto py-2 sm:py-0 overflow-hidden sm:my-0 flex justify-center items-center '>
      <motion.h1 className={`inline-block w-full lg:!text-center text-dark font-bold capitalize text-8xl ${className}`} variants={qoute} initial={"initial"} whileInView={"animate"}>{
        children.split(" ").map((word, index)=>(
            <motion.span key={index} className='inline-block dark:text-light' variants={singleword}>{word}&nbsp;</motion.span>
        ))
      }</motion.h1>
    </div>
  )
}

export default AnimatedText
