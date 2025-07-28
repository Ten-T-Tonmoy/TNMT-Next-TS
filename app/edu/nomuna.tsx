"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaGraduationCap, FaSchool } from "react-icons/fa6";
import { RiFilePaper2Fill } from "react-icons/ri";
import { LuRadioTower } from "react-icons/lu";
import { HiBeaker } from "react-icons/hi2";

const GlowingTimeline = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const timelineData = [
    {
      title: "Early 2020",
      content: (
        <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 shadow-2xl border-2 w-full border-transparent bg-clip-padding relative p-6 mx-auto md:w-[40vw] font-semibold rounded-xl flex flex-col justify-center gap-4">
          <span className="absolute inset-x-0 w-full mx-auto top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[2px]" />
          <span className="absolute inset-x-0 w-full mx-auto bottom-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-[2px]" />

          <p className="mb-4 text-md font-normal text-white items-start justify-start flex gap-4">
            <FaGraduationCap className="text-[1.8rem] text-blue-400" />
            <p>
              Completed Secondary School Certificate - <strong>SSC</strong>
            </p>
          </p>
          <p className="mb-2 text-md font-normal text-white items-start justify-start flex gap-4">
            <FaSchool className="text-[1.8rem] text-green-400" />
            <p>
              <strong>Institute:</strong> Shamsul Hoque Khan School and College
            </p>
          </p>
          <p className="mb-2 text-md font-normal text-white items-start justify-start flex gap-4">
            <HiBeaker className="text-[1.8rem] text-yellow-400" />
            <p>
              <strong>Stream:</strong> Science
            </p>
          </p>
          <p className="mb-4 text-md font-normal gap-4 text-white items-start justify-start flex">
            <RiFilePaper2Fill className="text-[1.6rem] text-purple-400" />
            <p>
              <strong>GPA:</strong> 5.00
            </p>
          </p>
        </div>
      ),
    },
    {
      title: "Late 2022",
      content: (
        <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 shadow-2xl border-2 w-full border-transparent bg-clip-padding relative p-6 mx-auto md:w-[40vw] font-semibold rounded-xl flex flex-col justify-center gap-4">
          <span className="absolute inset-x-0 w-full mx-auto top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[2px]" />
          <span className="absolute inset-x-0 w-full mx-auto bottom-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-[2px]" />

          <p className="mb-4 text-md font-normal text-white items-start justify-start flex gap-4">
            <FaGraduationCap className="text-[1.8rem] text-blue-400" />
            <p>
              Completed Higher Secondary Certificate - <strong>HSC</strong>
            </p>
          </p>
          <p className="mb-2 text-md font-normal text-white items-start justify-start flex gap-4">
            <FaSchool className="text-[1.8rem] text-green-400" />
            <p>
              <strong>Institute:</strong> Dhaka College
            </p>
          </p>
          <p className="mb-2 text-md font-normal text-white items-start justify-start flex gap-4">
            <HiBeaker className="text-[1.8rem] text-yellow-400" />
            <p>
              <strong>Stream:</strong> Science
            </p>
          </p>
          <p className="mb-4 text-md font-normal gap-4 text-white items-start justify-start flex">
            <RiFilePaper2Fill className="text-[1.6rem] text-purple-400" />
            <p>
              <strong>GPA:</strong> 5.00
            </p>
          </p>
        </div>
      ),
    },
    {
      title: "Expected 2027",
      content: (
        <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 shadow-2xl border-2 w-full border-transparent bg-clip-padding p-6 relative mx-auto md:w-[40vw] font-semibold rounded-xl flex flex-col justify-center gap-4">
          <span className="absolute inset-x-0 w-full mx-auto top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[2px]" />
          <span className="absolute inset-x-0 w-full mx-auto bottom-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-[2px]" />

          <p className="mb-4 text-md font-normal text-white items-start justify-start flex gap-4">
            <FaGraduationCap className="text-[1.8rem] text-blue-400" />
            <p>
              Bachelor of Science - <strong>BSc.</strong>
            </p>
          </p>
          <p className="mb-2 text-md font-normal text-white items-start justify-start flex gap-4">
            <FaSchool className="text-[1.8rem] text-green-400" />
            <p>
              <strong>Institute:</strong> University of Rajshahi
            </p>
          </p>
          <p className="mb-2 text-md font-normal text-white items-start justify-start flex gap-4">
            <LuRadioTower className="text-[2.5rem] sm:text-[2rem] text-cyan-400" />
            <p>
              <strong>Major:</strong> Information and Communication Engineering{" "}
              <strong>(ICE)</strong>
            </p>
          </p>
          <p className="mb-4 text-md font-normal gap-4 text-white items-start justify-start flex">
            <RiFilePaper2Fill className="text-[1.6rem] text-purple-400" />
            <p>
              <strong>CGPA:</strong> TBD
            </p>
          </p>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Simple progress based on overall page scroll
      const totalScroll = documentHeight - windowHeight;
      const currentScroll = scrollTop;

      const progress = Math.max(0, Math.min(1, currentScroll / totalScroll));
      setScrollProgress(progress);

      // Debug log
      console.log(
        "Simple Progress:",
        progress,
        "ScrollTop:",
        scrollTop,
        "Total:",
        totalScroll
      );
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className=" bg-gradient-to-br  from-slate-900 via-blue-900 to-slate-900 py-20">
      <div className="max-w-6xl mx-auto px-6" ref={containerRef}>
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            My Academic Journey So Far...
          </h1>
          <p className="text-xl text-blue-300">
            A timeline of educational milestones and achievements
          </p>
        </div>

        {/* Timeline */}
        <div className="relative" ref={timelineRef}>
          {/* Static background line */}
          <div className="absolute left-8 top-0 w-1 h-full bg-gradient-to-b from-transparent via-slate-600 to-transparent"></div>

          {/* Animated glowing progress line */}
          <div
            className="absolute left-8 top-0 w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 rounded-full
             transition-all duration-300 ease-out"
            style={{
              height: `${scrollProgress * 100}%`,
              boxShadow: `
                0 0 20px rgba(59, 130, 246, 0.8),
                0 0 40px rgba(59, 130, 246, 0.6),
                0 0 60px rgba(59, 130, 246, 0.4)
              `,
              filter: "drop-shadow(0 0 10px rgba(59, 130, 246, 0.9))",
            }}
          ></div>

          {/* Timeline entries */}
          {timelineData.map((entry, index) => {
            const isActive =
              scrollProgress >= index / (timelineData.length - 1);

            return (
              <div
                key={index}
                className="relative flex items-start mb-16 last:mb-0"
              >
                {/* Timeline dot */}
                <div
                  className={`relative z-10 w-6 h-6 rounded-full border-4 transition-all duration-500 flex-shrink-0 ${
                    isActive
                      ? "bg-cyan-400 border-cyan-300 shadow-lg shadow-cyan-400/50"
                      : "bg-slate-700 border-slate-600"
                  }`}
                  style={{
                    boxShadow: isActive
                      ? "0 0 20px rgba(34, 211, 238, 0.8), 0 0 40px rgba(34, 211, 238, 0.4)"
                      : "none",
                  }}
                >
                  <div
                    className={`absolute inset-1 rounded-full transition-all duration-500 ${
                      isActive ? "bg-white" : "bg-slate-800"
                    }`}
                  ></div>
                </div>

                {/* Content */}
                <div className="ml-8 flex-1">
                  <div
                    className={`transform transition-all duration-500 ${
                      isActive
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-70"
                    }`}
                  >
                    {/* Year badge */}
                    <div
                      className={`inline-block px-4 py-2 rounded-full text-sm font-bold mb-6 transition-all duration-500 ${
                        isActive
                          ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-400/30"
                          : "bg-slate-700 text-slate-300"
                      }`}
                    >
                      {entry.title}
                    </div>

                    {/* Content */}
                    <div
                      className={`transition-all duration-500 ${
                        isActive
                          ? "scale-100 opacity-100"
                          : "scale-95 opacity-80"
                      }`}
                    >
                      {entry.content}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress indicator */}
        <div className="fixed bottom-8 right-8 bg-slate-800/80 backdrop-blur-md rounded-full p-4 border border-slate-600">
          <div className="text-white text-sm font-mono">
            {Math.round(scrollProgress * 100)}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlowingTimeline;
