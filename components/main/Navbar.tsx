"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="w-full h-full flex items-center justify-between m-auto px-4 md:px-10">
        <a href="#about-me" className="h-auto w-auto flex items-center">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />
        </a>

        <div className="hidden md:flex items-center space-x-4">
          <a href="#about-me" className="cursor-pointer text-gray-200 hover:text-white">
            About me
          </a>
          <a href="#skills" className="cursor-pointer text-gray-200 hover:text-white">
            Skills
          </a>
          <a href="#experience" className="cursor-pointer text-gray-200 hover:text-white">
            Education
          </a>
          <a href="#projects" className="cursor-pointer text-gray-200 hover:text-white">
            Projects
          </a>
        </div>

        <div className="hidden md:flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
              className="cursor-pointer"
            />
          ))}
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? (
              <FaTimes className="w-6 h-6 text-gray-200" />
            ) : (
              <FaBars className="w-6 h-6 text-gray-200" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden w-full h-screen bg-[#030014] px-4 py-4 flex flex-col items-start space-y-4">
          <a href="#about-me" className="block text-gray-200 py-2 italic font-bold hover:text-white">
            About me
          </a>
          <a href="#skills" className="block text-gray-200 py-2 italic font-bold hover:text-white">
            Skills
          </a>
          <a href="#experience" className="block text-gray-200 py-2 italic font-bold hover:text-white">
            Education
          </a>
          <a href="#projects" className="block text-gray-200 py-2 italic font-bold hover:text-white">
            Projects
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
