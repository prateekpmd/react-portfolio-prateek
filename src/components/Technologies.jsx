import React from "react";
import { TbBrandNextjs } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiSwagger } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { AiOutlineOpenAI } from "react-icons/ai";
import { SiTypescript } from "react-icons/si";
import { FaBitbucket } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { FaDigitalOcean } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { motion } from "framer-motion";

const Technologies = () => {
    const iconVariants=(duration)=>({
      initial:{y:-10},
      animate:{
        y:[10,-10],
        transition:{
         duration:duration,
          ease:"linear",
          repeat: Infinity,
          repeatType:"reverse"
        }
      }
    });
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 
      initial={{opacity:0,y:-30}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:1,delay:0.5 }}
      className="my-10 text-center text-4xl">Technologies</motion.h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiJavascript className="text-7xl text-yellow-500" />
        </motion.div>
        <motion.div
         variants={iconVariants(4)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandNextjs className="text-7xl text-green-400" />
          </motion.div>
        <motion.div
         variants={iconVariants(6)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
          </motion.div>
        <motion.div
         variants={iconVariants(2.5)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500" />
          </motion.div>
        <motion.div
         variants={iconVariants(4)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMysql className="text-7xl" />
          </motion.div>
        <motion.div
         variants={iconVariants(6)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-green-400" />
          </motion.div>
        <motion.div
         variants={iconVariants(2.5)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaGitAlt className="text-7xl text-orange-800" />
          </motion.div>
        <motion.div
         variants={iconVariants(4)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaGithub className="text-7xl" />
          </motion.div>

        <motion.div
         variants={iconVariants(6)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiTailwindCssFill className="text-7xl text-blue-400" />
          </motion.div>
        <motion.div
         variants={iconVariants(2.5)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiSwagger className="text-7xl text-green-400" />
    </motion.div>
        <motion.div 
         variants={iconVariants(4)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPostman className="text-7xl  text-orange-700" />
          </motion.div>

        <motion.div
         variants={iconVariants(6)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiShadcnui className="text-7xl" />
          </motion.div>
        <motion.div
         variants={iconVariants(2.5)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiNextdotjs className="text-7xl" />
          </motion.div>
        <motion.div
         variants={iconVariants(4)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpress className="text-7xl" />
          </motion.div>
        <motion.div
         variants={iconVariants(6)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <AiOutlineOpenAI className="text-7xl" />
          </motion.div>
        <motion.div
         variants={iconVariants(2.5)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTypescript className="text-7xl  text-blue-700" />
          </motion.div>

        <motion.div 
         variants={iconVariants(4)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaBitbucket className="text-7xl  text-blue-500" />
          </motion.div>
        <motion.div
         variants={iconVariants(6)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiNetlify className="text-7xl text-green-400" />
          </motion.div>
        <motion.div
         variants={iconVariants(2.5)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <IoLogoVercel className="text-7xl " />
          </motion.div>
        <motion.div
         variants={iconVariants(4)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaDigitalOcean className="text-7xl text-blue-700" />
          </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
