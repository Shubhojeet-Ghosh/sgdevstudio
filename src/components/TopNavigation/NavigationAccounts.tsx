"use client";
import React from "react";
import Icons from "@/config/svg_icons"; // Import the icon dictionary
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function NavigationAccounts() {
  return (
    <div className="w-full flex items-center justify-start gap-[14px] border-r-[1px] px-[10px]">
      <Link
        href="https://github.com/shubhojeet-ghosh"
        target="_blank" // Opens in a new tab
        rel="noopener noreferrer"
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              {/* GitHub Icon */}
              {Icons.githubTopNav}
            </TooltipTrigger>
            <TooltipContent>
              <div
                className="flex items-center
             justify-center gap-[5px]"
              >
                <div>GitHub</div>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Link>

      <Link
        href="https://www.linkedin.com/in/shubhojeet-ghosh/"
        target="_blank" // Opens in a new tab
        rel="noopener noreferrer"
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              {/* LinkedIn Icon */}
              {Icons.linkedinTopNav}
            </TooltipTrigger>
            <TooltipContent>
              <div
                className="flex items-center
             justify-center gap-[5px]"
              >
                <div>LinkedIn</div>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Link>
    </div>
  );
}
