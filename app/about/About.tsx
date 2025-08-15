"use client";
import React from "react";
import CodeBlock from "./CodeCard";

const About = () => {
  return (
    <div
      className=" w-full items-center 
    justify-center flex flex-col py-10 md:pt-0 "
    >
      <h1
        className="text-5xl  w-full md:w-[70vw] text-center
        text-white  md:text-start font-extrabold
        "
      >
        About Me
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        <CodeBlock />
        <CodeBlock />
      </div>
    </div>
  );
};

export default About;

//dayum sometime min-h more important
