import React from "react";
import { ABOUT_TEXT } from "../constants";
import about from "../assets/21.png";
import { motion } from "framer-motion";

const Aboutme = () => {

  const splitText = (text) => {
    const middleIndex = Math.floor(text.length / 2)+16;
    return [text.slice(0, middleIndex), text.slice(middleIndex)];
  };

  const [part1, part2] = splitText(ABOUT_TEXT);
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-30 lg:mt-20">
      <motion.h1 
         initial={{opacity:0,y:-30}}
         whileInView={{opacity:1,y:0}}
         transition={{duration:1,delay:0.5 }}
      className="text-center text-4xl lg:mt-20 sm:mt-16 xxs:mt-10 xxxs:mt-16">
        About Me
      </motion.h1>
      <div className="flex flex-wrap ">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2  lg:p-8   "
        >
          <div className="flex justify-center items-center my-10 xxs:my-2 ">
            <img
              className="rounded-2xl p-4"
              src={about}
              alt=""
              srcset=""
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 "
        >
          <div className="flex flex-col justify-center items-center  lg:my-10">
           
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter lg:text-start md:text-center sm:text-center xxs:text-center xxxs:text-center ">
              {part1}
            </p>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter lg:text-start md:text-center sm:text-center xxs:text-center xxxs:text-center ">
              {part2}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Aboutme;
