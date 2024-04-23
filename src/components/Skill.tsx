"use client";

import React, {useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const SkillLink = motion(Link)

const SkillText = ({
  children,
  x,
  y,
  href
}: {
  children: string;
  x: string;
  y: string;
  href: string;
}) => {
  return (
    <SkillLink
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light shadow-gray-600 p-4 shadow-md -mt-2 -ml-2 -mr-2 -mb-2 cursor-pointer  px-6 py-3 absolute border border-solid border-slate-300 hover:bg-light hover:text-dark hover:border-slate-400 dark:bg-light dark:text-dark dark:shadow-gray-500 dark:hover:bg-black dark:hover:text-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:py-0 xs:px-1 xs:text-xs"
      href={href}
      target="_blank"
      whileHover={{
        scale: 1.05,
      }}
      initial={{
        x: 0,
        y: 0,
      }}
      whileInView={{
        y: y,
        x: x,
      }}
      transition={{
        x: { duration: 1.5 },
        y: { duration: 1.5 },
        scale: { duration: 0.1 },
      }}>
      {children}
    </SkillLink>
  );
};

const Skill = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [elementHeight, setElementHeight] = useState(0);
  const [elementWidth, setElementWidth] = useState(0);

  useLayoutEffect(() => {
    const observer = new ResizeObserver((entries) => {
      if (elementRef.current) {
        const newHeight = elementRef.current.offsetHeight;
        const newWidth = elementRef.current.offsetWidth;
        if (newHeight !== elementHeight) {
          setElementHeight(newHeight);
          console.log("Element Height:", newHeight);
        }
        if (newWidth !== elementWidth) {
          setElementWidth(newWidth);
          console.log("Element Width:", newWidth);
        }
      }
    });
    observer.observe(elementRef?.current!);
    return () => observer.disconnect();
  }, [elementHeight, elementWidth]);

  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl sm:text-5xl xl:mt-48 md:mt-32 sm:mt-24 ">
        Skills
      </h2>
      <div
        ref={elementRef}
        className="w-full h-[90vh] lg:h-[80vh] md:h-[60vh] sm:h-[50vh]  relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:bg-circularLightLg dark:lg:bg-circularDarkLg md:bg-circularLightMd dark:md:bg-circularDarkMd sm:bg-circularLightSm dark:sm:bg-circularDarkSm">

        <SkillLink
          className="flex items-center justify-center rounded-[50%] font-semibold bg-dark text-light shadow-gray-600 p-4 shadow-md -mt-2 -ml-2 -mr-2 -mb-2 cursor-pointer  px-10 py-5 absolute border border-solid border-slate-300 hover:bg-light hover:text-dark hover:border-slate-400 dark:bg-light dark:text-dark dark:shadow-gray-500 dark:hover:bg-black dark:hover:text-light xl:py-6 xl:px-8 lg:py-8 lg:px-6 md:py-3 md:px-2 md:text-sm xs:py-4 xs:px-1"
          href={"https://developer.mozilla.org/en-US/"}
          whileHover={{
            scale: 1.05,
          }}>
          WEB
        </SkillLink>

        {elementHeight / elementWidth > 0.1 &&
          elementHeight / elementWidth < 0.8 && (
            <>
              <SkillText x="-20vw" y="2vw" href="https://www.w3schools.com/html/">
                HTML
              </SkillText>

              <SkillText x="-18vw" y="-12vw" href="https://www.w3schools.com/css/">
                CSS
              </SkillText>

              <SkillText x="-12vw" y="-6vw" href="https://firebase.google.com/">
                FireBase
              </SkillText>

              <SkillText x="14vw" y="5vw" href="https://reactnative.dev/">
                ReactNative
              </SkillText>

              <SkillText x="20vw" y="-1vw" href="https://sass-lang.com/documentation/">
                SASS
              </SkillText>

              <SkillText x="-0.5vw" y="18vw" href="https://www.w3schools.com/js/">
                JavaScript
              </SkillText>

              <SkillText x="-32vw" y="-2vw" href="https://www.w3schools.com/typescript/">
                TypeScript
              </SkillText>

              <SkillText x="32vw" y="2vw" href="https://nextjs.org/">
                NextJS
              </SkillText>

              <SkillText x="22vw" y="-12vw" href="https://react.dev/">
                ReactJS
              </SkillText>

              <SkillText x="0.5vw" y="-20vw" href="https://nodejs.org/docs/latest/api/">
                NodeJS
              </SkillText>

              <SkillText x="0.5vw" y="-10vw" href="https://socket.io/">
                SocketIO
              </SkillText>

              <SkillText x="-22vw" y="11vw" href="https://expressjs.com/">
                ExpressJS
              </SkillText>

              <SkillText x="3vw" y="11vw" href="https://www.mongodb.com/docs/manual/">
                MongoDB
              </SkillText>

              <SkillText x="22vw" y="14vw" href="https://git-scm.com/doc">
                Git/GitHub
              </SkillText>
            </>
          )}

        {elementHeight / elementWidth > 0.8 &&
          elementHeight / elementWidth < 1.1 && (
            <>
              <SkillText x="-20vw" y="2vw" href="https://www.w3schools.com/html/">
                HTML
              </SkillText>

              <SkillText x="-20vw" y="-18vw" href="https://www.w3schools.com/css/">
                CSS
              </SkillText>

              <SkillText x="-12vw" y="-5vw" href="https://firebase.google.com/">
                FireBase
              </SkillText>

              <SkillText x="14vw" y="5vw" href="https://reactnative.dev/">
                ReactNative
              </SkillText>

              <SkillText x="20vw" y="-5vw" href="https://sass-lang.com/documentation/">
                SASS
              </SkillText>

              <SkillText x="-0.5vw" y="28vw" href="https://www.w3schools.com/js/">
                JavaScript
              </SkillText>

              <SkillText x="-32vw" y="-5vw" href="https://www.w3schools.com/typescript/">
                TypeScript
              </SkillText>

              <SkillText x="32vw" y="2vw" href="https://nextjs.org/">
                NextJS
              </SkillText>

              <SkillText x="25vw" y="-18vw" href="https://react.dev/">
                ReactJS
              </SkillText>

              <SkillText x="0.5vw" y="-30vw" href="https://nodejs.org/docs/latest/api/">
                NodeJS
              </SkillText>

              <SkillText x="0.5vw" y="-13vw" href="https://socket.io/">
                SocketIO
              </SkillText>

              <SkillText x="-22vw" y="14vw" href="https://expressjs.com/">
                ExpressJS
              </SkillText>

              <SkillText x="3vw" y="15vw" href="https://www.mongodb.com/docs/manual/">
                MongoDB
              </SkillText>

              <SkillText x="25vw" y="18vw" href="https://git-scm.com/doc">
                Git/GitHub
              </SkillText>
            </>
          )}

        {elementHeight / elementWidth > 1.1 &&
          elementHeight / elementWidth < 1.4 && (
            <>
              <SkillText x="-16vw" y="4vw" href="https://www.w3schools.com/html/">
                HTML
              </SkillText>

              <SkillText x="-28vw" y="-24vw" href="https://www.w3schools.com/css/">
                CSS
              </SkillText>

              <SkillText x="-18vw" y="-15vw" href="https://firebase.google.com/">
                FireBase
              </SkillText>

              <SkillText x="14vw" y="35vw" href="https://reactnative.dev/">
                ReactNative
              </SkillText>

              <SkillText x="15vw" y="-12vw" href="https://sass-lang.com/documentation/">
                SASS
              </SkillText>

              <SkillText x="-14vw" y="32vw" href="https://www.w3schools.com/js/">
                JavaScript
              </SkillText>

              <SkillText x="-32vw" y="-5vw" href="https://www.w3schools.com/typescript/">
                TypeScript
              </SkillText>

              <SkillText x="32vw" y="2vw" href="https://nextjs.org/">
                NextJS
              </SkillText>

              <SkillText x="30vw" y="-20vw" href="https://react.dev/">
                ReactJS
              </SkillText>

              <SkillText x="11vw" y="-32vw" href="https://nodejs.org/docs/latest/api/">
                NodeJS
              </SkillText>

              <SkillText x="-5vw" y="-27vw" href="https://socket.io/">
                SocketIO
              </SkillText>

              <SkillText x="-24vw" y="16vw" href="https://expressjs.com/">
                ExpressJS
              </SkillText>

              <SkillText x="3vw" y="26vw" href="https://www.mongodb.com/docs/manual/">
                MongoDB
              </SkillText>

              <SkillText x="24vw" y="18vw" href="https://git-scm.com/doc">
                Git/GitHub
              </SkillText>
            </>
          )}

        {elementHeight / elementWidth > 1.4 &&
          elementHeight / elementWidth < 2.5 && (
            <>
              <SkillText x="-16vw" y="4vw" href="https://www.w3schools.com/html/">
                HTML
              </SkillText>

              <SkillText x="-27vw" y="-22vw" href="https://www.w3schools.com/css/">
                CSS
              </SkillText>

              <SkillText x="-18vw" y="-42vw" href="https://firebase.google.com/">
                FireBase
              </SkillText>

              <SkillText x="10vw" y="45vw" href="https://reactnative.dev/">
                ReactNative
              </SkillText>

              <SkillText x="15vw" y="-12vw" href="https://sass-lang.com/documentation/">
                SASS
              </SkillText>

              <SkillText x="-20vw" y="35vw" href="https://www.w3schools.com/js/">
                JavaScript
              </SkillText>

              <SkillText x="-32vw" y="-5vw" href="https://www.w3schools.com/typescript/">
                TypeScript
              </SkillText>

              <SkillText x="32vw" y="2vw" href="https://nextjs.org/">
                NextJS
              </SkillText>

              <SkillText x="28vw" y="-25vw" href="https://react.dev/">
                ReactJS
              </SkillText>

              <SkillText x="5vw" y="-52vw" href="https://nodejs.org/docs/latest/api/">
                NodeJS
              </SkillText>

              <SkillText x="-5vw" y="-27vw" href="https://socket.io/">
                SocketIO
              </SkillText>

              <SkillText x="-24vw" y="16vw" href="https://expressjs.com/">
                ExpressJS
              </SkillText>

              <SkillText x="3vw" y="26vw" href="https://www.mongodb.com/docs/manual/">
                MongoDB
              </SkillText>

              <SkillText x="27vw" y="20vw" href="https://git-scm.com/doc">
                Git/GitHub
              </SkillText>
            </>
          )}

      </div>
    </>
  );
};

export default Skill;
