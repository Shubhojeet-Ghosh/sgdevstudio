import React from "react";
import SgLogo from "@/components/BrandLogo/SgDevStudioLogo";
const TopNavigation = () => {
  return (
    <div className="sticky top-0 left-0 w-full h-[60px] bg-black/80 backdrop-blur-[10px] shadow-md z-[100] text-[#EEEEEE] flex items-center px-6">
      <div className="text-[20px]">
        <SgLogo />
      </div>
    </div>
  );
};

export default TopNavigation;
