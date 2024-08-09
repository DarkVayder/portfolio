import React from 'react'
import { RiReactjsLine } from 'react-icons/ri';
import { RiNextjsLine } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
});

const Techs = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h1 className='my-20 text-center text-4xl'>My Tech's</h1>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <RiReactjsLine className='text-7xl text-cyan-400' />
        </motion.div>
        <motion.div
          variants={iconVariants(2.2)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <RiNextjsLine className='text-7xl' />
        </motion.div>
        <motion.div
          variants={iconVariants(2.4)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <IoLogoFirebase className='text-7xl text-yellow-400' />
        </motion.div>
        <motion.div
          variants={iconVariants(2.6)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <SiTypescript className='text-7xl text-blue-900' />
        </motion.div>
        <motion.div
          variants={iconVariants(2.8)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <SiMongodb className='text-7xl text-green-400' />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <FaNodeJs className='text-7xl text-green-600' />
        </motion.div>
        <motion.div
          variants={iconVariants(3.2)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <SiExpress className='text-7xl text-cyan-400' />
        </motion.div>
        <motion.div
          variants={iconVariants(3.4)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <FaVuejs className='text-7xl text-pink-200' />
        </motion.div>
        <motion.div
          variants={iconVariants(3.6)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <RiTailwindCssFill className='text-7xl text-cyan-400' />
        </motion.div>
        <motion.div
          variants={iconVariants(3.8)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <FaHtml5 className='text-7xl text-red-700' />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <FaCss3 className='text-7xl text-teal-800' />
        </motion.div>
        <motion.div
          variants={iconVariants(4.2)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <FaGithub className='text-7xl text-white' />
        </motion.div>
      </div>
    </div>
  )
}

export default Techs;
