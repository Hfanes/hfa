"use client";

import { useState, useEffect } from "react";
import { IoIosSunny } from "react-icons/io";
import { IoMoon } from "react-icons/io5";
import { useTheme } from "@/contexts/ThemeProvider";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

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
