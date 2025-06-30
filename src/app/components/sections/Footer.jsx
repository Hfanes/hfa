import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <section className="sm:px-10 px-5 mt-12 mb-4 text-center mx-auto flex flex-col items-center gap-4 space-y-4 text-lg">
      <div className="flex items-center gap-4 default-cursor">
        <a
          className="cursor-pointer "
          href="https://github.com/Hfanes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </a>
        <a
          className="cursor-pointer "
          href="https://www.linkedin.com/in/hugofanes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          className="cursor-pointer"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter size={24} />
        </a>
        <a
          className="cursor-pointer "
          href="mailto:anesfh@gmail.com"
          rel="noopener noreferrer"
        >
          <IoMdMail size={24} />
        </a>
      </div>
      <div className="">
        Copyright © {year}{" "}
        <span className="text-accentYellow font-bold">hfa</span> | All rights
        reserved.
      </div>
    </section>
  );
}
