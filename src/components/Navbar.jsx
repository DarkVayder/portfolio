import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 px-8 text-white shadow-md">
      {/* Branding */}
      <div className="flex items-center">
        <h1 className="text-3xl font-bold cursor-pointer bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
          RM
        </h1>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-6 text-2xl">
        <a
          href="https://www.linkedin.com/in/rabiu-muhammad-b17a452b1/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 hover:scale-110 hover:text-blue-500"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/DarkVayder"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 hover:scale-110 hover:text-gray-400"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/Zeldrys_kun"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 hover:scale-110 hover:text-blue-400"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://wa.me/2348163338274"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 hover:scale-110 hover:text-green-400"
        >
          <FaWhatsapp />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
