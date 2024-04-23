"use client";

import React from "react";
import { motion } from "framer-motion";

const Transition = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 h-screen w-screen z-[100] bg-primary"
        initial={{width: "100%" }}
        animate={{ width: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}></motion.div>
      <motion.div
        className="fixed top-0 left-0 h-screen w-screen z-[90] bg-light"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: "easeInOut",
        }}></motion.div>
      <motion.div
        className="fixed top-0 left-0 h-screen z-[80] bg-dark"
        initial={{ x: "100%", width: "100vw" }}
        animate={{ x: "0%", width: "0vw" }}
        transition={{
          delay: 0.4,
          duration: 0.8,
          ease: "easeInOut",
        }}></motion.div>
    </>
  );
};

export default Transition;
