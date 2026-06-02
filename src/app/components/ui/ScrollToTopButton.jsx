"use client";

import { useEffect, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <button
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 p-3 rounded-full z-[110] bg-accentYellow text-black transition-opacity duration-300 opacity-100 default-cursor cursor-pointer"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <MdKeyboardArrowUp />
    </button>
  );
}
