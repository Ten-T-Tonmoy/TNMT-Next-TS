import React from "react";
import { Spotlight } from "../../components/ui/Spotlight";

//spotlight + box dots? maybe yea hell

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       * Spotlight and shiiis
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 
        md:-top-20 h-screen "
          fill="white"
        />
        <Spotlight
          className="
        h-[80vh] w-[50vw] top-10 left-full
        "
          fill="purple"
        />
        <Spotlight
          className="
        left-80 top-28 h-[80vh] w-[50vw]
        "
          fill="blue"
        />
      </div>

      {/**
       * Ui grid dot background here
       */}
      <div
        className="h-screen  w-full dark:bg-black-100 
       bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute flex
         items-center left-0 top-0  justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none
         inset-0 flex items-center justify-center
          dark:bg-black bg-white 
          [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        ></div>
      </div>
      <div className="flex justify-center">
        <div className="max-w-[89vw]">
          <p
            className="text-blue-100 max-w-80 text-center
          uppercase text-xs relative  tracking-widest "
          >
            might be some shii subtext here
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
