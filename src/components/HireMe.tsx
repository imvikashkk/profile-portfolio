import React from "react";
import Link from "next/link";
import Image from "next/image";

const HireMe = () => {
  return (
    <div className=" fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:absolute  md:left-auto md:bottom-auto 
    md:-top-14 md:right-7 sm:-top-6 xxs:-top-16 xxs:right-2
    ">
      <div className="w-48 md:w-[7.5rem] h-auto flex items-center justify-center ">
        <div className="w-full h-auto animate-spin-slow p-2">
          <Image
            src={"/images/Web_MERN.png"}
            alt="spinner"
            width={180}
            height={180}
            priority
            className="w-full h-auto brightness-0 dark:invert"
          />
        </div>
        <Link
          href={"mailto:imvikashkk@gmail.com"}
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 md:w-12 md:h-12 md:text-[10px] rounded-full font-semibold hover:bg-light hover:text-dark dark:bg-light dark:text-dark dark:hover:bg-black dark:hover:text-light">
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
