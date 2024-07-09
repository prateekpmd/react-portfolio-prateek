import React from "react";
import { CONTACT } from "../constants";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="border-b border-neutral-900 pb-20"
    >
      <h1 className="my-10 text-center text-4xl pb-10">Get in Touch</h1>

      <div className="flex justify-center items-center ">
        <a
          href="/Resume.pdf"
          download
          className=" bg-white  hover:bg-yellow-400  text-black font-semibold  py-2 px-4 rounded "
        >
          Download CV
        </a>
      </div>
      <div className="text-center tracking-tight">
        <p className="my-4  flex justify-center items-center text-neutral-400">
          <span class="me-3 [&>svg]:h-5 [&>svg]:w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
              <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
            </svg>
          </span>
          {CONTACT.address}
        </p>
        <p className="my-4v flex justify-center items-center text-neutral-400">
          <span class="me-3 [&>svg]:h-5 [&>svg]:w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
          </span>
          {CONTACT.email}
        </p>
        <p className="text-sm text-white my-4">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </motion.div>
  );
};

export default Contact;
