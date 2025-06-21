"use client";
import React, { useEffect, useState } from "react";
import SgLogo from "@/components/BrandLogo/SgDevStudioLogo";
import ThemeToggle from "@/components/TopNavigation/ThemeToggle";
import BaseLink from "@/components/TopNavigation/BaseLink";
import NavigationAccounts from "@/components/TopNavigation/NavigationAccounts";
import NavigationLinks from "@/components/TopNavigation/NavigationLinks";
import AppVersion from "@/components/TopNavigation/AppVersion";

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
        text-darkerblack dark:text-brightgray flex items-center justify-center px-[16px]
        transition-all duration-300 ${
          isScrolled
            ? "bg-white/70 dark:bg-black/70 backdrop-blur-[8px] shadow-[0px_1px_0px_rgba(0,0,0,0.1)] dark:shadow-[0px_1px_0px_rgba(255,255,255,0.1)]"
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
          <div className="ml-[16px]">
            <NavigationLinks />
          </div>
        </div>

        {/* Right Group */}
        <div className="flex items-center justify-center">
          <div className="hidden md:block">
            {" "}
            <NavigationAccounts />
          </div>

          <ThemeToggle />
        </div>
      </div>
      <AppVersion />
    </div>
  );
};

export default TopNavigation;
