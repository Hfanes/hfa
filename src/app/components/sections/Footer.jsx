import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <section className="sm:px-10 px-5 mt-12 mb-4 text-center mx-auto flex flex-col items-center gap-4 space-y-4 text-lg">
      <hr className="h-1 w-full"></hr>
      <div className="flex items-center gap-4 default-cursor">
        <a
          className="cursor-pointer flex items-center gap-2"
          href="https://github.com/Hfanes"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my github profile"
        >
          <FaGithub size={24} />
          <span className="text-sm">Github</span>
        </a>
        <a
          className="cursor-pointer flex items-center gap-2"
          href="https://www.linkedin.com/in/hugofanes/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my linkedin profile"
        >
          <FaLinkedin size={24} />
          <span className="text-sm">LinkedIn</span>
        </a>
        <a
          className="cursor-pointer flex items-center gap-2"
          href="https://x.com/hfa_dev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my twitter profile"
        >
          <FaXTwitter size={24} />
          <span className="text-sm">Twitter/X</span>
        </a>
        <a
          className="cursor-pointer flex items-center gap-2"
          href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#97;&#110;&#101;&#115;&#102;&#104;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;&#10;"
          rel="noopener noreferrer"
          aria-label="Send me an email"
        >
          <IoMdMail size={24} />
          <span className="text-sm">Mail</span>
        </a>
      </div>
      <div className="text-xs">
        Copyright © {year}{" "}
        <span className="text-accentYellow font-bold ">hfa</span> | All rights
        reserved.
      </div>
    </section>
  );
}
