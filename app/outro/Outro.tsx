import React from "react";
import GradCard from "./GradCard";
import { SocialIcons } from "../about/MeteorCard";
import GetInTouch from "./GetInTouch";
import ContactForm from "./ContactForm";

import { FaHeart } from "react-icons/fa6";

//temp

/**
 * 2 box method
 * copy email +
 */

const Outro = () => {
  return (
    <>
      <div
        className="min-h-[100vh] flex flex-col md:flex-row  gap-8
      bg-neutral-950 justify-center items-center md:items-start py-28 "
      >
        <div
          className="flex gap-8 md:flex-col-reverse h-full flex-col
        md:w-[45%] justify-center items-center"
        >
          <GradCard />
          <GetInTouch />
        </div>
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};

export default Outro;

export const Footer = () => {
  return (
    <div
      className="min-h-[25vh] md:min-h-[12vh]  md:flex-row-reverse  pb-6  flex items-center md:items-start flex-col
    gap-2 justify-start md:justify-center bg-gradient-to-r from-pr1  to-sec2 "
    >
      <h1 className="text-center text-white font-semibold">
        <br />
        &#169; Copyright 2025.
        <br /> Designed and Coded By <FaHeart className="inline mb-1 " />
        <span
          className="bg-gradient-to-r from-pr1
         to-pr2 bg-clip-text text-transparent"
        >
          {" "}
          FH. TONMOY
        </span>
      </h1>
      <div>
        <SocialIcons />
      </div>
    </div>
  );
};
