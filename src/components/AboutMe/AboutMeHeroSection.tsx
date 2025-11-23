import React from "react";
import { TextAnimate } from "@/components/magicui/text-animate";

export default function AboutMeHeroSection() {
  return (
    <div className="flex flex-col justify-center dark:text-brightgray text-darkerblack">
      <div className="w-full animate-blur-reveal">
        <h1 className="text-[20px] md:text-[24px] font-[800] leading-[0.9] text-pastelprimarygreen">
          About
        </h1>
      </div>
      <div className="w-full text-[32px] md:text-[72px] font-[700] animate-blur-reveal leading-[0.9] mt-[20px]">
        Who is Shubhojeet?
      </div>
      <div className="w-full mt-[16px] text-[16px] md:text-[24px]">
        <TextAnimate animation="blurIn">
          Bringing ideas to life through intelligent systems and creative
          solutions.
        </TextAnimate>
      </div>
    </div>
  );
}
