"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function BaseLink() {
  const pathname = usePathname();

  return (
    <>
      <Link
        href="/"
        className={`flex px-[12px] py-[6px] items-center justify-center rounded-[8px]  ${
          pathname === "/"
            ? "bg-primarycyan"
            : "bg-white dark:bg-transparent outline outline-[2px] outline-primarycyan"
        }  mt-[2px]`}
      >
        <div
          className={`h-3.5 w-0.5 rotate-12 rounded-full ${
            pathname === "/" ? "bg-white" : "bg-primarycyan"
          }`}
        ></div>
      </Link>
    </>
  );
}
