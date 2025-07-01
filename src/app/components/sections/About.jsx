"use client";
import React, { useEffect, useState } from "react";
import { FaReact, FaJava, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandCSharp } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";
import { SiPostgresql, SiDotnet } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

const techItems = [
  { label: "Javascript", icon: <IoLogoJavascript /> },
  { label: "Java", icon: <FaJava /> },
  { label: "C#", icon: <TbBrandCSharp /> },
  { label: "Python", icon: <FaPython /> },
  { label: "React", icon: <FaReact /> },
  { label: "MS SQL", icon: <DiMsqlServer /> },
  { label: "PostgreSQL", icon: <SiPostgresql /> },
  { label: ".NET", icon: <SiDotnet /> },
  { label: "Spring Boot", icon: <BiLogoSpringBoot /> },
];

export default function About() {
  const helloItems = ["Hi,", "Hallo,", "Olá,", "Hola,", "Bonjour,", "Ciao,"];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % helloItems.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [helloItems.length]);
  return (
    <section
      id="about"
      className="c-space w-full"
      data-cursor-color="bg-deepPurple"
    >
      <div className="flex flex-col gap-4 text-start ">
        <h2 className="font-bold text-xl sm:text-2xl">
          <span className="text-brightPurple">/ </span>
          about me
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mt-4 w-full">
          <div className="flex-1 space-y-4 text-lg">
            <p>
              I'm a full-stack developer from Portugal, currently based in
              Switzerland and actively seeking full-time opportunities. I enjoy
              working across the stack and love building functional,
              user-friendly applications that solve real problems.
            </p>
            <p>
              I hold a Master's degree in Computer Science from the University
              of Trás-os-Montes e Alto Douro. While I'm still exploring which
              area to specialize in long term, I'm passionate about continuous
              learning and thrive in collaborative environments.
            </p>
          </div>
          <div className="hidden md:flex flex-shrink-0 mb-6 md:mb-0 md:mr-8 justify-center w-full md:w-auto">
            <img
              src="/images/me.webp"
              alt="Portrait"
              className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-lg"
            />
          </div>
        </div>
        <h3 className="text-lg mt-8 text-start">
          <span className="text-brightPurple">/ </span>
          Tech Stack:
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-center font-semibold ">
          {techItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-1">
              <div>{item.label}</div>
              <div>{item.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
