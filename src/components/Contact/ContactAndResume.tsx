"use client";
import React from "react";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import TransparentButton from "@/components/Buttons/TransparentButton";
import Link from "next/link";
import { FileText } from "lucide-react";
import { useRouter } from "next/navigation";

import { ResumeFigmaLink } from "@/config/about_me";
export default function ContactAndResume() {
  const router = useRouter();

  const redirectToPage = (redirectTo: string) => {
    router.push(redirectTo);
  };

  return (
    <>
      <div className="w-full flex items-center justify-start gap-[10px]">
        <PrimaryButton
          text="Get in Touch"
          onClick={() => redirectToPage("/work/contact")}
          minWidth="120px"
          minHeight="45px"
          isLoading={false} // Set to true to see the spinner
        />
        <Link
          href={ResumeFigmaLink.link}
          target="_blank" // Opens in a new tab
          rel="noopener noreferrer" // Security best practices
        >
          <TransparentButton
            onClick={() => {}} // Call download function
            minWidth="100px"
            minHeight="45px"
            isLoading={false}
            className="text-darkerblack dark:text-brightgray font-[600] text-[14px]"
          >
            <div className="flex items-center justify-center gap-[6px]">
              <FileText size={16} />
              RESUME
            </div>
          </TransparentButton>
        </Link>
      </div>
    </>
  );
}
