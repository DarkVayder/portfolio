import React from 'react';
import aboutImage from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants';
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-12">
      {/* Section Title */}
      <h1 className="my-12 text-center text-5xl font-semibold">
        About <span className="text-neutral-500">Me</span>
      </h1>

      {/* Content Wrapper */}
      <div className="flex flex-wrap lg:flex-nowrap lg:items-center">
        {/* Image Section */}
        <motion.div 
        whileInView={{opacity: 1, x:0}}
        initial={{opacity: 0, x: -100 }}
        transition={{ duration: 0.75 }}
        className="w-full lg:w-1/2 lg:p-8 mb-8 lg:mb-0">
          <div className="flex justify-center">
            <img 
              src={aboutImage} 
              alt="About Me" 
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </motion.div>

        {/* Text Section (Placeholder) */}
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: 100 }}
        transition={{ duration: 0.75 }}
        className="w-full lg:w-1/2 lg:p-8">
          <p className="text-lg text-neutral-400 font-light leading-relaxed">
            {ABOUT_TEXT}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
