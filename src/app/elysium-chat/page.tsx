"use client";

import LeftNavApp from "@/components/ElysiumChat/LeftNavApp/LeftNavApp";
import ProfileCompletionPrompt from "@/components/ElysiumChat/auth/ProfileCompletionPrompt";

export default function ElysiumChatAuthPage() {
  return (
    <>
      <div className="flex flex-col items-start justify-center w-full px-[18px] py-[10px]">
        <LeftNavApp />
      </div>
      <ProfileCompletionPrompt />
    </>
  );
}
