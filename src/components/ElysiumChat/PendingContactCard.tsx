"use client";

import Image from "next/image";
import { Check, Pencil } from "lucide-react";
import { toast } from "sonner";
import { getSocket } from "@/lib/socket";

import { formatDate } from "@/utils/formatDate";
import { setCurrentView } from "@/store/reducers/elysiumChatNavigationSlice";
import { useAppDispatch } from "@/store";
import { useState, useRef, useEffect } from "react";
import TransparentInput from "@/components/inputs/TransparentInput";

interface FoundUser {
  email: string;
  first_name: string;
  last_name: string;
  profile_image_url?: string | null;
  createdAt: string;
  is_contact: boolean;
}

interface PendingContactCardProps {
  foundUser: FoundUser;
}

export default function PendingContactCard({
  foundUser,
}: PendingContactCardProps) {
  const socket = getSocket();
  const dispatch = useAppDispatch();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isEditingAlias, setIsEditingAlias] = useState(false);
  const [alias, setAlias] = useState(
    `${foundUser.first_name} ${foundUser.last_name}`
  );

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsEditingAlias(false);
      }
    };

    if (isEditingAlias) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isEditingAlias]);

  const handleAcceptContact = () => {
    socket.emit("accept-to-connect", {
      alias_name: alias.trim().length > 0 ? alias.trim() : foundUser.first_name,
      contact_email: foundUser.email,
    });
    toast.success("Contact accepted", {
      description: `You are now connected with ${alias}`,
      duration: 3000,
    });
    dispatch(setCurrentView("new_conversation"));
  };
  useEffect(() => {
    if (isEditingAlias && inputRef.current) {
      inputRef.current.select();
    }
  }, [isEditingAlias]);

  return (
    <div className="w-full flex items-center justify-center mt-[20px]">
      <div className="p-5 rounded-xl flex flex-col items-center gap-[4px] shadow-md bg-gradient-to-t from-ecdarkblue to-eclightblue text-white w-full">
        {/* Profile Image */}
        <div className="w-20 h-20 relative rounded-full overflow-hidden bg-white/20 border-2 border-white/40">
          {foundUser.profile_image_url ? (
            <Image
              src={foundUser.profile_image_url}
              alt={`${foundUser.first_name} ${foundUser.last_name}`}
              fill
              sizes="80px"
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white text-[14px] font-semibold">
              {foundUser.first_name?.[0] || "?"}
            </div>
          )}
        </div>

        {/* User Info */}
        <div
          ref={wrapperRef}
          className="text-center flex items-center gap-[8px]"
        >
          {isEditingAlias ? (
            <TransparentInput
              ref={inputRef}
              value={alias}
              onChange={(e) => setAlias(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") setIsEditingAlias(false);
              }}
              className="text-[14px] font-semibold"
            />
          ) : (
            <>
              <p className="text-[14px] font-semibold">{alias}</p>
              <Pencil
                size={14}
                className="cursor-pointer opacity-80 hover:opacity-100"
                onClick={() => setIsEditingAlias(true)}
              />
            </>
          )}
        </div>

        <p className="text-xs opacity-80">{foundUser.email}</p>
        <p className="text-[11px] opacity-70 mt-1">
          Joined {formatDate(foundUser.createdAt)}
        </p>

        {/* Accept Button */}
        <button
          onClick={handleAcceptContact}
          className="flex items-center justify-center gap-2 px-3 py-2 mt-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors text-[12px]"
        >
          <Check size={14} />
          <p className="font-[500]">Accept</p>
        </button>
      </div>
    </div>
  );
}
