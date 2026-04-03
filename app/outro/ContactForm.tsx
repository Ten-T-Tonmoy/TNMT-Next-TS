"use client";
import React, { useState } from "react";
import { BiSolidSend } from "react-icons/bi";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setmessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill all fields");
      return;
    }
    setLoading(true);
    const url = process.env.NEXT_PUBLIC_SHEETDB_URL;
    if (!url) {
      toast.error("SheetDB URL not configured");
      return;
    }
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            Name: name,
            Email: email,
            Message: message,
            Time: new Date().toLocaleString(),
          },
        ],
      }),
    });

    if (res.ok) {
      setLoading(false);
      toast.success("Thanks for your Opinion!");
      setName("");
      setEmail("");
      setmessage("");
    }
  };
  return (
    <div className="w-[84vw] md:w-[45%]">
      <form
        action="submit "
        className="flex flex-col  items-center justify-center px-[2vw] gap-2 md:gap-3"
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name..."
          className="w-full z-10  bg-black/50 border
           border-white/20 px-6 md:px-8 py-2 md:py-3 text-white placeholder-white/40
            outline-none ring-0 transition duration-200 focus:border-white/40
             focus:ring-2 focus:ring-white/10 rounded-[8px]"
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email (@email.com) ..."
          className="w-full z-10  bg-black/50 border
           border-white/20 px-6 md:px-8 py-2 md:py-3 text-white placeholder-white/40
            outline-none ring-0 transition duration-200 focus:border-white/40
             focus:ring-2 focus:ring-white/10 rounded-[8px]"
        />
        <textarea
          placeholder="Your message or Topic Discussion..."
          rows={4}
          value={message}
          onChange={(e) => setmessage(e.target.value)}
          className="w-full z-10 rounded-[8px] bg-black/50 border
           border-white/20 px-6 md:px-8 py-2 md:py-3  text-white placeholder-white/40
            outline-none ring-0 transition duration-200 focus:border-white/40
             focus:ring-2 focus:ring-white/10 resize-none"
        />
        <div className="w-full items-end justify-end flex">
          <button
            type="submit"
            className={`border my-3 text-sm cursor-none font-medium relative bg-gradient-to-r
                    from-pr1 via-pr2 to-sec1 transition-all duration-200
                    ease-in-out active:scale-95 hover:scale-105 
                    border-neutral-200 border-white/[0.2]
                    text-white px-4 py-[12px] md:py-3 rounded-[10px] 
                     ${loading === true ? "opacity-40" : "opacity-100"} `}
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
