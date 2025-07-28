"use client";
import React from "react";
import { FloatingNav } from "../../components/ui/ResNavbar";
import { IconHome, IconUser } from "@tabler/icons-react";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa6";

export default function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Education",
      link: "/education",
      icon: (
        <FaGraduationCap className="scale-125 h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Projects",
      link: "/projects",
      icon: (
        <IoNewspaperOutline className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
