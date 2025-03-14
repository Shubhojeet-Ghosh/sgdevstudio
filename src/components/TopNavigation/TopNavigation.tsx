"use client";
import React, { useEffect, useState } from "react";
import SgLogo from "@/components/BrandLogo/SgDevStudioLogo";
import ThemeToggle from "@/components/TopNavigation/ThemeToggle";
import BaseLink from "@/components/TopNavigation/BaseLink";
const TopNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Glass effect after 10px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 left-0 w-full h-[65px] z-[100] 
        text-darkerblack dark:text-brightgray flex items-center justify-center px-[12px] 
        transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-black/80 backdrop-blur-[10px]"
            : "bg-transparent"
        }`}
    >
      <div className="flex w-full justify-between items-center">
        {/* Left Group */}
        <div className="flex items-center justify-center">
          <div className="text-[20px] flex items-center justify-center gap-[8px]">
            <BaseLink />
            <div className="hidden md:block">
              <SgLogo />
            </div>
          </div>
        </div>

        <div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
