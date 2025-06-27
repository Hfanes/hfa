"use client";

import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  //custom cursor
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isCursorDisabled, setIsCursorDisabled] = useState(false);
  const [cursorColor, setCursorColor] = useState("bg-black");
  const [isDesktop, setIsDesktop] = useState(true);

  // Detect desktop (width >= 1024)
  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Only proceed if e.target is an Element (not a text node or window/document)
      if (e.target instanceof Element) {
        const button = e.target.closest("[data-cursor-color]");
        if (button) {
          setCursorColor(button.getAttribute("data-cursor-color"));
        } else {
          setCursorColor("bg-black");
        }
      } else {
        setCursorColor("bg-black");
      }
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  //to disable cursor when hovering
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (e.target instanceof Element) {
        const isOver = e.target.closest(".default-cursor");
        setIsCursorDisabled(!!isOver);
      } else {
        setIsCursorDisabled(false);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Track global mouse position for custom cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Custom cursor (disable on default-cursor class or on mobile/tablet) */}
      {isDesktop && !isCursorDisabled && (
        <div
          className="fixed pointer-events-none z-[100] transition-all duration-200 ease-out"
          style={{
            left: mousePosition.x - 6,
            top: mousePosition.y - 6,
          }}
        >
          <div className={`w-3 h-3 shadow-lg ${cursorColor}`} />
        </div>
      )}
    </>
  );
}
