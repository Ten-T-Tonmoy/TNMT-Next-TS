import React from "react";
import { Meteors } from "../../components/ui/meteors";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

// icons
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

/**
 * photo
 * about me -typewriter
 * last e social icons
 */

export function MeteorsCard() {
  return (
    <div className="relative w-full max-w-xl my-10">
      <div
        className="absolute inset-0 h-full w-full 
        scale-[.96] transform   bg-red-500 
        bg-gradient-to-r from-blue-500 to-teal-500 blur-xl"
      />

      {/* main Card   font goes here!!!!*/}
      <div
        className="relative flex h-full flex-col items-start 
        justify-end overflow-hidden rounded-2xl  border border-gray-800
         bg-gradient-to-br from-slate-800 via-slate-900
         to-gray-900  p-6 py-4 md:py-8 font-mono text-sm 
         border-transparent bg-clip-padding  px-4  shadow-xl"
      >
        {/* top photo section */}
        <div className="w-full flex flex-col justify-center items-center md:flex-row">
          <Image
            className="rounded-full border-[3px]  "
            src="/photos/Me.png"
            alt="Description"
            width={350}
            height={350}
          />
          <h1
            className="relative px-2 py-4  md:max-w-[50%] z-15 mb-4 text-xl md:text-3xl 
          md:text-end font-bold text-white "
          >
            Hi.I{"'"}m Farhan Hassan Tonmoy <br />
            <p
              className=" transition-all duration-200 ease-in-out 
            bg-clip-text text-transparent bg-gradient-to-l 
         from-pr1 via-sec1  to-sec2 md:min-h-28 text-center font-extrabold
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
                typeSpeed={70}
                delaySpeed={1000}
              />
            </p>
          </h1>
        </div>

        <p className="relative z-15 my-4 text-base text-justify px-2 md:px-6 text-slate-500">
          {" "}
          <div
            className=" h-3 w-3 inline-flex   mr-1 md:mr-4 rounded-full border bg-gradient-to-l
        from-pr1 via-sec2 to-sec1"
          ></div>
          1 years deep into web development. Fluent in MERN & PERN stacks. Also
          pursuing SpringBoot , Competitive programming. Low-level systems
          fascinate me.
        </p>

        <button className="rounded-lg border mx-auto cursor-none border-gray-500 px-4 py-1 text-gray-300">
          Social Links {">>>"}
        </button>
        <SocialIcons />

        {/*meteor animation effect  */}
        <Meteors number={25} />
      </div>
    </div>
  );
}

export const SocialIcons = () => {
  return (
    <div className="flex w-full justify-center gap-8 md:gap-12 items-center px-4 pt-4">
      <a
        href="https://www.github.com/Ten-T-Tonmoy"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="text-4xl hover:text-blue-400" />
      </a>
      <a
        href="https://www.linkedin.com/in/farhan-hassan-tonmoy-2399bb2ba/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="text-4xl hover:text-sky-400" />
      </a>
      <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
        <FaDiscord className="text-4xl hover:text-blue-600" />
      </a>
      <a
        href="https://www.instagram.com/sixteensixtysuper/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillInstagram className="text-4xl hover:text-yellow-500" />
      </a>
    </div>
  );
};
