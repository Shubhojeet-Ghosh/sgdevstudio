import React from "react";
import { ExternalLink } from "lucide-react";

interface SocialMediaItems {
  label: string;
  value: string | JSX.Element;
}

const contactDetails: SocialMediaItems[] = [
  {
    label: "LinkedIn",
    value: (
      <a
        href="https://www.linkedin.com/in/shubhojeet-ghosh/"
        className="text-pastelprimarygreen hover:underline flex items-center gap-2 flex-nowrap whitespace-nowrap"
      >
        https://www.linkedin.com/in/shubhojeet-ghosh
        <ExternalLink size={16} />
      </a>
    ),
  },
  {
    label: "GitHub",
    value: (
      <a
        href="https://github.com/shubhojeet-ghosh"
        className="text-pastelprimarygreen hover:underline flex items-center gap-2 flex-nowrap whitespace-nowrap"
      >
        https://github.com/shubhojeet-ghosh
        <ExternalLink size={16} />
      </a>
    ),
  },
];

export default function SocialMediaTable() {
  return (
    <div className="w-full bg-transparent text-darkerblack dark:text-brightgray text-[14px]">
      <div className="border rounded-lg overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b font-[500] flex-nowrap whitespace-nowrap">
              <th className="px-4 py-[8px]">Social Media</th>
              <th className="px-4 py-[8px]">Profile URL</th>
            </tr>
          </thead>
          <tbody className="font-[400]">
            {contactDetails.map((item, index) => (
              <tr key={index}>
                <td className="px-4 py-[8px]">{item.label}</td>
                <td className="px-4 py-[8px]">
                  <div className="flex items-center gap-2 flex-nowrap whitespace-nowrap">
                    {item.value}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
