// components/Logo.jsx
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/elysium-chat"} className="flex items-baseline">
      {/* You can add an icon here if you want */}
      <span className="text-[24px] font-[500] text-pastelprimarygreen tracking-tight">
        Elysium.
      </span>
      <sup className="text-[18px] font-[600] text-ecdarkblue align-super">
        chat
      </sup>
    </Link>
  );
}
