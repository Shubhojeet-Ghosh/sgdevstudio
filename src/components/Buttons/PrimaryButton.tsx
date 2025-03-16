"use client";
import React from "react";

interface PrimaryButtonProps {
  text: string;
  onClick: () => void;
  minWidth?: string;
  minHeight?: string;
  isLoading?: boolean;
  className?: string;
}

export default function PrimaryButton({
  text,
  onClick,
  minWidth,
  minHeight,
  isLoading = false,
  className = "",
}: PrimaryButtonProps) {
  return (
    <button
      className={`rounded-[12px] bg-tealbutton hover:bg-primarycyan text-[14px] font-[700] text-white flex items-center justify-center gap-2 transition-all duration-300 ${className}`}
      style={{
        minWidth: minWidth ? minWidth : "auto",
        minHeight: minHeight ? minHeight : "auto",
      }}
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? (
        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      ) : (
        text
      )}
    </button>
  );
}
