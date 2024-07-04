import React from "react";
import logo from '../assets/kevinRushLogo.png'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";


const Navbar = () => {
  return <nav className=" mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="" srcset="" />
    </div>
    <div className="m-8 flex flex-shrink-0 items-center justify-center gap-4 py-6 text-2xl">
        <FaLinkedin/>
        <FaInstagram />
        <FaGithub />
        <FaTwitterSquare />
    </div>
  </nav>;
};

export default Navbar;
