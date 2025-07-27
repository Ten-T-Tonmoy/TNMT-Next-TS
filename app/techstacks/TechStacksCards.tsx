"use client";
import StackIcon from "tech-stack-icons";

import { InfiniteMovingCards } from "@/components/ui/infinteMovingCards";
import React from "react";

export function TechStacksCards() {
  return (
    <div
      className=" rounded-md  flex flex-col antialiased
    items-center justify-center relative overflow-hidden"
    >
      <InfiniteMovingCards
        items={frontendStacks}
        direction="right"
        speed="slow"
      />
      <InfiniteMovingCards
        items={backendStacks}
        direction="left"
        speed="slow"
      />
      <InfiniteMovingCards items={lastRow} direction="right" speed="slow" />
    </div>
  );
}

const frontendStacks = [
  {
    title: "React",
    // icon: (
    //   <StackIcon
    //     className={`relative z-20 rounded-[10px]  flex items-center justify-center w-20 p-2
    //     backdrop-blur-md bg-white/10 border border-white/20 text-white

    //     `}
    //     name="react"
    //   />
    // ),
    tech: "react",
  },
  { title: "HTML5", tech: "html5" },
  { title: "Tailwind", tech: "tailwindcss" },
  { title: "BootStrap", tech: "bootstrap5" },
  { title: "ShadcnUI", tech: "shadcnui" },
  { title: "JavaScript", tech: "js" },
  { title: "React", tech: "react" },
  { title: "Next.js", tech: "nextjs2" },
  { title: "Redux", tech: "redux" },
  { title: "TypeScript", tech: "typescript" },
  { title: "Framer", tech: "framer" },
  { title: "CSS3", tech: "css3" },
  { title: "RadixUI", tech: "radixui" },
  { title: "Figma", tech: "figma" },
  { title: "ChakraUI", tech: "chakraui" },
  { title: "Webpack", tech: "webpack" },
];

const backendStacks = [
  { title: "NodeJs", tech: "nodejs" },
  { title: "Express", tech: "expressjs" },
  { title: "Prisma", tech: "prisma" },
  { title: "C++", tech: "c++" },

  { title: "FireBase", tech: "firebase" },
  { title: "PostgreSql", tech: "postgresql" },

  { title: "MongoDB", tech: "mongodb" },
  { title: "NPM", tech: "npm2" },
  { title: "PUG", tech: "pugjs" },
  { title: "Vercel", tech: "vercel" },
  { title: "Zod", tech: "zod" },
  { title: "EsLint", tech: "eslint" },
  { title: "Mongoose", tech: "mongoose" },
  { title: "C++", tech: "c#" },
];

const lastRow = [
  { title: "Mongoose", tech: "mongoose" },
  { title: "C++", tech: "c#" },
  { title: "Express", tech: "expressjs" },
  { title: "Prisma", tech: "prisma" },
  { title: "Jest", tech: "jest" },
  { title: "Git", tech: "git" },

  { title: "Redux", tech: "redux" },
  { title: "TypeScript", tech: "typescript" },
  { title: "Netlify", tech: "netlify2" },
  { title: "MySql", tech: "mysql" },
  { title: "Java", tech: "java" },
];
