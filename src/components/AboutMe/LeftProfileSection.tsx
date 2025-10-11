"use client";

import Image from "next/image";
import { AbutMePictureURL } from "@/config/about_me";

export default function LeftProfileSection() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="relative w-full max-w-[400px] aspect-square">
        <div className="absolute inset-[-24px] bg-gradient-to-br from-primarycyan via-gradientpurple to-gradientpink rounded-full opacity-20 blur-xl"></div>
        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primarycyan/30">
          <Image
            src={AbutMePictureURL.link}
            alt="Shubhojeet Ghosh Profile Picture"
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
