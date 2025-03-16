"use client";
import React, { ReactNode } from "react";

interface TransparentButtonProps {
  text?: string;
  onClick: () => void;
  minWidth?: string;
  minHeight?: string;
  isLoading?: boolean;
  className?: string;
  children?: ReactNode; // Allows JSX content
}

export default function TransparentButton({
  text,
  onClick,
  minWidth,
  minHeight,
  isLoading = false,
  className = "",
  children,
}: TransparentButtonProps) {
  return (
    <button
      className={`rounded-[12px] flex items-center justify-center gap-2 transition-all duration-300 ${className}`}
      style={{
        backgroundColor: "transparent", // No background
        border: "none", // No default button border
        minWidth: minWidth || "auto",
        minHeight: minHeight || "auto",
      }}
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? (
        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
      ) : text ? (
        text
      ) : (
        children // Render JSX content if text is not provided
      )}
    </button>
  );
}
