"use client";
import Button from "@/components/ui/Button";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

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
          src="/images/yellow_hfa.webp"
          alt="hfa logo"
          className="w-42 h-42 aspect-auto"
        />
        <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold">
          <span className="text-brightPurple">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="w-full text-center"
              >
                {helloItems[currentIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl mt-[-20px]">
          I'm Hugo
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-center max-w-2xl">
          Full-Stack Developer passionate about creating products and bringing
          ideas to life through code.
        </p>
        <div className="flex gap-0">
          <Button fillColor="bg-brightPurple" bgColor="bg-accentYellow">
            <a
              href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#97;&#110;&#101;&#115;&#102;&#104;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;&#10;"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send me an email"
            >
              Contact Me!
            </a>
          </Button>
          <Button fillColor="bg-accentYellow" bgColor="bg-brightPurple">
            <a
              href="/Hugo_Anes_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download my CV"
            >
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
