import React from "react";

export default function AboutMeHeader() {
  return (
    <div className="flex flex-col">
      <p className="md:text-[32px] lg:text-[36px] text-[32px] font-[800] leading-[0.9] text-pastelprimarygreen">
        About Me
      </p>
      <p className="mt-[24px] lg:text-[24px] md:text-[20px] text-[14px] font-[700] dark:text-brightgray text-darkerblack leading-tight">
        Bringing ideas to life through intelligent systems.
      </p>
    </div>
  );
}

