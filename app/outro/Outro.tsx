import React from "react";
import GradCard from "./GradCard";
import GetInTouch from "./GetInTouch";
import ContactForm from "./ContactForm";

/**
 * 2 box method
 * copy email +
 */

const Outro = () => {
  return (
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
  );
};

export default Outro;
