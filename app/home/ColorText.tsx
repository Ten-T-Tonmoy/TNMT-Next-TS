"use client";
import React from "react";
import ColourfulText from "../../components/ui/ColorFulText";
import { motion } from "motion/react";

export default function ColourText() {
  return (
    <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans">
      The best <ColourfulText text="components" /> <br /> you will ever find
    </h1>
  );
}
//just using ColourFulText is enough bruh
