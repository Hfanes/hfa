"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import React from "react";
import ThemeToggle from "../ui/ThemeToggle";

export default function LeftNavbar() {
  return (
    <nav className="fixed top-8 left-8 p-3">
      <div className="flex items-center justify-center gap-4 default-cursor">
        <ThemeToggle />
        <a
          className="cursor-pointer transition-all duration-300 hover:scale-110"
          href="https://github.com/Hfanes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </a>
        <a
          className="cursor-pointer transition-all duration-300 hover:scale-110"
          href="https://www.linkedin.com/in/hugofanes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          className="cursor-pointer transition-all duration-300 hover:scale-110"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter size={24} />
        </a>
        <a
          className="cursor-pointer transition-all duration-300 hover:scale-110"
          href="mailto:anesfh@gmail.com"
          rel="noopener noreferrer"
        >
          <IoMdMail size={24} />
        </a>
      </div>
    </nav>
  );
}
