import React from "react";
import { BsGearWide } from "react-icons/bs";
import { BsFillGearFill } from "react-icons/bs";
import { BiSolidSend } from "react-icons/bi";
import Link from "next/link";

const UnderConstruction = () => {
  return (
    <div
      className=" flex h-[90vh] overflow-x-hidden w-full flex-col items-center 
    justify-center 
     text-white text-center px-6 relative "
    >
      <BsFillGearFill
        size={150}
        className="text-white/50 fixed animate-spin-slow-reverse
        right-6 top-1/2 drop-shadow-xl pointer-events-none"
      />
      <BsGearWide
        size={350}
        className="text-white-200/40 top-24 pointer-events-none -left-24 fixed animate-spin-slow drop-shadow-xl"
      />

      <div
        className="z-10 relative  rounded-2xl  flex items-center justify-center md:w-[45vw] py-4 md:py-10
        shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
        backdrop-blur-md bg-white/10 border border-white/20 px-4  w-full flex-col"
      >
        <h1
          className="text-5xl sm:text-7xl font-bold mb-4 
         bg-clip-text 
          bg-no-repeat text-transparent bg-gradient-to-r py-2
           from-pr1 via-pr2 to-sec1 [text-shadow:0_0_rgba(0,0,0,0.1)]"
        >
          Under Construction
        </h1>
        <p className="text-xl sm:text-xl  text-zinc-300">
          Working on features and pages.
          <br /> Meanwhile Check on pages kindly
          <br />
        </p>
        <div className="text-pr1 mt-4 text-lg font-bold">Stay tuned!</div>
      </div>
      <Link href="/">
        <button
          className="px-4 z-10 relative  py-2 font-semibold cursor-none  border-2 border-pr2 mt-6 rounded-xl
        transition-all duration-300 ease-in-out hover:scale-105 text-white text-3xl
                   bg-gradient-to-r active:scale-95 flex justify-center items-center gap-2"
        >
          Go to Home <BiSolidSend className="scale-125 mt-2" />
        </button>
      </Link>
    </div>
  );
};

export default UnderConstruction;
