"use client";
import React from "react";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";

interface FArticleType {
  image: string | StaticImageData;
  title: string;
  time: string;
  summary: string;
  link: string;
}

const FramerImage = motion(Image);

const FeaturedArticle = ({
  image,
  title,
  time,
  summary,
  link,
}: FArticleType) => {
  return (
    <li className="col-span-1 w-full p-4 bg-light dark:bg-dark border border-solid border-slate-500 dark:border-slate-400 rounded-2xl relative shadow-2xl dark:text-light  border-r-[7px] border-b-8  lg:p-2 md:p-4 sm:p-2 flex flex-col
    
    ">
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg border border-solid border-slate-300">
        <FramerImage
          alt={title}
          src={image}
          className="w-full h-auto"
          whileHover={{
            scale: 1.05,
          }}
          width={200}
          height={160}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50ssvw"
          transition={{ duration: 0.2 }}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-lg font-bold leading-5 my-2 mt-4 sm:mt-3 xs:mt-2  hover:underline">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2 text-justify xs:leading-4">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark self-end">
        {time}
      </span>
    </li>
  );
};

export default FeaturedArticle;
