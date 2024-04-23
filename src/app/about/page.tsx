import { Metadata } from "next";
import React from "react";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Image from "next/image";
import profileImage from "../../../public/profile/developer-pic-2.jpg";
import AnimatedNumbers from "@/components/AnimatedNumbers";
import Skill from "@/components/Skill";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

export const metadata: Metadata = {
  title: "KKDev/About",
  description: "About Developer VikashKK",
};

const page = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-center text-dark dark:text-light w-full min-h-screen overflow-hidden">
        <Layout className="pt-16 xl:p-20 lg:p-16 sm:p-8 xs:p-4">
          <AnimatedText className="mb-16 sm:mb-8 lg:!text-7xl sm:!6xl xs:!text-5xl !text-center">
            Passion Fuels Purpose!
          </AnimatedText>
          <h2 className="mb-4 text-lg font-bold uppercase text-dark dark:text-light opacity-75">
            Biography
          </h2>
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:col-span-8 md:order-2">
              <p className="font-medium text-justify">
                {`Hi, I'm Vikash Kumar Khunte, a MERN Stack Web Developer with expertise in Next.js. Currently, I'm also diving into React Native for mobile app development. Crafting beautiful, functional, and user-centered digital experiences is my passion. I'm always on the lookout for fresh and innovative methods to create exceptional applications.`}
              </p>

              <p className="my-4 font-medium text-justify">
                {`Skilled Full Stack Web Developer enthusiastic about crafting top-notch web applications. Proficient in MERN stack and Next.js, I'm eager to contribute to impactful digital solutions. I enjoy collaborating with teams, including in hackathons, to build user-friendly apps that exceed expectations. Seeking a challenging role where my skills and creativity shine.`}
              </p>

              <p className="font-medium text-justify lg:hidden md:block sm:hidden">
                {` Whether I'm crafting websites or other digital products, I bring unwavering dedication to developing excellence and user-centered thinking to every project. I eagerly anticipate the opportunity to apply my skills and passion to elevate your next digital endeavor.`}
              </p>
            </div>
            <div className="col-span-3 xl:col-span-4 md:col-span-8 md:order-1">
              <div
                className="md:w-full relative h-max rounded-2xl  bg-light dark:bg-dark 
              border-2 border-r-[10px] sm:border-b-[10px] sm:border-r-[8px] xs:border-b-[9px] xs:border-r-[7px] border-b-[12px] border-solid border-slate-400 dark:border-slate-700 p-8 sm:p-4 ">
                <Image
                  src={profileImage}
                  alt="developer"
                  className="w-full h-auto rounded-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 33vw"
                />
              </div>
              <p className="customlg:block lg:hidden md:hidden mt-8 hidden font-medium text-justify">
                {` Whether I'm crafting websites or other digital products, I bring unwavering dedication to developing excellence and user-centered thinking to every project. I eagerly anticipate the opportunity to apply my skills and passion to elevate your next digital endeavor.`}
              </p>
            </div>
            <p className="lg:col-span-8 customlg:hidden hidden font-medium text-justify lg:block">
              {` Whether I'm crafting websites or other digital products, I bring unwavering dedication to developing excellence and user-centered thinking to every project. I eagerly anticipate the opportunity to apply my skills and passion to elevate your next digital endeavor.`}
            </p>
            <div className="col-span-2 xl:col-span-8 md:order-3 flex flex-col items-end justify-between xl:flex-row xl:items-start ">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={100} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 text-end xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Minor/Mini Projects
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={20} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 text-end xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Essential Projects
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={12} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 text-end xl:text-center md:text-lg sm:text-base xs:text-sm">
                  months of self Learning
                </h2>
              </div>
            </div>
            <p className="font-medium text-justify hidden sm:block col-span-8 order-last">
              {` Whether I'm crafting websites or other digital products, I bring unwavering dedication to developing excellence and user-centered thinking to every project. I eagerly anticipate the opportunity to apply my skills and passion to elevate your next digital endeavor.`}
            </p>
          </div>
          <Skill />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default page;
