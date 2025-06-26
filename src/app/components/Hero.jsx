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

export default function Hero() {
  const helloItems = ["Hi,", "Hallo,", "Olá,", "Hola,", "Bonjour,", "Ciao,"];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % helloItems.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [helloItems.length]);
  return (
    <section id="hero" className="c-space min-h-screen w-full ">
      <div className="flex flex-col mt-20 sm:mt-30 gap-4 text-start ">
        <div className="flex justify-between ">
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold flex items-center justify-center gap-3">
              <span
                className={`relative inline-block h-[1.3em] sm:h-[1.15em] md:h-[1.1em] xl:h-[1em] text-brightPurple animate-margin ${
                  currentIndex === 0
                    ? //hi
                      "mr-8 sm:mr-9 md:mr-11 lg:mr-16"
                    : //Olá
                    currentIndex === 2
                    ? "mr-10 sm:mr-13 md:mr-16 lg:mr-22"
                    : //Bonjour
                    currentIndex === 4
                    ? "mr-24 sm:mr-30 md:mr-35 lg:mr-50"
                    : //Hallo, Hola, Ciao
                      "mr-14 sm:mr-19 md:mr-23 lg:mr-32"
                }
              `}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="absolute left-0 top-0 w-full text-center"
                  >
                    {helloItems[currentIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <span>I'm Hugo</span>
            </h1>
            <h2 className="text-xl sm:text-2xl xl:text-3xl">
              Software Engineer
            </h2>
          </div>

          <div className="hidden sm:block aspect-square w-40">
            <img
              src="/images/me.jpeg"
              alt="Portrait"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
        <h3 className="text-start">/about me </h3>
        <div className="flex flex-col mt-4 gap-15 w-full ">
          <div className="space-y-4 text-lg">
            <p>
              I'm a full-stack developer from Portugal, currently based in
              Switzerland and actively seeking full-time opportunities. I enjoy
              working across the stack and love building functional,
              user-friendly applications that solve real problems.
            </p>
            <p>
              I hold a Master's degree in Computer Science from the University
              of Trás-os-Montes e Alto Douro. While I'm still exploring which
              area to specialize in long term, I’m passionate about continuous
              learning and thrive in collaborative environments.
            </p>
          </div>
          <div className="text-xl font-bold">Tech Stack:</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-center font-semibold ">
            {techItems.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-1">
                <div>{item.label}</div>
                <div>{item.icon}</div>
              </div>
            ))}
          </div>
          <div className="flex gap-4">
            <button className="cursor-pointer border-3 border-black bg-gray-300 pb-2 transition-all duration-100 ease-in-out active:pb-0 active:mb-2 active:translate-y-2 text-black font-bold active:bg-gray-700 ">
              <a
                href="mailto:anesfh@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-brightPurple border-4 border-white py-1 px-2">
                  Contact Me!
                </div>
              </a>
            </button>
            <button className="cursor-pointer border-3 border-black bg-gray-300 pb-2 transition-all duration-100 ease-in-out active:pb-0 active:mb-2 active:translate-y-2 text-black font-bold active:bg-gray-700 ">
              <a
                href="/Hugo_Anes_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-accentYellow border-4 border-white py-1 px-2">
                  Download CV
                </div>
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
