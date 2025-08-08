import React from "react";
import { HERO_CONTENT } from "../constants";
import profileImage from "../assets/ProfileImage.jpg";
import { motion } from "framer-motion";

const fadeIn = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  },
});

// Google Drive File ID (Your actual file ID)
const googleDriveFileID = "1Am02FH6dkeREzPlrSBQ-RKmvvIAMijVs";

// Function to view CV in a new tab
const handleViewCV = () => {
  window.open(`https://drive.google.com/file/d/${googleDriveFileID}/view`, "_blank");
};

// Function to download CV directly
const handleDownloadCV = () => {
  window.location.href = `https://drive.google.com/uc?export=download&id=${googleDriveFileID}`;
};

const Hero = () => {
  return (
    <div className="border-b mt-24 border-neutral-900 pb-10 lg:flex lg:items-center lg:justify-between">
      {/* Text Content */}
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col items-start">
          <motion.h1
            variants={fadeIn(0)}
            initial="hidden"
            animate="visible"
            className="pb-6 text-5xl font-extrabold tracking-tight text-white lg:mt-16 lg:text-7xl"
          >
            Rabiu Muhammad
          </motion.h1>
          <motion.span
            variants={fadeIn(0.3)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-4xl text-transparent tracking-tight"
          >
            Software Engineer
          </motion.span>
          <motion.p
            variants={fadeIn(0.6)}
            initial="hidden"
            animate="visible"
            className="my-4 max-w-xl py-4 text-lg font-light tracking-tight text-gray-300"
          >
            {HERO_CONTENT}
          </motion.p>

          {/* CV Buttons */}
          <div className="mt-4 flex space-x-4">
            {/* View CV Button */}
            <motion.button
              variants={fadeIn(0.9)}
              initial="hidden"
              animate="visible"
              onClick={handleViewCV}
              className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 hover:bg-pink-900 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
            >
              View CV
            </motion.button>

            {/* Download CV Button */}
            <motion.button
              variants={fadeIn(1.2)}
              initial="hidden"
              animate="visible"
              onClick={handleDownloadCV}
              className="bg-neutral-800 hover:bg-neutral-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
            >
              Download CV
            </motion.button>
          </div>
        </div>
      </div>

      {/* Profile Image */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          src={profileImage}
          alt="Profile"
          className="rounded-lg shadow-xl max-w-full h-auto border-4 border-neutral-800 transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Hero;
