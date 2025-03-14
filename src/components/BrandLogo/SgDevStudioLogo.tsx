import React from "react";
import Link from "next/link";

const SgLogo = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <Link className="font-[700]" href="/">
          <span className="text-primarycyan">sg</span>devstudio
        </Link>
      </div>
    </>
  );
};

export default SgLogo;
