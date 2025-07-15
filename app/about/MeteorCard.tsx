import React from "react";
import { Meteors } from "../../components/ui/meteors";
import Image from "next/image";

/**
 * photo
 * about me -typewriter
 * last e social icons
 */

export function MeteorsCard() {
  return (
    <div className="relative w-full max-w-xl my-10">
      <div
        className="absolute inset-0 h-full w-full 
        scale-[.96] transform   bg-red-500 
        bg-gradient-to-r from-blue-500 to-teal-500 blur-xl"
      />

      {/* main Card */}
      <div
        className="relative flex h-full flex-col items-start 
        justify-end overflow-hidden rounded-2xl  border border-gray-800
         bg-gradient-to-br from-slate-800 via-slate-900
         to-gray-900  p-6 font-mono text-sm 
         border-transparent bg-clip-padding  px-4 py-8 shadow-xl"
      >
        {/* top photo section */}
        <div className="w-full flex flex-col md:flex-row">
            <div></div>
          <Image
            className="rounded-full border-[3px] mx-auto "
            src="/photos/Me.png"
            alt="Description"
            width={350}
            height={350}
          />
        </div>
        <div className="mb-4 flex h-5 w-5 items-center justify-center rounded-full border border-gray-500"></div>

        <h1 className="relative z-15 mb-4 text-xl font-bold text-white">
          Meteors because they&apos;re cool
        </h1>

        <p className="relative z-15 mb-4 text-base font-normal text-slate-500">
          I don&apos;t know what to write so I&apos;ll just paste something cool
          here. One more sentence because lorem ipsum is just unacceptable.
          Won&apos;t ChatGPT the shit out of this.
        </p>

        <button className="rounded-lg border border-gray-500 px-4 py-1 text-gray-300">
          Explore
        </button>

        {/* Meaty part - Meteor effect */}
        <Meteors number={20} />
      </div>
    </div>
  );
}
