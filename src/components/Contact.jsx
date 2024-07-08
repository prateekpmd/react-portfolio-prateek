import React from "react";
import { CONTACT } from "../constants";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.5 }}
    className="border-b border-neutral-900 pb-20">
      <h1
       
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </h1>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.email}</p>
      </div>
    </motion.div>
  );
};

export default Contact;
