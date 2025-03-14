import React from "react";

export default function HeroSection() {
  return (
    <div className="flex flex-col justify-center dark:text-brightgray text-darkerblack">
      <div className="w-full animate-blur-reveal">
        <div className="text-[20px] md:text-[36px]">hi!</div>
        <div className="text-[32px] md:text-[60px] lg:text-[72px] font-[800] leading-[0.9]">
          I'm <span className="text-primarycyan">S</span>hubhojeet{" "}
          <span className="text-primarycyan">G</span>hosh,
        </div>
      </div>
      <div className="w-full mt-[16px]">
        <div className="w-[85%] lg:w-[70%]">
          <p className="text-[14px] md:text-[20px] font-[400] text-justify animate-blur-reveal">
            a <span className="font-[800]">full-stack product engineer</span>{" "}
            who specializes in building{" "}
            <span className="font-[800] bg-gradient-to-r from-gradientpurple to-gradientpink bg-clip-text text-transparent">
              AI-powered applications
            </span>{" "}
            and{" "}
            <span className="font-[800] bg-gradient-to-r from-gradientpurple to-gradientpink bg-clip-text text-transparent">
              intelligent agents{" "}
            </span>
            that automate workflows.
          </p>
        </div>
      </div>
    </div>
  );
}
