import React from "react";
import TopNavigation from "@/components/TopNavigation/TopNavigation";
import HeroSection from "@/components/HeroSection";
import GridPatternLinearGradient from "@/components/Backgrounds/GridPatternLinearGradient";
import ContactAndResume from "@/components/Contact/ContactAndResume";
import MyTechStacks from "@/components/TechStacks/MyTechStacks";

export default function MainPage() {
  return (
    <>
      <div className="bg-white dark:bg-black transition-all duration-300 min-h-[100dvh]">
        <GridPatternLinearGradient />
        <TopNavigation />
        <div className="mt-[60px] md:mt-[120px] px-[16px] md:px-[20px] lg:px-[180px]">
          <HeroSection />
        </div>
        <div className="mt-[40px] px-[16px] md:px-[20px] lg:px-[180px]">
          <ContactAndResume />
        </div>
        <div className="lg:mt-[120px] mt-[60px] px-[16px] md:px-[20px] lg:px-[180px]">
          <MyTechStacks />
        </div>
      </div>
    </>
  );
}
