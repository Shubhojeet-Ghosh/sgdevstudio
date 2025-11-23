import React from "react";
import type { Metadata } from "next";
import TopNavigation from "@/components/TopNavigation/TopNavigation";
import AboutMeHeroSection from "@/components/AboutMe/AboutMeHeroSection";
import GridPatternLinearGradient from "@/components/Backgrounds/GridPatternLinearGradient";
import Footer from "@/components/Footer/Footer";
import RegisterVisitor from "@/components/connect/RegisterVisitor";
import AboutMeSection from "@/components/AboutMe/AboutMeComponent";
import { getAboutPageMetadata } from "@/components/SEO/AboutPageMetadata";

export const metadata: Metadata = getAboutPageMetadata();

export default function AboutPage() {
  return (
    <>
      <div className="bg-white dark:bg-black transition-all duration-300 min-h-[100dvh]">
        <GridPatternLinearGradient />
        <TopNavigation />
        <div className="mt-[60px] md:mt-[100px] px-[16px] md:px-[20px] lg:px-[180px]">
          <AboutMeHeroSection />
        </div>
        <div className="mt-[60px] md:mt-[60px] px-[16px] md:px-[20px] lg:px-[180px]">
          <AboutMeSection />
        </div>
        <div className="mt-[60px] px-[16px] md:px-[20px] lg:px-[180px]">
          <Footer />
        </div>
      </div>
      <RegisterVisitor />
    </>
  );
}
