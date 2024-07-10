import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaLink } from "react-icons/fa";
const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-30 lg:mt-20">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center text-4xl lg:mt-20 sm:mt-16 xxs:mt-10 xxxs:mt-16"
      >
        Projects
      </motion.h1>
      {PROJECTS.map((experience, index) => (
        <div
          key={index}
          className="mb-8 flex flex-wrap lg:justify-center xxxs:mt-10 xxs:mt-10"
        >
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/4 lg:p-8 mb-4 flex md:justify-center xxs:justify-center xxxs:justify-center"
          >
            <img
              className="rounded-2xl border-4 border-neutral-900 "
              width={250}
              height={150}
              src={experience.image}
              alt={experience.title}
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:h-3/4 lg:p-8"
          >
            <h6 className="mb-2 font-semibold">{experience.title} </h6>
            <p className="mb-4 text-neutral-400">{experience.description}</p>
            <div className="flex justify-start items-start mb-4">
              <button class="flex gap-1 bg-neutral-300  hover:bg-white text-gray-800 font-medium py-1 px-1 pr-2 border  border-gray-400 rounded shadow">
                <a
                  className="ml-2"
                  href={experience.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Click{" "}
                </a>
                <FaLink className="mt-1" />
              </button>
            </div>

            {experience.technologies.map((tech, index) => (
              <span
                key={index}
                className="mr-2 mt-4 rounded px-2 py-1 text-sm font-medium bg-gray-900 bg-opacity-25  text-neutral-400"
              >
                {tech}
              </span>
            ))}
            <div></div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
