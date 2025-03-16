import React from "react";
import { TextAnimate } from "@/components/magicui/text-animate";

export default function ContactHeroSection() {
  return (
    <div className="flex flex-col justify-center dark:text-brightgray text-darkerblack">
      <div className="w-full animate-blur-reveal">
        <div className="text-[20px] md:text-[24px] font-[800] leading-[0.9] text-pastelprimarygreen">
          Work
        </div>
      </div>
      <div className="w-full text-[32px] md:text-[72px] font-[700] animate-blur-reveal leading-[0.9] mt-[20px]">
        Contact
      </div>
      <div className="w-full mt-[16px] text-[16px] md:text-[24px]">
        <TextAnimate animation="blurIn">
          Have a question? Drop me a message on social media, email, or phone.
        </TextAnimate>
      </div>
    </div>
  );
}
