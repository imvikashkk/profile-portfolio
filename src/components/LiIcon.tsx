import React, { RefObject } from 'react'
import {motion, useScroll} from "framer-motion"

const LiIcon = ({reference}:{reference:RefObject<HTMLLIElement>}) => {

  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"]
  });
  
  return (
    <figure className='absolute left-0 md:-left-8 xs:scale-75 xs:-left-[40px] stroke-dark dark:stroke-light'>
       <svg width={75} height={75} viewBox='0 0 100 100' className='-rotate-90 md:scale-75'>

          <circle cx={75} cy={50} r={20} className='stroke-primary dark:stroke-primaryDark  fill-none' /> 
          <motion.circle cx={75} cy={50} r={20} className='stroke-[5px] fill-light dark:fill-black' style={{
            pathLength: scrollYProgress
          }} /> 
          <circle cx={75} cy={50} r={10} className='animate-pulse stroke-1 fill-primary dark:fill-primaryDark' /> 
          
       </svg>
    </figure>
  )
}

export default LiIcon
