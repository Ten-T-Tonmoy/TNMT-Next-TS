import React from "react";
import Hero from "./Hero";
import { BackgroundBeamsWithCollisionDemo } from "./Bgbeams";

const page = () => {
  return (
    <div>
      <main
        className="relative bg-black-100 flex 
      justify-center items-center flex-col overflow-hidden mx-auto sm:px-5  "
      >
        <div className="max-w-7xl w-full">
          <Hero />
        </div>
      </main>
      <BackgroundBeamsWithCollisionDemo />
    </div>
  );
};

export default page;
