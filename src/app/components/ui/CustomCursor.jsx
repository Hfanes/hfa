"use client";

import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const frameRef = useRef(null);
  const latestPositionRef = useRef({ x: 0, y: 0 });

  const [isCursorDisabled, setIsCursorDisabled] = useState(false);
  const [cursorColor, setCursorColor] = useState("bg-black");
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const updateDesktop = () => setIsDesktop(mediaQuery.matches);

    updateDesktop();
    mediaQuery.addEventListener("change", updateDesktop);

    return () => mediaQuery.removeEventListener("change", updateDesktop);
  }, []);

  useEffect(() => {
    const updateCursorPosition = () => {
      const { x, y } = latestPositionRef.current;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${x - 6}px, ${
          y - 6
        }px, 0)`;
      }

      frameRef.current = null;
    };

    const handleMouseMove = (event) => {
      latestPositionRef.current = {
        x: event.clientX,
        y: event.clientY,
      };

      if (event.target instanceof Element) {
        const colorTarget = event.target.closest("[data-cursor-color]");
        const defaultCursorTarget = event.target.closest(".default-cursor");

        setCursorColor(
          colorTarget?.getAttribute("data-cursor-color") || "bg-black"
        );
        setIsCursorDisabled(Boolean(defaultCursorTarget));
      } else {
        setCursorColor("bg-black");
        setIsCursorDisabled(false);
      }

      if (!frameRef.current) {
        frameRef.current = requestAnimationFrame(updateCursorPosition);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);

      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const isHidden = !isDesktop || isCursorDisabled;

  return (
    <div
      ref={cursorRef}
      className={`fixed left-0 top-0 pointer-events-none z-[100] transition-[opacity,transform] duration-200 ease-out ${
        isHidden ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className={`w-3 h-3 shadow-lg ${cursorColor}`} />
    </div>
  );
}
