import React from "react";
import Image from "next/image";
import { FaCode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";

const ProjectCards = () => {
  return (
    <div className="min-h-screen py-20">
      <Cards></Cards>
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
        className="relative flex h-full flex-col items-start  w-[88%] mx-auto
            justify-end overflow-hidden rounded-xl  border border-gray-800
             bg-gradient-to-br from-slate-800 via-slate-900
             to-gray-900  
             border-transparent bg-clip-padding    shadow-xl"
      >
        {/* photo ---->  title -----> tags ----->  divIconLinks*/}
        <div className="w-full flex flex-col justify-center items-center gap-1">
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

          {/* tags  */}
          <div className="flex gap-2 mt-2 w-full flex-wrap justify-center items-center">
            {projects[0].tags.map((el, idx) => (
              <div
                className="
              bg-gray-200/10 p-1 px-3 rounded-3xl border border-white/40

              "
                key={idx}
              >
                {el}
              </div>
            ))}
          </div>
          <h1
            className="relative p-2  mdt:max-w-[50%] z-15  text-2xl md:text-3xl 
            md:text-end font-bold text-white text-center "
          >
            {projects[0].title}
          </h1>
          <p className=" text-normal text-justify px-4 text-slate-500">
            {projects[0].description}
          </p>
          {/* link buttons */}
          <div className="w-full flex justify-center items-center gap-4 my-3 ">
            <FaCode
              className="text-[3rem] bg-white/60 hover:bg-white  hover:scale-105 active:scale-95 transition-all duration-300
            ease-in-out cursor-pointer text-gray-800 rounded-full p-2"
            />
            <FaPlayCircle
              className="text-[3rem] hover:scale-105 active:scale-95 transition-all duration-300
            ease-in-out cursor-pointer rounded-full text-white/60 hover:text-white"
            />
            <FaGithub
              className="text-[3rem] hover:scale-105 active:scale-95 transition-all duration-300
            ease-in-out cursor-pointer rounded-full text-white/60 hover:text-white "
            />
          </div>

          {/* <button
            className="rounded-lg border mx-auto cursor-none
        hover:text-gray-800 hover:bg-white border-gray-500 px-4 py-1 text-gray-300"
          >
            Documantation {">>>"}
          </button> */}
        </div>
      </div>
    </>
  );
};
