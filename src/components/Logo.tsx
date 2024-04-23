import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2 md:mt-1">
      <MotionLink
        href={"/"}
        className="w-16 h-16 md:w-14 md:h-14 xs:w-12 xs:h-12 bg-dark text-light flex
      items-center justify-center rounded-full text-xl md:text-lg xs:text-[16px] p-4 font-bold border border-transparent border-solid dark:border-light"
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
        whileTap={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}>
        VKK
      </MotionLink>
    </div>
  );
};

export default Logo;
