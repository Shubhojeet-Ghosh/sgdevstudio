"use client";
import React from "react";
import { Mail } from "lucide-react";

interface ContactItem {
  label: string;
  value: string | JSX.Element;
}

const contactDetails: ContactItem[] = [
  { label: "Address", value: "Noida, India" },
  { label: "Timezone", value: "GMT + 5:30" },
  {
    label: "E-mail",
    value: (
      <a
        href="mailto:shubhojeet.official@gmail.com"
        className="text-pastelprimarygreen hover:underline flex items-center gap-2"
      >
        <Mail size={16} /> shubhojeet.official@gmail.com
      </a>
    ),
  },
];

export default function ContactDetailsTable() {
  return (
    <div className="w-full bg-transparent text-darkerblack dark:text-brightgray text-[14px]">
      <div className="border rounded-lg overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b font-[500]">
              <th className="px-4 py-[8px] min-w-[120px]">Contact</th>
              <th className="px-4 py-[8px] min-w-[120px]">Detail</th>
            </tr>
          </thead>
          <tbody className="font-[400]">
            {contactDetails.map((item, index) => (
              <tr key={index}>
                <td className="px-4 py-[8px] ">{item.label}</td>
                <td className="px-4 py-[8px]">{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
