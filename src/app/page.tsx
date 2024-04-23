import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightbulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import { ImageAnimation } from "@/components/ImageAnimation";

const page = () => {
  return (
    <>
      <main className="  dark:bg-dark text-dark w-full min-h-[calc(100vh-100px)] h-[calc(100vh-100px)] dark:text-light relative lg:min-h-[calc(100vh-75px)] lg:h-[calc(100vh-75px)] xsm:h-auto xsm:min-h-max">
        <Layout className="py-0 2xl:px-16  md:px-4 flex xsm:pb-4">
          <div className="flex items-center justify-between w-full lg:flex-col lg:justify-center lg:items-stretch">
            <div className="w-1/2 h-auto lg:w-[70%]  flex lg:self-center">
              <ImageAnimation src={profilePic} alt="Vikash KK" />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText 
                className="!text-6xl !text-left  
                xl:!text-5xl lg-!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl xxs:!text-[22px] xxs:!leading-6
            ">
                {`"Bringing Ideas to Life Through Code and Development."`}
              </AnimatedText>
              <p className="my-4 xxs:my-2 text-justify xxs:!leading-4 text-base font-medium">
              {
                "Turning ideas into innovative web applications is my passion as a skilled MERN-Stack developer. Explore my latest projects, demonstrating my expertise in MERN with Next.js. Currently, I'm expanding my skills with React_Native and working on projects in that domain."
              }
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/resume/vikash.pdf"
                  target="_blank"
                  download
                  className="text-light bg-dark flex items-center py-2.5 px-6 rounded-lg text-lg  font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light dark:bg-light dark:text-dark xs:py-1">
                  Resume
                  <LinkArrow className="w-6 ml-1" />{" "}
                </Link>
                <Link
                  href="mailto:imvikashkk@gmail.com"
                  className="ml-4 lg:ml-8 text-lg font-medium capitalize text-dark underline dark:text-light"
                  target="_blank">
                  Contact
                </Link>
              </div>
            </div>
          </div>  
        <div className="absolute right-8 bottom-8 lg:bottom-4 inline-block w-24 md:hidden ">
          <Image
            src={lightbulb}
            alt={"KKDev"}
            width={180}
            height={180}
            className="w-full h-auto"
          />
        </div>
        </Layout>
        <HireMe />
      </main>
    </>
  );
};

export default page;
