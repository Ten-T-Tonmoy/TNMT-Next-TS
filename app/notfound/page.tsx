import React from "react";
import GridBackground from "./../home/Grid";
import { BackgroundBeamsWithCollision } from "../../components/ui/TopDropHero";

//pages
import NavbarTop from "../Misc/Navbar";
// import Education from "./edu/Education"; its better not to ship sometimes
// import Outro from "../outro/Outro";
import { Footer } from "../outro/Outro";
import UnderConstruction from "./UnderConstruction";

const page = () => {
  return (
    <div className="h-[100vh] w-[100vw] ">
      <BackgroundBeamsWithCollision>
        <div className=" w-[100vw] h-full overflow-y-scroll overflow-x-hidden bg-neutral-950">
          <GridBackground />
          <NavbarTop />
          {/* <Education /> */}
          <UnderConstruction />
          <Footer />
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
