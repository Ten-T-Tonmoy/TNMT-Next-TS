"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const languages = [
  "Hello World",
  "হ্যালো ওয়ার্ল্ড",
  "مرحبا بالعالم",
  "你好，世界",
];

export default function IntroWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [textIndex, setTextIndex] = useState(0);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % languages.length);
    }, 500);

    const hideTimeout = setTimeout(() => {
      setShowIntro(false);
    }, 2200); // total intro duration

    return () => {
      clearInterval(textInterval);
      clearTimeout(hideTimeout);
    };
  }, []);

  if (showIntro) {
    return (
      <motion.div
        className="fixed inset-0 bg-black flex items-center justify-center z-50"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 3, duration: 1.2 }}
      >
        <motion.h1
          className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pr1 via-sec1 to-pr2"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {languages[textIndex]}
        </motion.h1>
      </motion.div>
    );
  }

  return <>{children}</>;
}
