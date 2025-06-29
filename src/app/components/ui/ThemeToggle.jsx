"use client";

import { useState, useEffect } from "react";
import { IoIosSunny } from "react-icons/io";
import { IoMoon } from "react-icons/io5";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="cursor-pointer transition-all duration-300 hover:scale-110"
    >
      {isDark ? (
        // Sun icon for dark mode
        <IoIosSunny size={24} />
      ) : (
        // Moon icon for light mode
        <IoMoon size={24} />
      )}
    </button>
  );
}
