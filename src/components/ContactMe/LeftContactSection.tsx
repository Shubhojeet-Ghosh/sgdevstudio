import Link from "next/link";
import { Send } from "lucide-react";

export default function LeftContactSection() {
  return (
    <div className="md:w-1/2 flex flex-col justify-center space-y-6 dark:text-brightgray text-darkerblack">
      <h3 className="text-[24px] font-bold dark:text-brightgray text-darkerblack">
        Let’s work together
      </h3>

      <p className="text-[14px] text-justify">
        I’m always excited to discuss new ideas and projects. Whether you need a
        tech perspective, a creative collaborator, or just want to chat about
        your vision, feel free to reach out anytime.
      </p>

      <p className="text-[14px] text-justify">
        I’ll do my best to reply quickly and look forward to connecting with
        you!
      </p>
      <div className="flex items-center justify-start">
        <Link
          href="mailto:shubhojeet.official@gmail.com "
          className="px-[16px] py-[12px] rounded-[12px] bg-gradientpurple/60 border-[2px] border-gradientpurple hover:bg-gradientpurple text-[14px] font-[700] text-white flex items-center justify-center gap-2 transition-all duration-300 "
        >
          <Send className="w-4 h-4" />
          shubhojeet.official@gmail.com
        </Link>
      </div>
    </div>
  );
}
