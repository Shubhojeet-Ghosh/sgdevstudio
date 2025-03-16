import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="dark:text-brightgray text-darkerblack">
      <div className=" flex flex-col items-center justify-center">
        <p className="text-[96px] font-[800] leading-[0.9]">404</p>
        <p className="text-[24px] font-[400] mt-[15px]">Page Not Found</p>
        <Link
          href="/"
          className="text-[20px] font-[400] mt-[45px] text-pastelprimarygreen"
        >
          back to homepage
        </Link>
      </div>
    </div>
  );
}
