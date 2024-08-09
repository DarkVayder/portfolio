import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className='mx-2 w-10 text-3xl font-bold cursor-pointer'>Rabiu</h1>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/rabiu-muhammad-b17a452b1/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/DarkVayder" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://x.com/Zeldrys_kun" target="_blank" rel="noopener noreferrer">
          <FaXTwitter />
        </a>
        <a href="https://wa.me/2348163338274" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
      </div>
    </nav>
  )
}

export default Navbar;
