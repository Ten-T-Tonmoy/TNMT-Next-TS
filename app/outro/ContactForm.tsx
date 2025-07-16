import React from "react";
import { BiSolidSend } from "react-icons/bi";

const ContactForm = () => {
  return (
    <div className="w-[84vw] md:w-[45%]">
      <form
        action="submit "
        className="flex flex-col  items-center justify-center px-[2vw] gap-2 md:gap-3"
      >
        <input
          type="text"
          placeholder="Your Name..."
          className="w-full z-10  bg-black/50 border
           border-white/20 px-6 md:px-8 py-2 md:py-3 text-white placeholder-white/40
            outline-none ring-0 transition duration-200 focus:border-white/40
             focus:ring-2 focus:ring-white/10 rounded-[8px]"
        />
        <input
          type="text"
          placeholder="Your Email (@email.com) ..."
          className="w-full z-10  bg-black/50 border
           border-white/20 px-6 md:px-8 py-2 md:py-3 text-white placeholder-white/40
            outline-none ring-0 transition duration-200 focus:border-white/40
             focus:ring-2 focus:ring-white/10 rounded-[8px]"
        />
        <textarea
          placeholder="Your message or Topic Discussion..."
          rows={4}
          className="w-full z-10 rounded-[8px] bg-black/50 border
           border-white/20 px-6 md:px-8 py-2 md:py-3  text-white placeholder-white/40
            outline-none ring-0 transition duration-200 focus:border-white/40
             focus:ring-2 focus:ring-white/10 resize-none"
        />
        <div className="w-full items-end justify-end flex">
          <button
            className="border my-3 text-sm cursor-none font-medium relative bg-gradient-to-r
                    from-pr1 via-pr2 to-sec1 transition-all duration-200
                    ease-in-out active:scale-95 hover:scale-105 
                    border-neutral-200 dark:border-white/[0.2] text-black
                    dark:text-white px-4 py-[12px] md:py-3 rounded-[10px]"
          >
            Send Message
            <BiSolidSend className="scale-125 inline ml-2 mb-[2px]" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
