"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";

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
    <section
      id="/"
      className="c-space min-h-screen w-full flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center gap-y-10 w-full">
        <img
          src="/images/yellow_hfa.png"
          alt="hfa logo"
          className="w-42 h-42"
        />
        <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold flex items-center justify-center gap-3">
          <span
            className={`relative inline-block h-[1.3em] sm:h-[1.15em] md:h-[1.1em] xl:h-[1em] text-brightPurple animate-margin ${
              currentIndex === 0
                ? //hi
                  "mr-8 sm:mr-9 md:mr-11 lg:mr-16"
                : //Olá
                currentIndex === 2
                ? "mr-12 sm:mr-13 md:mr-16 lg:mr-22"
                : //Bonjour
                currentIndex === 4
                ? "mr-26 sm:mr-30 md:mr-35 lg:mr-50"
                : //Hallo, Hola, Ciao
                  "mr-18 sm:mr-19 md:mr-23 lg:mr-32"
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
        <p className="text-lg sm:text-xl md:text-2xl text-center max-w-2xl">
          Full-Stack Developer passionate about creating products and bringing
          ideas to life through code.
        </p>
        <div className="flex gap-0">
          <Button fillColor="bg-brightPurple" bgColor="bg-accentYellow">
            <a
              href="mailto:anesfh@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Me!
            </a>
          </Button>
          <Button fillColor="bg-accentYellow" bgColor="bg-brightPurple">
            <a
              href="/Hugo_Anes_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
