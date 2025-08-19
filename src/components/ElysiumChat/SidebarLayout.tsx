"use client";

import ChatViewWrapper from "./ChatViewWrapper";

export default function SidebarLayout() {
  return (
    <>
      <div className="fixed top-0 left-0 h-[100dvh] bg-brightgray flex w-[520px] pl-[90px] pr-[20px] py-[20px] flex-col shadow-md">
        <ChatViewWrapper />
      </div>
    </>
  );
}
