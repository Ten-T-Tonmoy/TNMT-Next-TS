import React from "react";

const Homepage = () => {
  return (
    <>
      <Hero />
    </>
  );
};

export default Homepage;

export const Hero = () => {
  return (
    <div className="min-h-[100vh] w-full flex flex-col justify-center items-center  ">
      <h2
        className="text-4xl relative z-20 md:text-4xl lg:text-7xl 
      font-bold text-center text-black dark:text-white font-sans 
      tracking-tight flex flex-col sm:flex-row justify-center items-center sm:gap-4"
      >
        <p className="px-2">
          Hi there{" "}
          <span
            className="bg-clip-text text-transparent bg-gradient-to-b
         from-pr1 to-sec2"
          >
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
          bg-no-repeat text-transparent bg-gradient-to-r py-2
           from-pr2 via-sec2 to-pr1 [text-shadow:0_0_rgba(0,0,0,0.1)]"
          >
            <span className="">TONMOY</span>
          </div>
          <div
            className="relative bg-clip-text text-transparent bg-no-repeat
           bg-gradient-to-r from-sec1 via-pr2 to-pr1 py-2"
          >
            <span className="">TONMOY</span>
          </div>
        </div>
      </h2>
      <p className="text-xl sm:text-2xl md:text-3xl font-poppin text-center font-normal">
        Fullstack{" "}
        <span
          className="bg-clip-text text-transparent bg-gradient-to-r
         from-pr1 via-pr2 font-bold to-sec2 "
        >
          PERN
        </span>{" "}
        Developer
      </p>
    </div>
  );
};
