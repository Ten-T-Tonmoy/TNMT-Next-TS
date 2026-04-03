import React from "react";
import Image from "next/image";
import { FaCode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";

const ProjectCards = () => {
  return (
    <>
      <h1
        className="text-xl text-white mt-20 mb-5 py-2 sm:w-[80%] mx-auto
       text-center border bg-white/20 border-white/20 font-bold"
      >
        Featured Projects
      </h1>
      <div
        className="min-h-screen grid md:grid-cols-2 gap-6 
    sm:w-[80%] mx-auto pb-20"
      >
        <Cards />
      </div>
    </>
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
    livePreview: "https://easybankplc.netlify.app/",
  },
  {
    title: "XCrown",
    tags: [
      "FullStack",
      "Express.js",
      "MongoDB",
      "React.js",
      "Tailwind CSS",
      "Full Responsive",
    ],
    imageUrl: "/projects/xcrown.png",
    description: `XCrown is a full-stack social media
     web application inspired by Twitter/X, built using 
     the MERN stack. It features a minimalistic UI, user posts,
      interactions, and a responsive design, with a focus on
      backend architecture,
     REST API design, and full-stack integration.`,
    githubRepo: "https://github.com/Ten-T-Tonmoy/EasyBank-react",
    livePreview: "https://xcrown.vercel.app/",
  },
  {
    title: "ChatriX",
    tags: [
      "FullStack",
      "Express.js",
      "MongoDB",
      "React.js",
      "Tailwind CSS",
      "Socket.io",
    ],
    imageUrl: "/projects/chatrix.png",
    description: `Chatrix is a full-stack real-time chat 
    application built with the MERN stack and WebSockets.
     Users can register, log in, and chat instantly in private 
     or group conversations. The project focuses on authentication,
     real-time communication, and responsive UI design.`,
    githubRepo: "https://github.com/Ten-T-Tonmoy/EasyBank-react",
    livePreview: "xcrown.vercel.app/",
  },
  {
    title: "VG Library",
    tags: ["Frontend", "React.js", "Tailwind CSS", "Full Responsive"],
    imageUrl: "/projects/vglibrary.png",
    description: `A responsive video game discovery web app built
     with React and Tailwind CSS that uses a public API to display
      trending games, genres, platforms, and detailed game information. This project was developed as a capstone project, focusing on component-based architecture,
     API integration, and responsive UI design.`,
    githubRepo: "https://github.com/Ten-T-Tonmoy/EasyBank-react",
    livePreview: "https://vg-library.vercel.app/",
  },
  {
    title: "PokeDictionary",
    tags: ["Frontend", "React.js", "Tailwind CSS", "Full Responsive"],
    imageUrl: "/projects/pokedex.png",
    description: `Built a frontend-only Pokedex using 
    React and the PokeAPI, featuring Pokémon search, filtering,
     and a fully responsive interface. Focused on component 
    architecture, API integration, and clean UI design.`,
    githubRepo: "https://github.com/Ten-T-Tonmoy/EasyBank-react",
    livePreview: "https://pokedictionary.vercel.app/home",
  },
];

const Cards = () => {
  return (
    <>
      {/* main Card   font goes here!!!!*/}
      {projects.map((proj, idx) => (
        <div
          key={idx}
          className="font-mono relative flex h-fit justify-self-center  flex-col items-start  w-[90%] mx-auto
              overflow-hidden rounded-tr-xl  border border-gray-100/30
             bg-gradient-to-br from-slate-800 via-slate-900
             to-gray-900   bg-clip-padding  rounded-bl-2xl  shadow-xl"
        >
          <div className="w-full flex flex-row justify-center items-center gap-1">
            {/* photo ---->  title -----> tags ----->  divIconLinks*/}
            <div className="w-full  border-r-[2px] border-white/20 overflow-hidden">
              <Image
                className="   w-full h-fit transition-transform
            duration-300 hover:scale-110 "
                src={proj.imageUrl}
                alt="Description"
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            {/* -------------------------right side--------------------- */}
            <div className="flex flex-col w-[80%]">
              <h1
                className="relative p-2 mx-auto  md:max-w-[50%] z-15  text-xl md:text-3xl 
             font-bold text-white md:text-center text-center "
              >
                {proj.title}
              </h1>

              {/* link buttons */}
              <div className="w-full flex justify-center items-center gap-4 my-3 ">
                <FaCode
                  className="text-[2.5rem] bg-white/60 hover:bg-white  hover:scale-105 active:scale-95 transition-all duration-300
            ease-in-out cursor-pointer text-gray-800 rounded-full p-2"
                />
                <a
                  href={`${proj.livePreview}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaPlayCircle
                    className="text-[2.5rem] hover:scale-105 active:scale-95 transition-all duration-300
                  ease-in-out cursor-pointer rounded-full text-white/60 hover:text-white"
                  />
                </a>
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
              {proj.description}
            </div>
            {/* tags  */}
            <div
              className="flex gap-2 p-2 w-full flex-wrap 
           items-center"
            >
              {proj.tags.map((el, idx) => (
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
      ))}
    </>
  );
};
