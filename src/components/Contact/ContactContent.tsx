import React from "react";

import ContactDetailsTable from "@/components/Contact/ContactDetailsTable";
import SocialMediaTable from "@/components/Contact/SocialMediaTable";

export default function ContactContent() {
  return (
    <div className="flex flex-col justify-center dark:text-brightgray text-darkerblack lg:border-l-[2px] lg:pl-[120px] w-full lg:w-[70%] text-[16px]">
      <div className="pb-[50px] border-b-[2px]">
        <p>
          Just a friendly reminder, The information shared here is for business
          purposes only. If you have any questions, feel free to reach out to me
          directly on social media.
        </p>

        <p className="mt-[10px]">
          I appreciate your cooperation in using this responsibly!
        </p>
      </div>
      <div className="py-[50px] border-b-[2px]">
        <p className="text-[24px] md:text-[30px] font-[600]">
          Personal Contact
        </p>
        <div className="mt-[20px]">
          {" "}
          <ContactDetailsTable />
        </div>
        <p className="text-[16px] font-[400] mt-[24px]">
          If you need any additional information, feel free to reach out.
        </p>
      </div>
      <div className="py-[50px]">
        <p className="text-[24px] md:text-[30px] font-[600]">Social Media</p>
        <div className="mt-[20px]">
          {" "}
          <SocialMediaTable />
        </div>
      </div>
    </div>
  );
}
