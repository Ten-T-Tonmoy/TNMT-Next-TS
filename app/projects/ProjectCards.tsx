import React from "react";
import Image from "next/image";
import { FaCode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";

const ProjectCards = () => {
  return (
    <div
      className="min-h-screen grid md:grid-cols-2 gap-4 
    sm:w-[80%] mx-auto py-20"
    >
      <Cards />
      <Cards />
    </div>
  );
};

export default ProjectCards;

interface Project {
  title: string;
  tags: string[];
  imageUrl: string;
  description: string;
  githubRepo: string;
  livePreview?: string;
}
const projects: Project[] = [
  {
    title: "EasyBank Landing Page",
    tags: ["Frontend", "React.js", "Tailwind CSS", "Full Responsive"],
    imageUrl: "/projects/easybank.png",
    description: `A modern, responsive landing page built with React 18 and Tailwind CSS.
    It is a challange given by frontend mentor. 
Built as a frontend-only project to replicate a real-world banking product's marketing page.`,
    githubRepo: "https://github.com/Ten-T-Tonmoy/EasyBank-react",
    livePreview: "easybankplc.netlify.app/",
  },
];

const Cards = () => {
  return (
    <>
      {/* main Card   font goes here!!!!*/}
      <div
        className="font-mono relative flex h-fit justify-self-center  flex-col items-start  w-[90%] mx-auto
            justify-end overflow-hidden rounded-tr-xl  border border-gray-100/30
             bg-gradient-to-br from-slate-800 via-slate-900
             to-gray-900   bg-clip-padding  rounded-bl-2xl  shadow-xl"
      >
        <div className="w-full flex flex-row justify-center items-center gap-1">
          {/* photo ---->  title -----> tags ----->  divIconLinks*/}
          <div className="w-full overflow-hidden">
            <Image
              className=" border-[3px]   w-full h-fit transition-transform
            duration-300 hover:scale-110 "
              src={projects[0].imageUrl}
              alt="Description"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          {/* -------------------------right side--------------------- */}
          <div className="flex flex-col w-[80%]">
            <h1
              className="relative p-2  md:max-w-[50%] z-15  text-xl md:text-3xl 
             font-bold text-white md:text-center text-center "
            >
              {projects[0].title}
            </h1>

            {/* link buttons */}
            <div className="w-full flex justify-center items-center gap-4 my-3 ">
              <FaCode
                className="text-[2.5rem] bg-white/60 hover:bg-white  hover:scale-105 active:scale-95 transition-all duration-300
            ease-in-out cursor-pointer text-gray-800 rounded-full p-2"
              />
              <FaPlayCircle
                className="text-[2.5rem] hover:scale-105 active:scale-95 transition-all duration-300
              ease-in-out cursor-pointer rounded-full text-white/60 hover:text-white"
              />
              <FaGithub
                className="text-[2.5rem] hover:scale-105 active:scale-95 transition-all duration-300
              ease-in-out cursor-pointer rounded-full text-white/60 hover:text-white "
              />
            </div>
          </div>

          {/* <button
            className="rounded-lg border mx-auto cursor-none
        hover:text-gray-800 hover:bg-white border-gray-500 px-4 py-1 text-gray-300"
          >
            Documantation {">>>"}
          </button> */}
        </div>

        {/* ------------------lower part---------------------- */}

        <div>
          {/* ------------desc------------------- */}
          <div
            className=" p-3 bg-black border-y-2 text-white/70
          border-b border-white/20 "
          >
            {projects[0].description}
          </div>
          {/* tags  */}
          <div
            className="flex gap-2 p-2 w-full flex-wrap 
           items-center"
          >
            {projects[0].tags.map((el, idx) => (
              <div
                className="text-blue-700
              bg-black p-1 px-3 border border-white/20

              "
                key={idx}
              >
                {el}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
