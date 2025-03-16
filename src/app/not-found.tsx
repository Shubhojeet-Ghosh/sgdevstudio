import React from "react";
import TopNavigation from "@/components/TopNavigation/TopNavigation";
import GridPatternLinearGradient from "@/components/Backgrounds/GridPatternLinearGradient";
import PageNotFound from "@/components/PageNotFound";

export default function NotFound() {
  return (
    <>
      <div className="bg-white dark:bg-black transition-all duration-300 min-h-[100dvh]">
        <GridPatternLinearGradient />
        <TopNavigation />
        <div className="w-full mt-[220px] flex items-center justify-center">
          <PageNotFound />
        </div>
      </div>
    </>
  );
}
