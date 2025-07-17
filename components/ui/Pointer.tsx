"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

interface PointerFollowerProps {
  className?: string;
}

const PointerFollower: React.FC<PointerFollowerProps> = ({
  className = "",
}) => {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isClicking, setIsClicking] = useState<boolean>(false);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const rafRef = useRef<number>(null);

  // Optimized mouse move handler with RAF
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
        if (!isVisible) setIsVisible(true);
      });
    },
    [isVisible]
  );

  const handleMouseEnter = useCallback(() => setIsVisible(true), []);
  const handleMouseLeave = useCallback(() => setIsVisible(false), []);
  const handleMouseDown = useCallback(() => setIsClicking(true), []);
  const handleMouseUp = useCallback(() => setIsClicking(false), []);

  // Detect hoverable elements
  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const isHoverable =
      target.matches(
        'a, button, [role="button"], input, select, textarea, [onclick], [cursor="pointer"]'
      ) || window.getComputedStyle(target).cursor === "pointer";
    setIsHovering(isHoverable);
  }, []);

  useEffect(() => {
    const options: AddEventListenerOptions = { passive: true };

    // Hide default cursor
    document.body.style.cursor = "none";

    document.addEventListener("mousemove", handleMouseMove, options);
    document.addEventListener("mouseenter", handleMouseEnter, options);
    document.addEventListener("mouseleave", handleMouseLeave, options);
    document.addEventListener("mousedown", handleMouseDown, options);
    document.addEventListener("mouseup", handleMouseUp, options);
    document.addEventListener("mouseover", handleMouseOver, options);

    return () => {
      // Restore default cursor
      document.body.style.cursor = "auto";

      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
    handleMouseDown,
    handleMouseUp,
    handleMouseOver,
  ]);

  if (!isVisible) return null;

  return (
    <div
      className={`pointer-events-none fixed z-[9999] ${className}`}
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* Outer circle border */}
      <div
        className={`absolute border-2 border-cyan-400 rounded-full transition-all duration-300 ease-out ${
          isClicking
            ? "w-8 h-8 rounded-lg rotate-45 border-cyan-300"
            : isHovering
            ? "w-12 h-12 border-cyan-300"
            : "w-6 h-6"
        }`}
        style={{
          transform: "translate(-50%, -50%)",
          left: "50%",
          top: "50%",
        }}
      />

      {/* Inner dot */}
      <div
        className={`absolute rounded-full bg-cyan-400 transition-all duration-300 ease-out ${
          isClicking
            ? "w-2 h-2 bg-cyan-300 rounded-sm rotate-45"
            : "w-1.5 h-1.5"
        }`}
        style={{
          transform: "translate(-50%, -50%)",
          left: "50%",
          top: "50%",
        }}
      />
    </div>
  );
};

export default PointerFollower;
