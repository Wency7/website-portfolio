"use client";
import SocialMedia from "@/static/SocialMedia";
import Typing from "@/static/Typing";
import Link from "next/link";

function Hero() {
  return (
    <div className="flex items-center flex-col min-h-screen lg:px-32  ">
      <div className="flex justify-center lg:flex-row lg:items-center flex-col-reverse items-center w-full flex-1">
        <div className="flex flex-col z-20 pointer-events-none lg:w-3/5 w-full text-center">
          <p className="lg:text-[3vw] text-[6vw] font-bold text-lightcyan w-full">
            Hello there, I&apos;m Wency Salta.
          </p>
          <p className="lg:text-[2vw] text-[4vw]">
            This is my self-developed portfolio website, created with
            <Typing />
          </p>
          <div className="flex mt-6 space-x-4 justify-center">
            <SocialMedia size={200} />
            <Link
              href="/Resume.pdf" // Link to your resume
              target="_blank" // Open in a new tab
              rel="noopener noreferrer" // Security feature
              className="bg-[#BDA588ff] text-white px-4 py-4  rounded-lg shadow-lg hover:bg-[#E1D7CEff] transition-colors"
              style={{ pointerEvents: "auto" }}
            >
              Resume
            </Link>
          </div>
        </div>
        <img
          className="rounded-full w-2/4 lg:w-3/4 max-w-xs object-contain self-center animate-scalepulse"
          src="/Profilepic.png"
          alt="Portrait"
        />
      </div>
      
    </div>
  );
}

export default Hero;
