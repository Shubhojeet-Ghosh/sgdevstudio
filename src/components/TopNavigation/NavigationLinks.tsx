"use client";
import React from "react";

const NavigationLinks = () => {
  return (
    <div className="flex items-center gap-[16px] text-[14px] font-[600]">
      {/* Contact Link */}
      <a
        href="/work/projects"
        className="hover:text-primarycyan text-tealbutton transition-colors duration-200"
      >
        Projects
      </a>
      {/* Contact Link */}
      <a
        href="/work/contact"
        className="hover:text-primarycyan text-tealbutton transition-colors duration-200"
      >
        Contact
      </a>
    </div>
  );
};

export default NavigationLinks;
