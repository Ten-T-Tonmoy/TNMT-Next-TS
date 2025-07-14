import { cn } from "../../lib/utils";
import React from "react";

export function GridBackgroundDemo() {
  return (
    <div className=" inset-0  pointer-events-none">
      {/* grid lines */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:90px_90px]",
          "[background-image:linear-gradient(to_right,rgba(255,255,255,0.13)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.09)_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.13)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.09)_1px,transparent_1px)]"
        )}
      />
      {/* Faded effect */}
      <div
        className="pointer-events-none absolute
       inset-0 flex items-center justify-center bg-white/10
        [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]
         dark:bg-black/20"
      ></div>
      <p
        className="relative z-20 bg-gradient-to-b
       from-neutral-200 to-neutral-500 bg-clip-text 
       text-2xl font-bold text-transparent sm:text-7xl"
      ></p>{" "}
    </div>
  );
}
