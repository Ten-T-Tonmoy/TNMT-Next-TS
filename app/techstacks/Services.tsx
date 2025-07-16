import React from "react";
import Image from "next/image";

/**
 * Services and Interests
 * Mobile App Development
 * UI/UX Design
 * Full Stack Development
 * Figma to React App
 * Problem Solving
 * Responsive Design
 * Landing Page Design
 * Ecommerce Backend
 *
 */

interface Service {
  title: string;
  desc: string;
  image: string;
}

const Services = () => {
  const services: Service[] = [
    {
      title: "Full-Stack Development",
      desc: "Developing robust web apps using MERN and PERN stacks, from frontend to backend.",
      image: "/services/fullstack4.png",
    },
    {
      title: "Landing Page Design",
      desc: "Creating high-converting, visually rich landing pages for products or portfolios.",
      image: "/services/web-design3.png",
    },
    {
      title: "Ecommerce Backend",
      desc: "Building secure and scalable ecommerce systems with authentication and payments.",
      image: "/services/backend.png",
    },
    {
      title: "Design to Code",
      desc: "Translating Figma designs into responsive, production-ready React apps.",
      image: "/services/website.png",
    },
    {
      title: "Problem Solving",
      desc: "Tackling coding challenges through algorithms and competitive programming.",
      image: "/services/problem.png",
    },
    {
      title: "Responsive Design",
      desc: "Ensuring seamless layouts across all devices with modern CSS techniques.",
      image: "/services/responsive3.png",
    },
  ];

  return (
    <div
      className="min-h-[100vh] flex flex-col md:flex-row 
      justify-center items-center  py-20"
    >
      {/* container starts here for cards */}
      <div className="grid gap-[4vw] grid-cols-1 md:grid-cols-2">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`relative z-10 rounded-2xl  flex items-center justify-center hover:scale-105 w-[90vw] md:w-[35vw]
        backdrop-blur-md bg-white/10 border border-white/20 text-white transition-all duration-300 ease-in-out
        shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] 
        ${[1, 2, 5].includes(idx) ? "flex-row-reverse" : " "}
        `}
          >
            <div
              className={`flex bg-gradient-to-br from-slate-800 via-slate-900
         to-gray-900   shadow-2xl border-2 w-full 
         border-transparent bg-clip-padding  px-5 py-10 flex-col justify-between h-full  z-10
             ${[1, 2, 5].includes(idx) ? "rounded-r-2xl" : "rounded-l-2xl "}`}
            >
              <h1 className="text-xl font-black">{service.title}</h1>
              <p className="w-[80%]  text-white/70 text-[.9rem]">
                {service.desc}
              </p>
            </div>
            {/**image er bakchodi */}
            {service.image?.includes(".png") ? (
              <div className=" w-full items-center justify-center flex">
                <Image
                  className=" p-6"
                  src={service.image}
                  height={200}
                  alt="gif responsive"
                  width={200}
                />
              </div>
            ) : (
              <div className="p-2 h-full w-full items-center justify-center flex">
                <Image
                  className="rounded-full "
                  src={service.image}
                  height={200}
                  alt="gif responsive"
                  width={200}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
