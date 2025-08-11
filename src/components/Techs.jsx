import React from 'react';
import { motion } from 'framer-motion';
import { 
  RiReactjsLine, RiNextjsLine, RiTailwindCssFill 
} from 'react-icons/ri';
import { 
  IoLogoFirebase 
} from 'react-icons/io5';
import { 
  SiTypescript, SiMongodb, SiExpress 
} from 'react-icons/si';
import { 
  FaNodeJs, FaVuejs, FaGithub, FaHtml5, FaCss3 
} from 'react-icons/fa';

const techStack = [
  { icon: RiReactjsLine, color: 'text-cyan-400', delay: 2 },
  { icon: RiNextjsLine, color: '', delay: 2.2 },
  { icon: IoLogoFirebase, color: 'text-yellow-400', delay: 2.4 },
  { icon: SiTypescript, color: 'text-blue-900', delay: 2.6 },
  { icon: SiMongodb, color: 'text-green-400', delay: 2.8 },
  { icon: FaNodeJs, color: 'text-green-600', delay: 3 },
  { icon: SiExpress, color: 'text-cyan-400', delay: 3.2 },
  { icon: FaVuejs, color: 'text-pink-200', delay: 3.4 },
  { icon: RiTailwindCssFill, color: 'text-cyan-400', delay: 3.6 },
  { icon: FaHtml5, color: 'text-red-700', delay: 3.8 },
  { icon: FaCss3, color: 'text-teal-800', delay: 4 },
  { icon: FaGithub, color: 'text-white', delay: 4.2 },
];

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: { duration, ease: 'linear', repeat: Infinity, repeatType: 'reverse' },
  }
});

const Techs = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h1 className='my-20 text-center text-4xl font-semibold'>Tech Stack's</h1>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        {techStack.map(({ icon: Icon, color, delay }, index) => (
          <motion.div
            key={index}
            variants={iconVariants(delay)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4 transition-transform hover:scale-110'
          >
            <Icon className={`text-7xl ${color}`} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Techs;
