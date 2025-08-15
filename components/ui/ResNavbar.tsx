"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { MdOutlineFileDownload } from "react-icons/md";
import Image from "next/image";

import DarkModeToggle from "../Necessary/DarkModeToggle";

//ps z-index matters cause pointer at z-50
export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "flex w-[90%] gap-2 md:gap-8 md:w-[80%] fixed top-2 inset-x-0 mx-auto z-[40] px-2  py-2 items-center justify-between ",
        "border border-transparent dark:border-white/[0.2] rounded-full",
        "backdrop-blur-md bg-white/10 border border-white/20 text-white  ",
        className
      )}
    >
      <Image
        className="rounded-full border-[2px] border-white/20 "
        src="/photos/Me.png"
        alt="Description"
        width={40}
        height={40}
      />
      {/* main nav items  */}
      <div className="flex items-center gap-2 ">
        {navItems.map((navItem, idx) => (
          <a
            key={`link-${idx}`}
            href={navItem.link}
            className={cn(
              "relative flex items-center border border-gray-200/20 md:px-2 hover:bg-white/40 p-2 rounded-full   space-x-1 text-neutral-50 dark:text-neutral-50",
              "hover:text-neutral-500 hover:scale-150 md:hover:scale-125 transition-all duration-200 ease-in-out dark:hover:text-neutral-300"
            )}
          >
            <span className="block scale-125 text-white">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </a>
        ))}

        <button
          className="sm:border text-sm font-medium relative bg-gradient-to-r
        from-pr1 via-pr2 to-sec1 transition-all duration-200
        ease-in-out active:scale-95 hover:scale-105 
       border-neutral-200 dark:border-white/[0.2] 
        text-white px-3 py-2 rounded-full"
        >
          <span>
            <p className="sm:inline hidden"> Resume </p>
            <MdOutlineFileDownload className="scale-125 inline sm:ml-1 mb-1 sm:mb-0" />
          </span>
          {/**top color a bit  */}
          <span
            className="absolute hidden sm:flex inset-x-0 w-[70%] mx-auto
          top-[0px] bg-gradient-to-r from-transparent via-white
          to-transparent h-[1px]"
          />
        </button>
      </div>
      {/* ends here main nav elements */}
      <DarkModeToggle />
    </motion.div>
  );
};
