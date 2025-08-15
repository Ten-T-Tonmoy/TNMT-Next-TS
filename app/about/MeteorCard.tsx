"use client";

import React from "react";
// import { Meteors } from "../../components/ui/meteors";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { redirect } from "next/navigation";
import { motion } from "motion/react";

// icons
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoMdArrowRoundBack } from "react-icons/io";
// import { BackgroundGradient } from "@/components/ui/bgGradient";
import { BackgroundBeams } from "@/components/ui/BeamsBg";

/**
 * photo
 * about me -typewriter
 * last e social icons
 */

export function MeteorsCard() {
  return (
    <>
      {/* <BackgroundGradient className="relative w-full max-w-xl ">
       <div
        className="absolute inset-0 h-full w-full 
        scale-[.96] transform 
        bg-gradient-to-r from-[#fccf27] to-[#ec2422] blur-xl"
        /> 
        
        </BackgroundGradient>*/}
      {/* main Card   font goes here!!!!*/}
      <div
        className="relative flex min-h-screen  flex-col items-start 
        justify-center overflow-y-scroll overflow-x-hidden   border border-gray-800
         p-6 py-8 md:py-10  text-sm hidden-scrollbar bg-black-100
           z-10 shadow-xl"
      >
        <IoMdArrowRoundBack
          onClick={() => redirect("/")}
          className="text-white text-[2.5rem] absolute top-3 left-3 hover:scale-110
          transition-all ease-linear duration-200
        rounded-full border-white/20 border p-2 hover:bg-white/20 z-50"
        />
        <BackgroundBeams />
        {/* top photo section  flex-row set at md if u wanna rollback*/}
        <div className="w-full z-10 relative flex flex-col justify-center items-center ">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.2, 1], opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="inline-block"
          >
            <Image
              className="rounded-full border-[3px]"
              src="/photos/Me.png"
              alt="Description"
              width={250}
              height={250}
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: [30, -20, 0] }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative px-2 py-4  mdt:max-w-[50%] z-15  text-2xl md:text-2xl 
           font-bold text-white text-center "
          >
            Hi! I{"'"}m Farhan Hassan Tonmoy <br />
          </motion.h1>

          {/* -----------typewriter--------- */}
          <p
            className=" transition-all duration-200 ease-in-out 
            bg-clip-text text-transparent bg-gradient-to-l 
         from-pr1 via-sec1  to-sec2 text-lg  text-center font-semibold
            "
          >
            <Typewriter
              words={[
                "FullStack Developer",
                "MERN  Developer",
                "PERN  Developer",
                "Undergrad Student",
                "Fluent with TS,JS & C++",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              cursorBlinking={false}
              cursorColor="white"
              typeSpeed={70}
              delaySpeed={1000}
            />
          </p>

          {/* -------------------paragraph---------------------- */}
          <div
            className=" my-4 text-base  md:max-w-[35%] text-center
          px-2 md:px-6 text-slate-500"
          >
            {" "}
            <span
              className=" h-3 w-3 inline-flex  mr-4  md:mr-4 rounded-full border bg-gradient-to-l
            from-pr1 via-sec2 to-sec1"
            ></span>
            Fullstack Developer based on Dhaka , Bangladesh . 1.5 years deep
            into web development. Fluent in MERN & PERN stacks. Also pursuing
            .NET Framework , unity , Competitive programming. Low-level systems
            fascinate me.
          </div>
        </div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeIn" }}
          onClick={() => redirect("/")}
          className="rounded-lg border mx-auto cursor-none border-gray-500
        hover:bg-gray-200 hover:text-gray-800 transition-all
        duration-300 ease-linear  px-4 py-1 text-gray-300 relative z-10"
        >
          Enter Full site {">>>"}
        </motion.button>
        <SocialIcons />

        {/*meteor animation effect  */}
      </div>
    </>
  );
}

export const SocialIcons = () => {
  return (
    <div
      className="flex w-full justify-center text-white  gap-8 md:gap-12
    relative z-10 items-center px-4 pt-4"
    >
      <motion.a
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "easeIn" }}
        href="https://www.github.com/Ten-T-Tonmoy"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="text-4xl hover:text-blue-400" />
      </motion.a>
      <motion.a
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeIn" }}
        href="https://www.linkedin.com/in/farhan-hassan-tonmoy-2399bb2ba/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="text-4xl hover:text-sky-400" />
      </motion.a>
      <motion.a
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeIn" }}
        href="https://discord.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaDiscord className="text-4xl hover:text-blue-600" />
      </motion.a>
      <motion.a
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "easeIn" }}
        href="https://www.instagram.com/sixteensixtysuper/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillInstagram className="text-4xl hover:text-yellow-500" />
      </motion.a>
    </div>
  );
};
