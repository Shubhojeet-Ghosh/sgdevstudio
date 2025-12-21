import React from "react";
import type { Metadata } from "next";
import TopNavigation from "@/components/TopNavigation/TopNavigation";
import ShubhojeetHeroSection from "@/components/AboutMe/ShubhojeetHeroSection";
import GridPatternLinearGradient from "@/components/Backgrounds/GridPatternLinearGradient";
import Footer from "@/components/Footer/Footer";
import RegisterVisitor from "@/components/connect/RegisterVisitor";
import AboutMeSection from "@/components/AboutMe/AboutMeComponent";
import PersonSchema from "@/components/SEO/PersonSchema";
import { getShubhojeetPageMetadata } from "@/components/SEO/ShubhojeetPageMetadata";

export const metadata: Metadata = getShubhojeetPageMetadata();

export default function ShubhojeetPage() {
  return (
    <>
      <div className="bg-white dark:bg-black transition-all duration-300 min-h-[100dvh]">
        <GridPatternLinearGradient />
        <TopNavigation />
        <div className="mt-[60px] md:mt-[100px] px-[16px] md:px-[20px] lg:px-[180px]">
          <ShubhojeetHeroSection />
        </div>
        <div className="mt-[60px] md:mt-[60px] px-[16px] md:px-[20px] lg:px-[180px]">
          <AboutMeSection useCasualPicture={true} />
        </div>
        <div className="mt-[60px] px-[16px] md:px-[20px] lg:px-[180px]">
          <Footer />
        </div>
      </div>
      <PersonSchema />
      <RegisterVisitor />
    </>
  );
}
