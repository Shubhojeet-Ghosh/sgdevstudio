import React from "react";
import type { Metadata } from "next";
import TopNavigation from "@/components/TopNavigation/TopNavigation";
import GridPatternLinearGradient from "@/components/Backgrounds/GridPatternLinearGradient";
import Footer from "@/components/Footer/Footer";
import RegisterVisitor from "@/components/connect/RegisterVisitor";
import ProjectsSection from "@/components/Projects/ProjectsSection";
import ProjectsHeroSection from "@/components/Projects/ProjectsHeroSection";
import { getProjectsPageMetadata } from "@/components/SEO/ProjectsPageMetadata";

export const metadata: Metadata = getProjectsPageMetadata();

export default function ProjectsPage() {
  return (
    <>
      <div className="bg-white dark:bg-black transition-all duration-300 min-h-[100dvh]">
        <GridPatternLinearGradient />
        <TopNavigation />
        <div className="mt-[60px] md:mt-[100px] px-[16px] md:px-[20px] lg:px-[180px]">
          <ProjectsHeroSection />
        </div>
        <div className="lg:mt-[0px] mt-[48px] px-[16px] md:px-[20px] lg:px-[180px]">
          <ProjectsSection />
        </div>
        <div className="mt-[60px] px-[16px] md:px-[20px] lg:px-[180px]">
          <Footer />
        </div>
      </div>
      <RegisterVisitor />
    </>
  );
}
