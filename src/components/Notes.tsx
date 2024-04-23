"use client";
import { StaticImageData } from "next/image";
import React, { MouseEvent, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useMotionValue, motion } from "framer-motion";
import { useState, useEffect } from "react";

interface ArticleType {
  img: string | StaticImageData;
  title: string;
  by: string;
  link: string;
}

type MovingImage = Omit<ArticleType, "by">;

const MovingImage = ({ title, img, link }: MovingImage) => {
  const x = useMotionValue<number>(0);
  const y = useMotionValue<number>(0);
  const divRef = useRef<HTMLDivElement>(null);
  const [screenWidth, setScrennWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScrennWidth(window.screen.width);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [screenWidth]);

  const handleMouse = (event: MouseEvent<HTMLAnchorElement>) => {
    const imgWidth = divRef.current?.offsetWidth ? divRef.current.offsetWidth : 0
    x.set(event.pageX- (imgWidth/2));
    y.set(20);
  };

  const handleMouseOver = (event: MouseEvent<HTMLAnchorElement>) => {
    const ImgRef = divRef.current!;
    ImgRef.style.display = "inline-block";
  };

  const handleMouseLeave = (event: MouseEvent<HTMLAnchorElement>) => {
    const ImgRef = divRef.current!;
    ImgRef.style.display = "none";
  };

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseLeave}
      >
      <h2 className="capitalize text-xl font-semibold hover:underline md:text-lg xs:text-[16px]">
        {title}
      </h2>
      <motion.div
        style={{ 
          x: x,
          y: y,
        }}
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 0.2 },
        }}
        ref={divRef}
        className="w-96 hidden absolute rounded-lg overflow-hidden shadow-md border-2 border-solid border-slate-300 shadow-slate-100 dark:border-slate-400 dark:shadow-slate-300 z-[200] md:w-80 sm:w-64 xs:w-48">
        <Image alt={title} src={img} className="w-full rounded-lg h-auto opacity-[0.95]" />
      </motion.div>
    </Link>
  );
};

const Notes = ({ img, title, by, link }: ArticleType) => {
  return (
    <motion.li initial={{y:200, opacity:0}} whileInView={{y:0, opacity:1, transition:{duration:0.5, ease:"easeInOut"}}} className="relative w-full px-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-slate-400/75 border-r-4 border-b-4 shadow-lg
      dark:bg-dark dark:text-light dark:border-slate-200/75 xlg:flex-col xlg:items-stretch  xlg:pb-3
    ">
      <MovingImage title={title} img={img} link={link} />
      <span className="text-primary dark:text-primaryDark font-semibold pl-4 xl:pl-2 xlg:!text-right md:text-sm xs:text-[13px]">{by}</span>
    </motion.li>
  );
};

export default Notes;
