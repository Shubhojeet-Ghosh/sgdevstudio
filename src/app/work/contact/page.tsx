import React from "react";
import TopNavigation from "@/components/TopNavigation/TopNavigation";
import ContactHeroSection from "@/components/Contact/ContactHeroSection";
import ContactContent from "@/components/Contact/ContactContent";
import GridPatternLinearGradient from "@/components/Backgrounds/GridPatternLinearGradient";
import Footer from "@/components/Footer/Footer";
import RegisterVisitor from "@/components/connect/RegisterVisitor";

export default function ContactPage() {
  return (
    <>
      <div className="bg-white dark:bg-black transition-all duration-300 min-h-[100dvh]">
        <GridPatternLinearGradient />
        <TopNavigation />
        <div className="mt-[60px] md:mt-[100px] px-[16px] md:px-[20px] lg:px-[180px]">
          <ContactHeroSection />
        </div>
        <div className="mt-[60px] md:mt-[60px] px-[16px] md:px-[20px] lg:px-[180px]">
          <ContactContent />
        </div>
        <div className="mt-[60px] px-[16px] md:px-[20px] lg:px-[180px]">
          <Footer />
        </div>
      </div>
      <RegisterVisitor />
    </>
  );
}
