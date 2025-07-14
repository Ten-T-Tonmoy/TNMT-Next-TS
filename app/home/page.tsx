import React from "react";
import { BackgroundBeamsWithCollisionDemo } from "./DropBeamsHero";
import { GridBackgroundDemo } from "./Grid";

const page = () => {
  return (
    <div className="relative ">
      <BackgroundBeamsWithCollisionDemo />
      <GridBackgroundDemo />
    </div>
  );
};

export default page;
