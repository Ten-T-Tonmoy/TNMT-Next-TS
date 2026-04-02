"use client";
import React from "react";
import CodeBlock from "./CodeCard";
import gif from "../../public/photos/back-end-developer.png";
import Image from "next/image";

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
      <div
        className="flex flex-col md:flex-row items-center
       justify-center w-full"
      >
        <CodeBlock />
        {/* <CodeBlock /> */}
        <div
          className="h-full justify-self-center  flex flex-col items-center
           mt-10 md:mt-8 gap-8
        p-2 w-[88vw] md:max-w-[38vw]"
        >
          <Image src={gif} alt={""} />
        </div>
      </div>
    </div>
  );
};

export default About;

//dayum sometime min-h more important
