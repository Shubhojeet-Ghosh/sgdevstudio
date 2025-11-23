import React from "react";
import { TextAnimate } from "@/components/magicui/text-animate";

export default function ProjectsHeroSection() {
  return (
    <div className="flex flex-col justify-center dark:text-brightgray text-darkerblack">
      <div className="w-full animate-blur-reveal">
        <div className="text-[20px] md:text-[24px] font-[800] leading-[0.9] text-pastelprimarygreen">
          Work
        </div>
      </div>
      <h1 className="w-full text-[32px] md:text-[72px] font-[700] animate-blur-reveal leading-[0.9] mt-[20px]">
        Projects
      </h1>
      <div className="w-full mt-[16px] text-[16px] md:text-[24px]">
        <TextAnimate animation="blurIn">
          Here are some of the projects I’ve worked on, each representing a
          unique challenge and learning experience across AI, frontend, and
          backend development.
        </TextAnimate>
      </div>
    </div>
  );
}
