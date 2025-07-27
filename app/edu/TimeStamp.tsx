import React from "react";
import { Timeline } from "../../components/ui/timeline";

import { FaGraduationCap } from "react-icons/fa6";
import { FaSchool } from "react-icons/fa6";
import { RiFilePaper2Fill } from "react-icons/ri";
import { LuRadioTower } from "react-icons/lu";
import { HiBeaker } from "react-icons/hi2";

export function TimeStamp() {
  const data = [
    // school part
    {
      title: "Early 2020",
      content: (
        <div
          className="bg-gradient-to-br from-slate-800 via-slate-900
         to-gray-900 shadow-2xl border-2 w-full border-transparent bg-clip-padding
          relative p-6 mx-auto md:w-[35vw] font-semibold rounded-xl flex flex-col justify-center gap-2"
        >
          <span
            className="absolute inset-x-0 w-full mx-auto top-0
           bg-gradient-to-r from-transparent via-pr1 to-transparent h-[2px]"
          />
          <span
            className="absolute inset-x-0 w-full mx-auto bottom-0 
          bg-gradient-to-r from-transparent via-pr1 to-transparent h-[2px]"
          />

          <p className="mb-4 text-md font-normal text-white items-start justify-start flex gap-4">
            <FaGraduationCap className="text-[1.8rem] text-blue-400" />
            <p>
              Completed Secondary School Certificate - <strong>SSC</strong>
            </p>
          </p>
          <p
            className="mb-2 text-md font-normal text-white 
          items-start justify-start flex gap-4"
          >
            <FaSchool className="text-[1.8rem] text-green-400" />
            <p>
              <strong>Institute:</strong> Shamsul Hoque Khan School and College
            </p>
          </p>
          <p
            className="mb-2 text-md font-normal text-white 
          items-start justify-start flex gap-4"
          >
            <HiBeaker className="text-[1.8rem] text-yellow-400" />
            <p>
              <strong>Stream:</strong> Science
            </p>
          </p>
          <p
            className="mb-4 text-md font-normal gap-4 text-white 
          items-start justify-start flex"
          >
            <RiFilePaper2Fill className="text-[1.6rem] text-purple-400" />
            <p>
              <strong>GPA:</strong> 5.00
            </p>
          </p>
        </div>
      ),
    },
    // college part here
    {
      title: "Late 2022",
      content: (
        <div
          className="bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900
         shadow-2xl border-2 w-full border-transparent bg-clip-padding 
         relative p-6 mx-auto md:w-[35vw] font-semibold rounded-xl flex
          flex-col justify-center gap-4"
        >
          <span
            className="absolute inset-x-0 w-full mx-auto top-0 
          bg-gradient-to-r from-transparent via-pr1 to-transparent h-[2px]"
          />
          <span
            className="absolute inset-x-0 w-full mx-auto bottom-0
           bg-gradient-to-r from-transparent via-pr1 to-transparent h-[2px]"
          />

          <p
            className="mb-4 text-md font-normal text-white items-start 
          justify-start flex gap-4"
          >
            <FaGraduationCap className="text-[1.8rem] text-blue-400" />
            <p>
              Completed Higher Secondary Certificate - <strong>HSC</strong>
            </p>
          </p>
          <p
            className="mb-2 text-md font-normal text-white items-start
           justify-start flex gap-4"
          >
            <FaSchool className="text-[1.8rem] text-green-400" />
            <p>
              <strong>Institute:</strong> Dhaka College
            </p>
          </p>
          <p
            className="mb-2 text-md font-normal text-white items-start
           justify-start flex gap-4"
          >
            <HiBeaker className="text-[1.8rem] text-yellow-400" />
            <p>
              <strong>Stream:</strong> Science
            </p>
          </p>
          <p
            className="mb-4 text-md font-normal gap-4 text-white items-start
           justify-start flex"
          >
            <RiFilePaper2Fill className="text-[1.6rem] text-purple-400" />
            <p>
              <strong>GPA:</strong> 5.00
            </p>
          </p>
        </div>
      ),
    },
    // uni part here
    {
      title: "Expected 2027",
      content: (
        <div
          className="bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 
        shadow-2xl border-2 w-full border-transparent bg-clip-padding p-6 relative mx-auto
         md:w-[35vw] font-semibold rounded-xl flex flex-col justify-center gap-4"
        >
          <span
            className="absolute inset-x-0 w-full mx-auto top-0 bg-gradient-to-r 
          from-transparent via-pr1 to-transparent h-[2px]"
          />
          <span
            className="absolute inset-x-0 w-full mx-auto bottom-0 
          bg-gradient-to-r from-transparent via-pr1 to-transparent h-[2px]"
          />

          <p
            className="mb-4 text-md font-normal text-white items-start justify-start 
          flex gap-4"
          >
            <FaGraduationCap className="text-[1.8rem] text-blue-400" />
            <p>
              Bachelor of Science - <strong>BSc.</strong>
            </p>
          </p>
          <p
            className="mb-2 text-md font-normal text-white items-start
           justify-start flex gap-4"
          >
            <FaSchool className="text-[1.8rem] text-green-400" />
            <p>
              <strong>Institute:</strong> University of Rajshahi
            </p>
          </p>
          <p className="mb-2 text-md font-normal text-white items-start justify-start flex gap-4">
            <LuRadioTower className="text-[2.5rem] sm:text-[2rem] text-cyan-400" />
            <p>
              <strong>Major:</strong> Information and Communication Engineering{" "}
              <strong>(ICE)</strong>
            </p>
          </p>
          <p
            className="mb-4 text-md font-normal gap-4 text-white 
          items-start justify-start flex"
          >
            <RiFilePaper2Fill className="text-[1.6rem] text-purple-400" />
            <p>
              <strong>CGPA:</strong> TBD
            </p>
          </p>
        </div>
      ),
    },
    //un comment from here to get roll back
    // {
    //   title: "Early 2020",
    //   content: (
    //     <div
    //       className="bg-gradient-to-br from-slate-800 via-slate-900
    //      to-gray-900   shadow-2xl border-2 w-full
    //      border-transparent bg-clip-padding relative p-6 mx-auto md:w-[40vw] font-semibold rounded-xl flex flex-col justify-center
    //     gap-4"
    //     >
    //       {" "}
    //       {/* box top and down color a bit */}
    //       <span
    //         className="absolute inset-x-0 w-full mx-auto
    //      top-0 bg-gradient-to-r from-transparent via-pr2
    //      to-transparent h-[2px]"
    //       />
    //       <span
    //         className="absolute inset-x-0 w-full mx-auto
    //      bottom-0 bg-gradient-to-r from-transparent via-pr1
    //      to-transparent h-[2px]"
    //       />
    //       <p className="mb-4  text-md font-normal text-white items-start justify-start  flex gap-4 ">
    //         <FaGraduationCap className="text-[1.8rem]" />
    //         <p>
    //           Completed Secondary School Certificate - <strong> SSC</strong>
    //         </p>
    //       </p>
    //       <p className="mb-2  text-md font-normal text-white items-start justify-start  flex gap-4 ">
    //         <FaSchool className="text-[1.8rem]" />
    //         <p>
    //           <strong> Institute :</strong> Shamsul Hoque Khan School and
    //           College
    //         </p>
    //       </p>
    //       <p className="mb-2  text-md font-normal text-white items-start justify-start  flex gap-4 ">
    //         <HiBeaker className="text-[1.8rem]" />
    //         <p>
    //           <strong> Stream :</strong> Science
    //         </p>
    //       </p>
    //       <p className="mb-4 text-md font-normal gap-4 text-white items-start justify-start  flex  ">
    //         <RiFilePaper2Fill className="text-[1.6rem]" />
    //         <p>
    //           <strong> GPA :</strong> 5.00
    //         </p>
    //       </p>
    //     </div>
    //   ),
    // },
    // {
    //   title: "Late 2022",
    //   content: (
    //     <div
    //       className="bg-gradient-to-br from-slate-800 via-slate-900
    //      to-gray-900   shadow-2xl border-2 w-full
    //      border-transparent bg-clip-padding relative p-6 mx-auto md:w-[40vw] font-semibold rounded-xl flex flex-col justify-center
    //     gap-4"
    //     >
    //       {/* box top and down color a bit */}
    //       <span
    //         className="absolute inset-x-0 w-full mx-auto
    //      top-0 bg-gradient-to-r from-transparent via-pr2
    //      to-transparent h-[2px]"
    //       />
    //       <span
    //         className="absolute inset-x-0 w-full mx-auto
    //      bottom-0 bg-gradient-to-r from-transparent via-pr1
    //      to-transparent h-[2px]"
    //       />
    //       <p className="mb-4  text-md font-normal text-white items-start justify-start  flex gap-4 ">
    //         <FaGraduationCap className="text-[1.8rem]" />
    //         <p>
    //           Completed Higher Secondary Certificate - <strong> HSC</strong>
    //         </p>
    //       </p>
    //       <p className="mb-2  text-md font-normal text-white items-start justify-start  flex gap-4 ">
    //         <FaSchool className="text-[1.8rem]" />
    //         <p>
    //           <strong> Institute :</strong> Dhaka College
    //         </p>
    //       </p>
    //       <p className="mb-2  text-md font-normal text-white items-start justify-start  flex gap-4 ">
    //         <HiBeaker className="text-[1.8rem]" />
    //         <p>
    //           <strong> Stream :</strong> Science
    //         </p>
    //       </p>
    //       <p className="mb-4 text-md font-normal gap-4 text-white items-start justify-start  flex  ">
    //         <RiFilePaper2Fill className="text-[1.6rem]" />
    //         <p>
    //           <strong> GPA :</strong> 5.00
    //         </p>
    //       </p>
    //     </div>
    //   ),
    // },
    // {
    //   title: "Expected 2027",
    //   content: (
    //     <div
    //       className="bg-gradient-to-br from-slate-800 via-slate-900
    //      to-gray-900   shadow-2xl border-2 w-full
    //      border-transparent bg-clip-padding p-6 relative mx-auto md:w-[40vw] font-semibold rounded-xl flex flex-col justify-center
    //     gap-4"
    //     >
    //       {/* box top and down color a bit */}
    //       <span
    //         className="absolute inset-x-0 w-full mx-auto
    //      top-0 bg-gradient-to-r from-transparent via-pr2
    //      to-transparent h-[2px]"
    //       />
    //       <span
    //         className="absolute inset-x-0 w-full mx-auto
    //      bottom-0 bg-gradient-to-r from-transparent via-pr1
    //      to-transparent h-[2px]"
    //       />
    //       <p className="mb-4  text-md font-normal text-white items-start justify-start  flex gap-4 ">
    //         <FaGraduationCap className="text-[1.8rem]" />
    //         <p>
    //           Bachelor of Science - <strong> BSc.</strong>
    //         </p>
    //       </p>
    //       <p className="mb-2  text-md font-normal text-white items-start justify-start  flex gap-4 ">
    //         <FaSchool className="text-[1.8rem]" />
    //         <p>
    //           <strong> Institute :</strong> University of Rajshahi
    //         </p>
    //       </p>
    //       <p className="mb-2  text-md font-normal text-white items-start justify-start  flex gap-4 ">
    //         <LuRadioTower className="text-[2.5rem] sm:text-[2rem]" />
    //         <p>
    //           <strong> Major :</strong> Information and Communication
    //           Engineering{" "}
    //           <strong>
    //             {" "}
    //             {"("}ICE{")"}
    //           </strong>
    //         </p>
    //       </p>
    //       <p className="mb-4 text-md font-normal gap-4 text-white items-start justify-start  flex  ">
    //         <RiFilePaper2Fill className="text-[1.6rem]" />
    //         <p>
    //           <strong> CGPA :</strong> TBD
    //         </p>
    //       </p>
    //     </div>
    //   ),
    // },
  ];
  return (
    <div className="relative w-full  overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
