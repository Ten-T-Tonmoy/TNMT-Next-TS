"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

//banner import like dis duh
import banner1 from "../../public/bg.png";
import banner2 from "../../public/bg.png";
import banner3 from "../../public/bg.png";

const banners = [banner1, banner2, banner3];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [play, setPlay] = useState(true);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % banners.length);
  };
  const previousSlide = () => {
    setIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const dotSlide = (idx) => {
    setIndex(idx);
  };

  useEffect(() => {
    if (!play) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [play]);
  return (
    <div
      className="
  relative h-[65vh] w-full sm:w-[86vw] sm:mx-[7vw] sm:rounded-xl
  overflow-hidden bg-gradient-to-br from-purple-950 via-blue-900
  to-indigo-900
  "
    >
      {/**Banner images inset-0 is important */}
      <div className="relative h-full w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div
              className="
            h-full w-full bg-cover bg-right sm:bg-center bg-no-repeat
            
            "
              style={{
                backgroundImage: `url(${banners[index]})`,
                filter: "brightness(0.85) contrast(1.1)",
              }}
            ></div>

            {/**upper layer */}

            <div
              className="absolute inset-0 bg-gradient-to-r
            from-black/60 via-transparent to-black/40 "
            ></div>
            <div
              className="absolute inset-0 bg-gradient-to-t
            from-black/70 via-transparent to-transparent "
            ></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/**overlay texts */}

      <div className="absolute inset-0 flex items-center justify-start">
        <div className="max-w-6xl  px-5 sm:px-[10vw] text-white">
          <motion.div
            key={`content${index}`}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.h1
              className="text-2xl md:text-3xl mb-2  bg-gradient-to-r
              from-white via-blue-500 to-purple-500 bg-clip-text text-transparent "
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              Trending Items
            </motion.h1>

            <motion.p
              className="text-3xl font-black  w-[20vw] md:text-4xl  max-w-3xl 
             text-gray-800"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              Experience something extraordinary
            </motion.p>

            <motion.div
              className="py-4 "
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <button
                className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-md p-2
              font-black hover:scale-105 transition-all duration-300 hover:shadow-purple-500/20 shadow-xl cursor-pointer"
              >
                Buy it out!
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/**nav controlling */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 
        flex items-center gap-4"
        >
          <div className="flex gap-3">
            {banners.map((el, idx) => (
              <button
                key={idx}
                onClick={() => dotSlide(idx)}
                className={`w-3 h-3 cursor-pointer rounded-full transition-all duration-300 ${
                  idx === index
                    ? "bg-white scale-125 shadow-lg"
                    : "bg-white/40 hover:bg-blue-400/60 scale-110"
                }`}
              ></button>
            ))}
          </div>
          <button
            onClick={() => setPlay(!play)}
            className="p-2 rounded-full  hover:bg-white/30 backdrop-blur-md transition-all duration-300 cursor-pointer"
          >
            {play ? (
              <FaPause className="w-4 h-4 text-white hover:scale-110 transition-transform" />
            ) : (
              <FaPlay className="w-4 h-4 text-white hover:scale-110 transition-transform" />
            )}
          </button>
        </div>

        {/**Side nav */}
        <button
          className="cursor-pointer
          absolute sm:left-4  top-[50%] text-white
          "
          onClick={previousSlide}
        >
          <ChevronLeft className="scale-150 sm:scale-200" />
        </button>
        <button
          className="cursor-pointer
          absolute right-0 sm:right-4  top-[50%] text-white
          "
          onClick={nextSlide}
        >
          <ChevronRight className="scale-150 sm:scale-200" />
        </button>
      </div>

      {/**floating shits */}

      <motion.div
        className="absolute top-10 sm:top-20 left-10
      sm:left-20 w-4 h-4 bg-gradient-to-r from-blue-400
       to-purple-400 rounded-full opacity-60
      "
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>
      <motion.div
        className="absolute top-[75%]  left-[39%]
       w-4 h-4 bg-gradient-to-l from-blue-600
       to-cyan-400 rounded-full opacity-70
      "
        animate={{
          y: [0, -15, 0],
          x: [0, -5, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>
      <motion.div
        className="absolute top-56 sm:top-[50%] right-10
      sm:right-35 w-4 h-4 bg-gradient-to-r from-purple-400
       to-pink-400 rounded-full opacity-60
      "
        animate={{
          y: [0, 25, 0],
          x: [0, 10, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      ></motion.div>
    </div>
  );
};

export default Hero;
