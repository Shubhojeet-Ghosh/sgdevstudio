import { Code2, Server, Bot } from "lucide-react";

export default function RightProfileSection() {
  return (
    <div className="flex flex-col justify-center dark:text-brightgray text-darkerblack">
      <div className="space-y-4">
        <p className="font-[600] text-[24px]">
          Hey! I am{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-gradientpurple to-gradientpink bg-clip-text text-transparent font-[700]">
              Shubhojeet
            </span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-gradientpurple to-gradientpink"></span>
          </span>
        </p>
        <p className="lg:text-[16px] md:text-[14px] text-[14px] font-[400] text-justify">
          I&apos;m a{" "}
          <strong className="font-[800] bg-gradient-to-r from-gradientpurple to-gradientpink bg-clip-text text-transparent">
            senior software engineer
          </strong>{" "}
          passionate about building{" "}
          <strong className="font-[700] bg-gradient-to-r from-gradientpurple to-gradientpink bg-clip-text text-transparent">
            intelligent digital experiences
          </strong>{" "}
          that blend creativity with precision. With a strong command of both
          frontend and backend technologies, I craft seamless, scalable systems
          - from elegant interfaces in React and Next.js to robust APIs powered
          by Node.js and FastAPI.
        </p>

        <p className="lg:text-[16px] md:text-[14px] text-[14px] font-[400] text-justify mt-4">
          Lately, my work has focused on AI - integrating intelligent systems,
          building autonomous agents, and creating experiences that push the
          boundaries of what software can do. I thrive on transforming complex
          ideas into impactful, human-centered technology.
        </p>
      </div>
      <div className="flex flex-col mt-[20px]">
        <p className="text-[20px] font-[600] mb-4 text-black dark:text-white">
          What I Do
        </p>

        <div className="flex flex-wrap gap-3">
          {[
            {
              name: "Frontend Development",
              icon: <Code2 className="w-4 h-4 text-[#a684ff]" />, // amber
            },
            {
              name: "Backend Engineering",
              icon: <Server className="w-4 h-4 text-[#ff8904]" />, // green
            },
            {
              name: "AI Agents",
              icon: <Bot className="w-4 h-4 text-[#05df72]" />, // blue
            },
          ].map((item, index) => (
            <span
              key={index}
              className="flex items-center gap-2 cursor-pointer px-5 py-2.5 text-[14px] font-[600] rounded-[8px] border-[2px] border-gray-300 text-gray-800 dark:text-gray-100 hover:bg-darkgray hover:border-primarycyan transition-all duration-300"
            >
              {item.icon}
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
