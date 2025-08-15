"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { MdDarkMode } from "react-icons/md";
import { FaSun } from "react-icons/fa6";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`px-2 py-2 text-2xl rounded-full 
        transition-all duration-200 ease-in-out hover:scale-110
      ${
        theme === "dark"
          ? "text-gray-200 bg-gray-800"
          : "text-white border border-white/20"
      }`}
    >
      {theme === "dark" ? <MdDarkMode /> : <FaSun />}
    </button>
  );
}
