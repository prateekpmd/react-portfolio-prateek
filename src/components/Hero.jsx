import React from "react";
import { HERO_CONTENT } from "../constants";
import pic from "../assets/11.png";
import { motion } from "framer-motion";

const Hero = () => {
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    whileInView: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
  });
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col justify-center items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="whileInView"
              className="pb-16 text-8xl flex font-extrabold  tracking-tight lg:mt-16 lg:text-8xl lg:text-left md:text-left sm:text-center xxs:text-6xl xxxs:text-4xl md:text-6xl xxs:text-center xxxs:text-center"
            >
              Deepti Kumari
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="whileInView"
              className="bg-gradient-to-r from-yellow-400 via-gray-600 to-stone-100 text-4xl tracking-tight text-transparent bg-clip-text"
            >
              Category Manager
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="whileInView"
              className="my-2 max-w-xl py-6 font-light tracking-tighter lg:text-start md:text-center sm:text-center xxs:text-center xxxs:text-center "
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center items-center  ">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="rounded-2xl  p-4"
              src={pic}
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
