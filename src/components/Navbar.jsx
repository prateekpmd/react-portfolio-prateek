import React from "react";
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import coconut from "../assets/final.png";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className=" mb-10 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img
          className="mx-2 w-22 h-14 object-contain"
          src={coconut}
          alt=""
          srcset=""
        />
      </div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="m-8 flex flex-shrink-0 items-center justify-center gap-4 py-6 text-2xl"
      >
        
        <a  href="https://linkedin.com/in/prateek-premananddd"
          target="_blank"
          rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-500 text-3xl" />
        </a>
        <a
          href="https://github.com/prateekpmd"
          target="_blank"
          rel="noopener noreferrer"
          
        >
          <FaGithub className="hover:text-purple-500 text-3xl" />
        </a>
       
      </motion.div>
    </nav>
  );
};

export default Navbar;
