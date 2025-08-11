import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const textVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" }
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
        <motion.address 
          className="not-italic my-4 text-neutral-300"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={textVariants}
        >
          {CONTACT?.address || "Address not available"}
        </motion.address>

        <motion.p 
          role="phone"
          className="my-4 text-neutral-300"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={textVariants}
        >
          {CONTACT?.phoneNo || "Phone number not available"}
        </motion.p>

        <motion.a 
          href={`mailto:${CONTACT?.email || "mrabiu321@gmail.com"}`} 
          className="border-b text-blue-400 hover:text-blue-600 transition-colors"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={textVariants}
        >
          {CONTACT?.email || "mrabiu321@gmail.com"}
        </motion.a>
      </div>
    </div>
  );
}

export default Contact;
