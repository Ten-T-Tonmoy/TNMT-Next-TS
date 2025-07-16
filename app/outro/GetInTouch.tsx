import React from "react";

const GetInTouch = () => {
  return (
    <div
      className={`relative z-0 rounded-2xl px-5 py-6 md:py-10 gap-4 flex flex-col items-center justify-center hover:scale-105 w-[80vw] md:w-[35vw]
        backdrop-blur-md bg-black/10  border border-white/20 text-white transition-all duration-300 ease-in-out
        shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] 
        
        `}
    >
      <h1 className="text-4xl font-bold">Get in Touch</h1>
      <p className="text-white/80">
        I{"'"}m always interested in hearing about new{" "}
        <span className="bg-gradient-to-r from-pr1 via-sec1 to-pr2 bg-clip-text text-transparent">
          {" "}
          projects and ideas{" "}
        </span>
        . Feel free to drop a message!
      </p>
    </div>
  );
};

export default GetInTouch;
