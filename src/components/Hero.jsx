import React from 'react';
import { HERO_CONTENT } from "../constants";
import profileImage from "../assets/ProfileImage.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration: 0.5, delay }
  }
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 lg:flex lg:items-center lg:justify-between">
      {/* Text Content */}
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col items-start">
          <motion.h1
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="pb-8 text-5xl font-thin tracking-tight lg:mt-16 lg:text-7xl">Rabiu Muhammad</motion.h1>
          <motion.span 
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
          className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl text-transparent tracking-tight">
            Frontend Developer
          </motion.span>
          <motion.p 
            variants={container(1)}
            initial="hidden"
            animate="visible"
          className="my-2 max-w-xl py-6 font-light tracking-tight">
            {HERO_CONTENT}
          </motion.p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 lg:p-8 flex justify-center lg:justify-end mt-8 lg:mt-0">
        <motion.img 
        initial={{x: 100, opacity: 0}}
        animate={{x: 0, opacity: 1}}
        transition={{duration: 1, delay: 1.3}}
        src={profileImage} 
        alt="Profile" 
        className="rounded-lg shadow-lg max-w-full h-auto" />
      </div>
    </div>
  );
}

export default Hero;
