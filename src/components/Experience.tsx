"use client"
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

type DT = {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
};

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}: DT) => {
    const ref = useRef<HTMLLIElement>(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] md:w-[80%] sm:w-[90%] xs:w-[100%]  mx-auto flex flex-col items-center justify-between ">
        <LiIcon reference={ref} />
      <motion.div
      initial={{y:-50, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{
        duration:1,
        type:"spring",
        delay:0.5
      }}
      >
        <h3 className="capitalize font-bold text-2xl xs:text-lg ">
          {position}&nbsp;{" "}
          <Link
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize">
            @{company}
          </Link>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full text-justify">{work}</p>
      </motion.div>
    </li>
  );
};


const Experience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  });

  return (
    <>
      <h2 id="experience" className="font-bold text-8xl mt-64 w-full text-center md:text-6xl sm:text-5xl xs:text-4xl xl:mt-48 md:mt-32 sm:mt-24 mb-16 ">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] lg:w-[96vw] lg:px-5 mx-auto relative">
        <motion.div style={{scaleY:scrollYProgress}} className="absolute left-9 top-0 md:left-1 xs:-left-[2.9px] xs:w-[1.5px] w-[4px] md:w-[2px] h-full bg-dark origin-top dark:bg-light" />
        <ul className="w-full flex flex-col items-start justify-between">
        <Details
            position="Full Stack Web Developer"
            company="SJAIN Ventures"                                                          
            time="Feb 2023 - Current"
            address="Raipur, India"
            companyLink="https://sjain.io/"
            work="Developed scalable web apps using MERN stack. Enhanced
            user experience & resolved technical issues. Collaborated with
            cross-functional teams."
          />
          <Details
            position="Full Stack Web Developer"
            company="Figle Technologies"
            time="2022 - 2023"
            address="Raipur, India"
            companyLink="https://figletechnologies.com/"
            work="Transitioned from internship to full-time role. Pioneered
            development of MERN stack projects."
          />
          <Details
            position="Frontend Developer Intern"
            company="BharatIntern"
            time="2023"
            address="Remote"
            companyLink="https://bharatintern.live"
            work="Expertly crafted a sleek website layout for optimal user experience, ensuring intuitive navigation and visually appealing design elements."
          />
        </ul>
      </div>
    </>
  );
};

export default Experience;
