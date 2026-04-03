import React from "react";
import GridBackground from "../home/Grid";
import { BackgroundBeamsWithCollision } from "../../components/ui/TopDropHero";

//pages
import NavbarTop from "../Misc/Navbar";
import { Footer } from "../outro/Outro";
import NotFoundPage from "../notfound/page";

const page = () => {
  return (
    <div className="h-[100vh] w-[100vw] ">
      <NotFoundPage />
      {/* <BackgroundBeamsWithCollision>
        <div className=" w-[100vw] h-full overflow-y-scroll overflow-x-hidden bg-neutral-950">
          <GridBackground />
          <NavbarTop />

          <Footer />
        </div>
      </BackgroundBeamsWithCollision> */}
    </div>
  );
};

export default page;
