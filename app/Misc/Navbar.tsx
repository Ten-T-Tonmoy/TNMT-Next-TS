"use client";
import React from "react";
import { FloatingNav } from "../../components/ui/ResNavbar";
import { FaGraduationCap } from "react-icons/fa6";
import { GrAchievement } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { IoIosHome } from "react-icons/io";

export default function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IoIosHome className="h-5 w-5 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <CgProfile className="h-5 w-5 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Education",
      link: "/edu",
      icon: (
        <FaGraduationCap className=" h-5 w-5 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Projects",
      link: "/projects",
      icon: (
        <GrAchievement className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
