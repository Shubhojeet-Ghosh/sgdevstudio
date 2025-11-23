"use client";
import React from "react";

const NavigationLinks = () => {
  return (
    <div className="flex items-center gap-[16px] lg:text-[14px] text-[12px] font-[600]">
      {/* About Link */}
      <a
        href="/about"
        className="hover:text-primarycyan text-tealbutton transition-colors duration-200"
      >
        About
      </a>
      {/* Projects Link */}
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
