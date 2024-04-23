"use client";

import React from "react";
import {motion} from "framer-motion"
import Image, { StaticImageData } from "next/image";

const ImageAnimate = motion(Image)

export const ImageAnimation = ({src, alt, className=""}:{src:string|StaticImageData, alt:string, className?:string}) => {
  return (
      <ImageAnimate
        src={src}
        alt={alt}
        className={`w-full h-full ${className}`}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        initial={{opacity:0, x:"-40vw"}}
        animate={{opacity:1, x:0}}
        transition={{duration:0.8, ease:"easeOut"}}
      />
  );
};
