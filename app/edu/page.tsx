import React from "react";
import GridBackground from "../home/Grid";
import { BackgroundBeamsWithCollision } from "../../components/ui/TopDropHero";
import { TimeStamp } from "./TimeStamp";
//pages
import NavbarTop from "../Misc/Navbar";
// import Education from "./edu/Education"; its better not to ship sometimes
// import Outro from "../outro/Outro";
import { Footer } from "../outro/Outro";

const eduPage = () => {
  return (
    <div className="h-[100vh] w-[100vw] ">
      <BackgroundBeamsWithCollision>
        <div
          className=" w-[100vw] h-full overflow-y-scroll overflow-x-hidden
         dark:bg-neutral-950"
        >
          <GridBackground />
          <NavbarTop />
          {/* -------------main contents------------ */}
          <div className="mt-20">
            <TimeStamp />
          </div>

          <Footer />
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
};

export default eduPage;
