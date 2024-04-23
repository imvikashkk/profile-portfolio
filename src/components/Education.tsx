"use client";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

type DT = {
  type: string;
  place: string;
  info: string;
  time: string;
};

const Details = ({ type, time, place, info }: DT) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] md:w-[80%] sm:w-[90%] xs:w-[100%]  mx-auto flex flex-col items-center justify-between">
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          type: "spring",
          delay: 0.5,
        }}>
        <h3 className="capitalize font-bold text-2xl xs:text-lg">{type}</h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full text-justify">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <>
      <h2 id="education" className="font-bold text-8xl mt-64 w-full text-center md:text-6xl sm:text-5xl xs:text-4xl xl:mt-48 md:mt-32 sm:mt-24 mb-16 ">
        Education
      </h2>

      <div ref={ref} className="w-[75%] lg:w-[96vw] xs:w-[97vw] lg:px-5 mx-auto relative">
        
      <motion.div style={{scaleY:scrollYProgress}} className="absolute left-9 top-0 md:left-1 xs:-left-[2.9px] xs:w-[1.5px] w-[4px] md:w-[2px] h-full bg-dark origin-top dark:bg-light" />

        <ul className="w-full flex flex-col items-start justify-between">
          <Details
            type="Bachelor Of Technology In Computer Science & Engineering"
            time="2021-current"
            place="Bhilai Institute of Technology Durg"
            info="Relevant courses included such as Web Development and all other major Computer Science cources"
          />
          <Details
            type="Higher Secondary - 12th"
            time="2020-2021"
            place="Adarsh Convent HS School Parsadih"
            info="Secured an impressive 96.6% in 12th Grade (Higher Secondary), reflecting dedication which is the all-time highest in my school and village."
          />
          <Details
            type="High School - 10th"
            time="2018-2019"
            place="Adarsh Convent High School Parsadih"
            info="Attained an impressive 88% in 10th Grade (Higher School), showcasing academic excellence and dedication. Notably, it stands as the highest achievement in my rural village and second highest in my batch."
          />
        </ul>
      </div>
    </>
  );
};

export default Education;
