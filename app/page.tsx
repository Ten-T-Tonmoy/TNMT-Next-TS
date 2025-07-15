import React from "react";
import { GridBackgroundDemo } from "./home/Grid";
import { BackgroundBeamsWithCollision } from "../components/ui/TopDropHero";

//pages
import Homepage from "./home/page";
import About from "./about/About";
import NavbarTop from "./Misc/Navbar";
import Education from "./edu/Education";

const page = () => {
  return (
    <div className="h-[100vh] w-[100vw] ">
      <NavbarTop />
      <BackgroundBeamsWithCollision>
        <GridBackgroundDemo />
        <div className=" w-[100vw] h-full overflow-y-scroll">
          <Homepage />
          <About />
          <Education />
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
};

export default page;

//incase i need a redo

// const BGpage = () => {
//   return (
//     <div className="">
//       <BackgroundBeamsWithCollision>
//         <GridBackgroundDemo />
//       </BackgroundBeamsWithCollision>
//     </div>
//   );
// };
