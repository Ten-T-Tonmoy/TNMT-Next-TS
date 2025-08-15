import React from "react";
import GridBackground from "./home/Grid";
import { BackgroundBeamsWithCollision } from "../components/ui/TopDropHero";

//pages
import Homepage from "./home/page";
import About from "./about/About";
import NavbarTop from "./Misc/Navbar";
// import Education from "./edu/Education"; its better not to ship sometimes
import Services from "./techstacks/Services";
import Outro from "./outro/Outro";
import { TechStacksCards } from "./techstacks/TechStacksCards";

const page = () => {
  return (
    <div className="h-[100vh] w-[100vw] ">
      <BackgroundBeamsWithCollision>
        <div className=" w-[100vw] h-full overflow-y-scroll  overflow-x-hidden">
          <GridBackground />
          <NavbarTop />
          <Homepage />
          <About />
          <Services />
          <TechStacksCards />
          {/* <Education /> */}
          <Outro />
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
