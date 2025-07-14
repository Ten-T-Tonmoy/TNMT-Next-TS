import React from "react";
import { BackgroundBeamsWithCollision } from "../../components/ui/TopDropHero";

//actual component

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision>
      <h2
        className="text-5xl relative z-20 md:text-4xl lg:text-7xl 
      font-bold text-center text-black dark:text-white font-sans 
      tracking-tight flex flex-col sm:flex-row justify-center items-center gap-4"
      >
        <p className="px-2">
          Hi there{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-sec2 to-pr2 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            !
          </span>{" "}
          It{`'`}s a me
        </p>
        {/* gradient text */}
        <div
          className="relative mx-auto inline-block w-max
         [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]"
        >
          <div
            className="absolute left-0 top-[1px] bg-clip-text 
          bg-no-repeat text-transparent bg-gradient-to-r py-4
           from-pr2 via-sec2 to-pr1 [text-shadow:0_0_rgba(0,0,0,0.1)]"
          >
            <span className="">TONMOY</span>
          </div>
          <div
            className="relative bg-clip-text text-transparent bg-no-repeat
           bg-gradient-to-r from-sec1 via-pr2 to-pr1 py-4"
          >
            <span className="">TONMOY</span>
          </div>
        </div>
      </h2>
    </BackgroundBeamsWithCollision>
  );
}
