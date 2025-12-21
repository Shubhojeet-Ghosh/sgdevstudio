import React from "react";
import Link from "next/link";
import { Dot } from "lucide-react";
import Icons from "@/config/svg_icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center justify-center text-center py-12 dark:text-brightgray text-darkerblack">
      {/* Top horizontal line */}
      <div className="w-full border-t border-gray-300 dark:border-gray-700 mb-8"></div>

      {/* Social icons */}
      <div className="flex items-center gap-5 mb-8">
        <Link
          href="https://github.com/shubhojeet-ghosh"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:!bg-primarycyan hover:!text-white transition-all duration-300 shadow-sm inline-flex items-center justify-center"
        >
          {Icons.githubTopNav}
        </Link>

        <Link
          href="https://www.linkedin.com/in/shubhojeet-ghosh"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:!bg-primarycyan hover:!text-white transition-all duration-300 shadow-sm inline-flex items-center justify-center"
        >
          {Icons.linkedinTopNav}
        </Link>

        <Link
          href="https://x.com/devshubhojeet"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:!bg-primarycyan hover:!text-white transition-all duration-300 shadow-sm inline-flex items-center justify-center"
        >
          {Icons.xTopNav}
        </Link>

        <Link
          href="mailto:shubhojeet.official@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
          className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:!bg-primarycyan hover:!text-white transition-all duration-300 shadow-sm inline-flex items-center justify-center"
        >
          {Icons.mailTopNav}
        </Link>
      </div>

      {/* Center gradient lines with dot */}
      <div className="flex items-center gap-[1px] mb-6">
        <span className="w-20 h-[1px] bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-600 to-gray-600 dark:to-gray-300"></span>

        <Dot size={40} className="text-primarycyan" />

        <span className="w-20 h-[1px] bg-gradient-to-l from-transparent via-gray-400 dark:via-gray-600 to-gray-600 dark:to-gray-300"></span>
      </div>

      {/* Copyright */}
      <p className="text-[12px] font-medium opacity-80">
        © {currentYear}{" "}
        <Link
          href="/shubhojeet"
          className="font-semibold bg-gradient-to-r from-gradientpurple to-primarycyan dark:from-white dark:to-primarycyan bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-300 cursor-pointer"
        >
          Shubhojeet Ghosh
        </Link>
        . All rights reserved.
      </p>
    </footer>
  );
}
