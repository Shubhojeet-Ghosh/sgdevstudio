import React from "react";
import { TextAnimate } from "@/components/magicui/text-animate";

export default function ShubhojeetHeroSection() {
  return (
    <div className="flex flex-col justify-center dark:text-brightgray text-darkerblack">
      <div className="w-full animate-blur-reveal">
        <h1 className="text-[20px] md:text-[24px] font-[800] leading-[0.9] text-pastelprimarygreen">
          Hi,
        </h1>
      </div>
      <div className="w-full text-[32px] md:text-[72px] font-[700] animate-blur-reveal leading-[0.9] mt-[20px]">
        I&apos;m{" "}
        <span className="bg-gradient-to-r from-gradientpurple to-gradientpink bg-clip-text text-transparent">
          Shubhojeet
        </span>
      </div>
      <div className="w-full mt-[16px] text-[16px] md:text-[24px]">
        <TextAnimate animation="blurIn">
          Software engineer specializing in AI systems, agents, and web
          applications.
        </TextAnimate>
      </div>
    </div>
  );
}
