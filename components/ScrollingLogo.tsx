"use client";
import React from "react";

const logos = [
  "/nextjs.svg",
  "/javascript.svg",
  "/mongodb.svg",
  "/html.svg",
  "/css.svg",
  "/tailwind.svg",
  "/typescript.svg",
  "/csharp.svg",
  "/visualstudio.svg",
  "/reactjs.svg",
  "/microsoft-word.svg",
  "/microsoft-excel.svg",
];

const ScrollingLogo: React.FC = () => {
  return (
    <div className="flex items-center flex-col ">
      <div className="text-center overflow-x-clip relative py-5 w-full">
        <span className="text-lg  font-bold">
          Professional Expertise and Tools I Utilize
        </span>
        <div className="flex py-5 space-x-8 animate-scroll">
          {logos.concat(logos).map((logo, index) => (
            <img
              src={logo}
              alt={`Logo ${index}`}
              className="w-24 h-24"
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingLogo;
