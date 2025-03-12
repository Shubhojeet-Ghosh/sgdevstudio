import React from "react";
import TopNavigation from "@/components/TopNavigation/TopNavigation";
export default function () {
  return (
    <>
      <div className="bg-black min-h-[100dvh]">
        <TopNavigation />
        <div className="w-full px-[180px] text-[72px] font-[800] text-[#EEEEEE]">
          I'm <span className="text-[#00ADB5]">S</span>hubhojeet{" "}
          <span className="text-[#00ADB5]">G</span>hosh,
        </div>
        <div className="w-full px-[180px]">
          <div className="w-[28%]">
            <p className="text-[20px] text-[#EEEEEE] w-full font-[400]">
              A <span className="font-[800]">full-stack developer</span> who
              loves intuitive, clean and modern UI design.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
