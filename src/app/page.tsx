import React from "react";
import TopNavigation from "@/components/TopNavigation/TopNavigation";
import HeroSection from "@/components/HeroSection";
import GridPatternLinearGradient from "@/components/Backgrounds/GridPatternLinearGradient";

export default function MainPage() {
  return (
    <>
      <div className="bg-white dark:bg-black transition-all duration-300 min-h-[100dvh]">
        <GridPatternLinearGradient />
        <TopNavigation />
        <div className="mt-[60px] md:mt-[120px] px-[12px] md:px-[20px] lg:px-[180px]">
          <HeroSection />
        </div>
      </div>
    </>
  );
}
