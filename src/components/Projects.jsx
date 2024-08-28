import React from 'react';
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const imageVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5
    }
  }
};

const textVariants = {
  initial: { opacity: 0, x: -30 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.2
    }
  }
};

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className="my-20 text-center text-4xl">Some of my Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'> 
            <motion.div 
              className="w-full lg:w-1/4"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={imageVariants}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img 
                  className='mb-6 rounded cursor-pointer w-full sm:w-3/4 lg:w-[140px] h-auto sm:h-auto lg:h-[140px]' 
                  src={project.image} 
                  alt={project.title} 
                />
              </a>
            </motion.div>
            <motion.div 
              className="w-full max-w-xl lg:w-3/4"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={textVariants}
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className='mb-4 text-neutral-400'>{project.description}</p>
              <div>
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-blue-800'>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
