"use client";
import React, { useState, useRef, useCallback } from "react";
import ExpansionFill from "@/components/ui/ExpansionFill";

export default function Button({
  children,
  className = "",
  bgColor = "",
  textColor = "",
  fillColor = "",
  ...props
}) {
  const [isActive, setIsActive] = useState(false);
  const [scale, setScale] = useState(0);
  const [origin, setOrigin] = useState({ x: 0.5, y: 0.5 });
  const buttonRef = useRef(null);

  const BgColor = bgColor || "bg-gray-300";
  const TextColor = textColor || "text-black";
  const FillColor = fillColor || "bg-black";

  // Calculate the origin of the mouse event relative to the button
  const getRelativePosition = useCallback((event) => {
    const rect = buttonRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    return { x: Math.max(0, Math.min(1, x)), y: Math.max(0, Math.min(1, y)) };
  }, []);

  // Animate expansion on mouse enter
  const handleMouseEnter = (e) => {
    const { x, y } = getRelativePosition(e);
    setOrigin({ x, y });
    setIsActive(true);
    setScale(0);
    let progress = 0;
    const animate = () => {
      progress += 0.12;
      if (progress >= 1) {
        setScale(1);
      } else {
        setScale(progress);
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };

  // Animate contraction on mouse leave
  const handleMouseLeave = (e) => {
    const { x, y } = getRelativePosition(e);
    setOrigin({ x, y });
    let progress = scale;
    const animate = () => {
      progress -= 0.16;
      if (progress <= 0) {
        setScale(0);
        setIsActive(false);
      } else {
        setScale(progress);
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };

  return (
    <div
      className={`cursor-zone-yellow inline-flex items-center justify-center p-4`}
      style={{ width: "fit-content" }}
      //To change cursor color
      data-cursor-color={FillColor}
    >
      <button
        ref={buttonRef}
        className={`cursor-pointer border-3 border-black bg-gray-300 pb-2 transition-all duration-100 ease-in-out active:pb-0 active:mb-2 active:translate-y-2 text-black font-bold text-sm sm:text-lg active:bg-gray-700 ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <div
          className={`relative ${BgColor} ${TextColor} border-4 border-white py-1 px-2 flex items-center justify-center w-full h-full`}
        >
          <ExpansionFill
            isActive={isActive}
            scale={scale}
            originX={origin.x}
            originY={origin.y}
            className={className}
            fillColor={FillColor}
          />
          <span className="relative z-10 w-full h-full flex items-center justify-center">
            {children}
          </span>
        </div>
      </button>
    </div>
  );
}
