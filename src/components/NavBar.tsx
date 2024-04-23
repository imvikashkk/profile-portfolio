"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { usePathname, useRouter } from "next/navigation";
import {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  InstagramIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hook/useThemeSwitcher";

const CustomLink = ({
  href,
  title,
  className = "",
}: {
  href: string;
  title: string;
  className?: string;
}) => {
  const path = usePathname();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5   group-hover:w-full transition-[width] ease-linear duration-300 ${
          path === href ? "w-full" : "w-0"
        } dark:bg-light`}>
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({
  href,
  title,
  className = "",
  toggle,
}: {
  href: string;
  title: string;
  className?: string;
  toggle: () => void;
}) => {
  const path = usePathname();
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
    toggle();
  };

  return (
    <button
      className={`${className} relative group text-dark dark:text-light my-2 font-bold`}
      onClick={handleClick}>
      {title}
      <span
        className={`h-[2px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5   group-hover:w-full transition-[width] ease-linear duration-300 ${
          path === href ? "w-full" : "w-0"
        } dark:bg-dark`}>
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = (): JSX.Element => {
  const MotionLink = motion(Link);
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const containerVariants = {
    moverUp: {
      y: -5,
      transition: {
        type: "spring", // Define the type of transition
        duration: 0.8, // Duration of the transition
        ease: "easeInOut", // Timing function
      },
    },
    scaleDown: {
      scale: 0.8,
      transition: {
        type: "spring", // Define the type of transition
        duration: 0.8, // Duration of the transition
        ease: "easeInOut", // Timing function
      },
    },
  };

  return (
    <header className="relative w-full px-32 py-8 font-medium flex items-center justify-between bg-light dark:bg-dark dark:text-light lg:px-16 md:px-12 sm:px-8 xs:px-4">
      {/* for big screen */}
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="">
          <CustomLink href={"/"} title="Home" className="mr-4" />
          <CustomLink href={"/about"} title="About" className="mx-4" />
          <CustomLink href={"/projects"} title="Projects" className="mx-4" />
          <CustomLink href={"/collections"} title="Collections" className="ml-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <MotionLink
            href={"https://github.com/imvikashkk"}
            target="_blank"
            variants={containerVariants}
            whileHover="moverUp"
            whileTap="scaleDown"
            className=" mr-3">
            <GithubIcon className="border-dark dark:border-light" />
          </MotionLink>

          <MotionLink
            href={"https://www.linkedin.com/in/imvikashkk/"}
            target="_blank"
            variants={containerVariants}
            whileHover="moverUp"
            whileTap="scaleDown"
            className="w-[1.64rem] mr-3">
            <LinkedInIcon className="fill-white" />
          </MotionLink>

          <MotionLink
            href={"https://www.instagram.com/imvikashkk"}
            target="_blank"
            variants={containerVariants}
            whileHover="moverUp"
            whileTap="scaleDown"
            className="w-7 mr-3">
            <InstagramIcon className="h-[1.64rem] w-[1.64rem]" />
          </MotionLink>

          <MotionLink
            href={"https://twitter.com/imvikashkk"}
            target="_blank"
            variants={containerVariants}
            whileHover="moverUp"
            whileTap="scaleDown"
            className="w-7 mr-3">
            <TwitterIcon className="" />
          </MotionLink>

          <button
            className="w-9 h-9 mr-3 bg-slate-800 border border-solid border-slate-200 text-[#FDB813] rounded-[50%] p-[0.5px] dark:bg-light dark:text-dark hover:scale-[1.2]"
            onClick={() => setMode(mode === "light" ? "dark" : "light")}>
            {mode === "dark" ? (
              <SunIcon className="fill-dark" />
            ) : (
              <MoonIcon className="fill-dark" />
            )}
          </button>
        </nav>
      </div>

      {/* for small screen */}
      <button
        className="hidden lg:flex flex-col justify-center items-center "
        onClick={handleOpen}>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 transition-all duration-300 ease-out rounded-sm ${
            isOpen ? " rotate-45 translate-y-1 " : " -translate-y-0.5 "
          }`}></span>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 transition-all duration-300 ease-out rounded-sm my-[2.5px] ${
            isOpen ? " opacity-0 " : " opacity-100 "
          }`}></span>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 transition-all duration-300 ease-out rounded-sm ${
            isOpen ? " -rotate-45 -translate-y-1 " : " translate-y-0.5 "
          }`}></span>
      </button>


      {isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ scale: { duration: 0.5 }, opacity: { duration: 0.5 } }}
          className="min-w-[70vw] flex flex-col justify-between items-center z-30 fixed top-1/2 left-1/2 bg-dark/10 dark:bg-light/10  -translate-x-1/2 -translate-y-1/2  rounded-lg backdrop-blur-md py-32">
          <button
            className="absolute right-[80%] top-[10%] xs:right-[5%] xs:top-[5%] w-8 mr-3 bg-slate-800 border border-solid border-slate-200 text-[#FDB813] rounded-[50%] p-[1px] dark:bg-light dark:text-dark hover:scale-[1.2]"
            onClick={() => setMode(mode === "light" ? "dark" : "light")}>
            {mode === "dark" ? (
              <SunIcon className="fill-dark" />
            ) : (
              <MoonIcon className="fill-dark" />
            )}
          </button>

          <nav className="flex items-center flex-col">
            <CustomMobileLink
              href={"/"}
              title="Home"
              className=""
              toggle={handleOpen}
            />
            <CustomMobileLink
              href={"/about"}
              title="About"
              className=""
              toggle={handleOpen}
            />
            <CustomMobileLink
              href={"/projects"}
              title="Projects"
              className=""
              toggle={handleOpen}
            />
            <CustomMobileLink
              href={"/collections"}
              title="Collections"
              className=""
              toggle={handleOpen}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap gap-4 px-8">
            <MotionLink
              href={"https://github.com/imvikashkk"}
              target="_blank"
              variants={containerVariants}
              whileHover="moverUp"
              whileTap="scaleDown"
              className="">
              <GithubIcon className=" border-dark dark:border-light bg-light dark:bg-dark" />
            </MotionLink>

            <MotionLink
              href={"https://www.linkedin.com/in/imvikashkk/"}
              target="_blank"
              variants={containerVariants}
              whileHover="moverUp"
              whileTap="scaleDown"
              className="w-6">
              <LinkedInIcon className="fill-white" />
            </MotionLink>

            <MotionLink
              href={"https://www.instagram.com/imvikashkk/"}
              target="_blank"
              variants={containerVariants}
              whileHover="moverUp"
              whileTap="scaleDown"
              className="w-6">
              <InstagramIcon className="h-[1.55rem] w-[1.55rem] InstaBGIcon rounded-md" />
            </MotionLink>

            <MotionLink
              href={"https://twitter.com/imvikashkk"}
              target="_blank"
              variants={containerVariants}
              whileHover="moverUp"
              whileTap="scaleDown"
              className="w-6">
              <TwitterIcon className=" w-7 h-7 " />
            </MotionLink>
          </nav>
        </motion.div>
      )}

      <div className="absolute left-[50%] top-2  translate-x-[-50%] z-20">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
