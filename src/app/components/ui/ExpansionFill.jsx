import React from "react";

export default function ExpansionFill({
  isActive = false,
  scale = 0,
  originX = 0.5,
  originY = 0.5,
  fillColor = "",
  className = "",
  style = {},
}) {
  return (
    <div
      className={`absolute inset-0 transition-[clip-path,opacity,transform] duration-100 ease-out pointer-events-none ${className} ${fillColor}`}
      style={{
        opacity: isActive ? 1 : 0,
        transform: `scale(${scale})`,
        transformOrigin: `${originX * 100}% ${originY * 100}%`,
        clipPath: `circle(${scale * Math.SQRT2 * 100}% at ${
          originX * 100
        }% ${originY * 100}%)`,
        ...style,
      }}
    />
  );
}
