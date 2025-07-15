"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-black/10 font-sans md:px-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-4 px-4 md:px-8 lg:px-10">
        <h2 className="text-xl md:text-4xl  font-bold dark:text-white max-w-4xl">
          My Academic journey so far ..
        </h2>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-5 md:pt-10 md:gap-5"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div
                className="h-6 w-6 absolute left-3 md:left-3  rounded-full
               bg-white/20 border-2 border-pr1 flex items-center justify-center"
              >
                <div
                  className="h-3 w-3 rounded-full border border-pr1 bg-gradient-to-r
                  from-pr1 via-pr2 to-sec1 p-1"
                />
              </div>
              {/* so its year tag  item.title    glow text added*/}
              <h3
                className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold
               "
              >
                <div
                  className="relative mx-auto inline-block w-max
        [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]"
                >
                  <div
                    className="absolute left-0 top-[1px] bg-clip-text 
          bg-no-repeat text-transparent bg-gradient-to-r py-2
           from-pr2 via-sec2 to-pr1 [text-shadow:0_0_rgba(0,0,0,0.1)]"
                  >
                    <span className=""> {item.title}</span>
                  </div>
                  <div
                    className="relative bg-clip-text text-transparent bg-no-repeat
           bg-gradient-to-r from-sec1 via-pr2 to-pr1 py-2"
                  >
                    <span className=""> {item.title}</span>
                  </div>
                </div>
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3
                className="md:hidden block text-2xl mb-4 text-left font-bold
               "
              >
                <div
                  className="relative mx-auto inline-block w-max
        [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]"
                >
                  <div
                    className="absolute left-0 top-[1px] bg-clip-text 
          bg-no-repeat text-transparent bg-gradient-to-r py-2
           from-pr2 via-sec2 to-pr1 [text-shadow:0_0_rgba(0,0,0,0.1)]"
                  >
                    <span className=""> {item.title}</span>
                  </div>
                  <div
                    className="relative bg-clip-text text-transparent bg-no-repeat
           bg-gradient-to-r from-sec1 via-pr2 to-pr1 py-2"
                  >
                    <span className=""> {item.title}</span>
                  </div>
                </div>
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] 
          bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))]
           from-transparent from-[0%] via-neutral-200 dark:via-neutral-700
            to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t 
            from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
