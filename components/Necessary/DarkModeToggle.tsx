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
      className="px-2 py-2 text-2xl rounded-full bg-white/80 text-orange-600
      dark:text-gray-200 
       dark:bg-gray-800 transition-colors"
    >
      {theme === "dark" ? <MdDarkMode /> : <FaSun />}
    </button>
  );
}
