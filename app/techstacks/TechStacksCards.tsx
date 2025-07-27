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
        items={frontendStacks}
        direction="left"
        speed="slow"
      />
      <InfiniteMovingCards
        items={frontendStacks}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const frontendStacks = [
  {
    icon: (
      <StackIcon
        className={`relative z-10 rounded-[10px]  flex items-center justify-center w-20 p-2
        backdrop-blur-md bg-white/10 border border-white/20 text-white
       
        `}
        name="react"
      />
    ),
  },
  {
    icon: (
      <StackIcon
        className={`relative z-10 rounded-[10px]  flex items-center justify-center w-20 p-2
        backdrop-blur-md bg-white/10 border border-white/20 text-white
       
        `}
        name="angular"
      />
    ),
  },
  {
    icon: (
      <StackIcon
        className={`relative z-10 rounded-[10px]  flex items-center justify-center w-20 p-2
        backdrop-blur-md bg-white/10 border border-white/20 text-white
       
        `}
        name="angular"
      />
    ),
  },
  {
    icon: (
      <StackIcon
        className={`relative z-10 rounded-[10px]  flex items-center justify-center w-20 p-2
        backdrop-blur-md bg-white/10 border border-white/20 text-white
       
        `}
        name="angular"
      />
    ),
  },
  {
    icon: (
      <StackIcon
        className={`relative z-10 rounded-[10px]  flex items-center justify-center w-20 p-2
        backdrop-blur-md bg-white/10 border border-white/20 text-white
       
        `}
        name="angular"
      />
    ),
  },
];
