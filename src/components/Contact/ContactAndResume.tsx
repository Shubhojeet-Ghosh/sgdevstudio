"use client";
import React from "react";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import TransparentButton from "@/components/Buttons/TransparentButton";
import { toast } from "sonner";

import { FileText } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ContactAndResume() {
  const router = useRouter();

  const redirectToPage = (redirectTo: string) => {
    router.push(redirectTo);
  };

  const handleDownload = async () => {
    toast("Your file will be ready shortly!", {
      description: "Downloading PDF File...",
    });
    try {
      const resumeUrl =
        "https://drive.google.com/uc?export=download&id=1Md6QzJ0b-imS2l7LveJCRIpDvISdLWoG";

      const link = document.createElement("a");
      link.href = resumeUrl;
      link.setAttribute("download", "resume.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
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
        <TransparentButton
          onClick={handleDownload} // Call download function
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
      </div>
    </>
  );
}
