import aboutImage from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const fadeIn = (direction, delay) => ({
  hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, delay, ease: "easeOut" },
  },
});

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-16">
      {/* Section Title */}
      <motion.h1
        variants={fadeIn("left", 0)}
        initial="hidden"
        animate="visible"
        className="my-12 text-center text-5xl font-extrabold"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h1>

      {/* Content Wrapper */}
      <div className="flex flex-wrap lg:flex-nowrap lg:items-center">
        {/* Image Section */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-1/2 lg:p-8 mb-8 lg:mb-0"
        >
          <div className="flex justify-center">
            <img
              src={aboutImage}
              alt="About Me"
              className="rounded-lg shadow-xl max-w-full h-auto border-4 border-neutral-800 transition-transform duration-300 hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-1/2 lg:p-8"
        >
          <p className="text-lg text-neutral-400 font-light leading-relaxed tracking-tight">
            {ABOUT_TEXT}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
