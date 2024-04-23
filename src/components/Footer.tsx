import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:border-light dark:text-light sm:text-base">
      <Layout className="!py-8 flex items-center justify-between lg:flex-col lg:!py-6 xs:!px-4">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className="flex items-center lg:my-2">
          Build With <span className="text-primary dark:text-primaryDark text-3xl px-1 animate-bounce">&#9825;</span>By&nbsp;<Link href={"/"} className="underline underline-offset-2">KKDev</Link>
        </div>
        <Link href={"mailto:imvikashkk@gmail.com"} className="underline underline-offset-2" target="_blank">Say Hello</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
Footer;
