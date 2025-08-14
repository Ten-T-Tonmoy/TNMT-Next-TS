"use client";

import React, { useState, useEffect, useCallback } from "react";

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

  // Direct mouse move handler - no RAF for instant response
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
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
        transform: "translate(0, 0)",
      }}
    >
      {/* Main cursor body with SVG */}
      <div
        className={`relative transition-all duration-100 ease-linear ${
          isClicking ? "scale-90" : isHovering ? "scale-110" : "scale-100"
        }`}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="1"
          viewBox="0 0 16 16"
          className="h-6 w-6 -translate-x-[12px] -translate-y-[10px] -rotate-[70deg] transform stroke-cyan-600 text-cyan-500"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
        </svg>
      </div>

      {/* Click ripple effect - single ripple wave */}
      {isClicking && (
        <div
          className="absolute border-2 border-cyan-300 rounded-full opacity-100"
          style={{
            width: "18px",
            height: "18px",
            left: "-12px",
            top: "-17px",
            animation: "ripple 0.6s ease-out forwards",
          }}
        />
      )}

      <style jsx>{`
        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default PointerFollower;
