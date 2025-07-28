import { BiSolidSend } from "react-icons/bi";
import { ContainerTextFlip } from "@/components/ui/text-flip";

const Hero = () => {
  return (
    <div className="min-h-[100vh] w-full flex flex-col  justify-center items-center  ">
      <h2
        className="text-6xl relative z-20  lg:text-7xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
        backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-3
      font-bold text-center text-black dark:text-white font-sans 
      tracking-tight flex flex-col sm:flex-row justify-center items-center sm:gap-4"
      >
        <p className="px-2">
          Hi there <span className="text-pr1">!</span> It{`'`}s
        </p>
        {/* gradient text */}
        <div
          className="relative mx-auto inline-block w-max
        [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]"
        >
          <div
            className="absolute left-0 top-[1px] bg-clip-text 
          bg-no-repeat text-transparent bg-gradient-to-r py-2
           from-pr2 via-sec2 to-pr1 [text-shadow:0_0_rgba(0,0,0,0.1)]"
          >
            <span className="">TONMOY</span>
          </div>
          <div
            className="relative bg-clip-text text-transparent bg-no-repeat
           bg-gradient-to-r from-sec1 via-pr2 to-pr1 py-2"
          >
            <span className="">TONMOY</span>
          </div>
        </div>
      </h2>
      <p
        className="text-xl text-neutral-200 font-[500] mt-1 max-w-[80%] md:max-w-[60%]
       text-center "
      >
        I{"'"}m a sophomore IT undergrad with a knack for turning bold ideas
        into real products.
        <span
          className=" 
"
        ></span>{" "}
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
      <div className="flex justify-center items-center gap-4 md:text-[1.4rem]">
        <button
          className="border my-3 text-sm cursor-none font-medium relative bg-gradient-to-r
        from-pr1 via-pr2 to-sec1 transition-all duration-200
        ease-in-out active:scale-95 hover:bg-gradient-to-br
        border-neutral-200 dark:border-white/[0.2] text-black
        dark:text-white px-4 py-[12px] md:py-3 rounded-xl"
        >
          <span className="md:text-[1.4rem]">Contact Me</span>
          {/**top color a bit  */}
          {/* <span
          className="absolute inset-x-0 w-[70%] mx-auto
         top-[0px] bg-gradient-to-r from-transparent via-pink-600
         to-transparent h-[1px]"
         /> */}
        </button>
        {/* Lit up button */}

        <button
          className="px-4 z-[0] py-2 font-semibold cursor-none bg-white border-2 border-pr2  rounded-xl 
            transition-all duration-300 ease-in-out text-pr1 hover:text-white
             hover:bg-gradient-to-r active:scale-95 flex justify-center items-center gap-2"
        >
          Explore <BiSolidSend className="scale-125 mt-1" />
        </button>
      </div>
    </div>
  );
};
export default Hero;
