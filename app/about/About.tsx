"use client";
import React from "react";
import CodeBlock from "./CodeCard";
import { MeteorsCard } from "./MeteorCard";

const About = () => {
  return (
    <div
      className="min-h-[100vh] flex flex-col md:flex-row 
    bg-neutral-950 justify-center items-center  gap-14"
    >
      <CodeBlock />
      <Myself />
    </div>
  );
};

export default About;

//dayum sometime min-h more important

const Myself = () => {
  //typewriter + meteor Effect/ lampsec
  return (
    <div
      className="min-h-[100vh] flex items-center justify-center
    p-2 w-[92vw] md:w-[48vw]"
    >
      <MeteorsCard />
    </div>
  );
};
