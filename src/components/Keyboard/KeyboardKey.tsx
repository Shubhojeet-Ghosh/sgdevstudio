import React, { ReactNode } from "react";

type KeyboardKeyProps = {
  children: ReactNode;
};

export default function KeyboardKey({ children }: KeyboardKeyProps) {
  return (
    <kbd className="inline-block rounded border-b-2 border-gray-400 bg-brightgray px-[6px] py-[1px] text-black shadow-sm dark:bg-black dark:text-brightgray dark:border-gray-500">
      {children}
    </kbd>
  );
}
