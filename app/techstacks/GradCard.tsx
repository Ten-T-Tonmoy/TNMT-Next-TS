"use client";
import React, { useState } from "react";
import { BackgroundGradientAnimation } from "../../components/ui/gradientbg";
import { IoCopyOutline } from "react-icons/io5";
import { IoCopy } from "react-icons/io5";

export default function GradCard() {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    const text = "turing01754@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className="w-72 h-72 rounded-2xl items-center   justify-center
     overflow-hidden"
    >
      <BackgroundGradientAnimation>
        <div
          className="text-xl h-72  my-auto p-4 flex flex-col items-center 
          gap-4 justify-center font-extrabold
        "
        >
          <p>Do you Want to Collab on something cool ?</p>
          <button
            onClick={handleCopy}
            className="border my-3 text-sm cursor-none font-medium relative bg-gradient-to-r
        from-pr1 via-pr2 to-sec1 transition-all duration-200
        ease-in-out active:scale-95 hover:scale-105
        border-neutral-200 dark:border-white/[0.2] text-black
        dark:text-white px-4 py-[12px] md:py-3 rounded-[10px]"
          >
            <span className="md:text-[1rem]">
              {copied ? (
                <p
                  className="flex justify-center items-center gap-2
                "
                >
                  <IoCopy />
                  Email copied to ClipBoard !
                </p>
              ) : (
                <p
                  className="flex justify-center items-center gap-2
                "
                >
                  <IoCopyOutline />
                  Click to Copy My Email
                </p>
              )}
            </span>
            {/**top color a bit  */}
            {/* <span
          className="absolute inset-x-0 w-[70%] mx-auto
         top-[0px] bg-gradient-to-r from-transparent via-pink-600
         to-transparent h-[1px]"
         /> */}
          </button>
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
}
