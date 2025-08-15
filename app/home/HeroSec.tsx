import { BiSolidSend } from "react-icons/bi";
import { ContainerTextFlip } from "@/components/ui/text-flip";

//icons emnei
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaCode } from "react-icons/fa6";
import { GoMail } from "react-icons/go";

const Hero = () => {
  return (
    <div className="min-h-[100vh] dark:bg-black-100 w-full flex flex-col  justify-center items-center  ">
      <h2
        className="text-5xl relative z-20  lg:text-6xl 
        
      font-bold text-center text-white  
      flex flex-col sm:flex-row justify-center items-center sm:gap-4"
      >
        <p className="px-2">
          Hi there <span className="text-pr1">!</span> It{`'`}s
        </p>
        {/* gradient text */}
        <div
          className="relative bg-clip-text text-transparent bg-no-repeat
          bg-gradient-to-r dark:from-pr1 dark:via-pr2 dark:to-sec1 from-sec1 via-sec2
          to-pr2 py-2"
        >
          TONMOY
        </div>
      </h2>
      <p
        className="text-md text-neutral-200 font-[400] mt-2 max-w-[80%] md:max-w-[43%]
        text-center "
      >
        {" I'm "}a sophomore IT undergrad and a{" "}
        <span className="dark:text-pr2 text-sec1 font-semibold">
          Backend Developer
        </span>{" "}
        based in Bangladesh, with a knack for turning bold ideas into real
        products and{" "}
        <span className="dark:text-pr2 text-sec1 font-semibold">
          System Design
        </span>{" "}
        . Fluent in{" "}
        <span className="dark:text-pr2 text-sec1 font-semibold">
          PERN & MERN
        </span>{" "}
        stacks, and also diving into the{" "}
        <span className="dark:text-pr2 text-slate-50 font-semibold">
          .NET Framework
        </span>
        .
      </p>
      <ContainerTextFlip
        words={[
          "FullStack Web Developer",
          "Typescript All The Way",
          "System Design Enthusiast",
          "Sophomere IT Undergrad",
        ]}
      />

      {/** button for contact? cursor-none */}
      <div className="flex justify-center items-center gap-4 ">
        <button
          className="border  text-sm cursor-none font-medium relative bg-gradient-to-r
        from-pr1 via-pr2 to-sec1 transition-all duration-200
        ease-in-out active:scale-95 hover:scale-110 flex items-center justify-center gap-2
        border-neutral-200 dark:border-white/[0.2] 
        text-white px-4 py-[12px] md:py-3 rounded-full"
        >
          <GoMail className="text-xl font-bold" />
          Contact Me
          {/**top color a bit  */}
          {/* <span
          className="absolute inset-x-0 w-[70%] mx-auto
         top-[0px] bg-gradient-to-r from-transparent via-pink-600
         to-transparent h-[1px]"
         /> */}
        </button>
        {/* Lit up button */}

        <button
          className="hover:border-none z-[0] font-medium cursor-none bg-white border border-pr1/50 dark:border-white/30 px-4 py-[12px] md:py-3 rounded-full 
            transition-all duration-300 ease-in-out text-pr1 dark:text-white hover:text-white dark:bg-black-100
             hover:bg-gradient-to-r active:scale-95 flex justify-center items-center gap-2  hover:scale-110"
        >
          Explore <BiSolidSend className="text-2xl " />
        </button>
      </div>

      {/*------------------ social icons -------------------- */}
      <div
        className="flex w-full justify-center gap-4 md:gap-6
      text-white items-center px-4 pt-4"
      >
        <a
          href="https://www.github.com/Ten-T-Tonmoy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub
            className="text-4xl  p-1 hover:bg-gray-200/30 hover:scale-105 
          transition-all duration-200 ease-in-out   hover:text-stone-950"
          />
        </a>
        <a target="_blank" rel="noopener noreferrer">
          <FaCode
            className="text-4xl  p-1 hover:bg-gray-200/30 hover:scale-105 
            transition-all duration-200 ease-in-out  hover:text-yellow-400"
          />
        </a>
        <a
          href="https://discord.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGmail
            className="text-4xl  p-1 hover:bg-gray-200/30 hover:scale-105 
          transition-all duration-200 ease-in-out  hover:text-red-600"
          />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <FaLinkedin
            href="https://www.linkedin.com/in/farhan-hassan-tonmoy-2399bb2ba/"
            className="text-4xl  p-1 hover:bg-gray-200/30 hover:scale-105 
          transition-all duration-200 ease-in-out  hover:text-blue-500"
          />
        </a>
      </div>
    </div>
  );
};
export default Hero;
