import React from 'react';
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const textVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <motion.h1 
        className="my-10 text-center text-4xl"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={textVariants}
      >
        Get in Touch
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p 
          className="my-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={textVariants}
        >
          {CONTACT.address}
        </motion.p>
        <motion.p 
          className="my-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={textVariants}
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.a 
          href={`mailto:${CONTACT.email}`} 
          className="border-b"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={textVariants}
        >
          {CONTACT.email}
        </motion.a>
      </div>
    </div>
  );
}

export default Contact;
