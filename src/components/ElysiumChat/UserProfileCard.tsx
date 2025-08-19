"use client";

import Image from "next/image";
import { UserRoundPlus, UserMinus, UserX } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface FoundUser {
  email: string;
  first_name: string;
  last_name: string;
  profile_image_url?: string | null;
  createdAt: string;
  is_contact: boolean;
  status: "pending" | "accepted" | "blocked" | null;
}

interface UserProfileCardProps {
  foundUser: FoundUser;
}

import { getSocket } from "@/lib/socket";
import { formatDate } from "@/utils/formatDate";

export default function UserProfileCard({ foundUser }: UserProfileCardProps) {
  const socket = getSocket();

  const getIconAndTooltip = () => {
    if (!foundUser.is_contact) {
      return { icon: <UserRoundPlus size={18} />, tooltip: "Add Contact" };
    }

    switch (foundUser.status) {
      case "pending":
        return { icon: <UserMinus size={18} />, tooltip: "Withdraw" };
      case "accepted":
        return { icon: <UserMinus size={18} />, tooltip: "Unfriend" };
      case "blocked":
        return { icon: <UserX size={18} />, tooltip: "Unblock" };
      default:
        return { icon: <UserRoundPlus size={18} />, tooltip: "Add Contact" };
    }
  };

  const handleContactAction = (foundUser: FoundUser) => {
    if (!foundUser.is_contact) {
      console.log("Adding to contacts");
      socket.emit("add-to-contacts", {
        alias_name: `${foundUser.first_name} ${foundUser.last_name}`,
        contact_email: foundUser.email,
      });
      return;
    }

    switch (foundUser.status) {
      case "pending":
        console.log("Withdrawing contact request");
        socket.emit("withdraw-contact-request", {
          contact_email: foundUser.email,
        });
        break;
      case "accepted":
        console.log("Removing contact");
        socket.emit("remove-contact", {
          contact_email: foundUser.email,
        });
        break;
      case "blocked":
        console.log("Unblocking contact");
        socket.emit("unblock-contact", {
          contact_email: foundUser.email,
        });
        break;
      default:
        console.warn("Unknown contact action");
    }
  };

  const { icon, tooltip } = getIconAndTooltip();

  return (
    <div className="w-full flex items-center justify-center mt-[20px]">
      <div className="mt-3 p-4 rounded-xl flex flex-col items-center gap-3 shadow-md bg-gradient-to-t from-ecdarkblue to-eclightblue text-white w-full">
        {/* Profile Image */}
        <div className="w-16 h-16 relative rounded-full overflow-hidden">
          {foundUser.profile_image_url ? (
            <Image
              src={foundUser.profile_image_url}
              alt={`${foundUser.first_name} ${foundUser.last_name}`}
              fill
              sizes="120px"
              className="object-cover"
              quality={100}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white text-lg font-semibold">
              {foundUser.first_name?.[0] || "?"}
            </div>
          )}
        </div>

        {/* Name, Email, CreatedAt */}
        <div className="text-center">
          <p className="text-sm font-semibold">
            {foundUser.first_name} {foundUser.last_name}
          </p>
          <p className="text-xs opacity-80">{foundUser.email}</p>
          <p className="text-[10px] opacity-70 mt-1">
            Joined {formatDate(foundUser.createdAt)}
          </p>
        </div>

        {/* Action Button with Styled Tooltip */}
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={() => handleContactAction(foundUser)}
                className="p-2 mt-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center"
              >
                {icon}
              </button>
            </TooltipTrigger>
            <TooltipContent
              side="right"
              className="text-[12px] font-[400] bg-eclightblue text-white"
            >
              {tooltip}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}
