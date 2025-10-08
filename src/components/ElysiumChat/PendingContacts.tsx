"use client";

import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import {
  setCurrentView,
  setCurrentUserInView,
} from "@/store/reducers/elysiumChatNavigationSlice";
import Logo from "./LogoComponent";
import { ArrowLeft } from "lucide-react";
import Cookies from "js-cookie";
import nodeExpressAxios from "@/utils/node_express_apis";
import PendingContactCard from "./PendingContactCard";

interface FoundUser {
  email: string;
  first_name: string;
  last_name: string;
  profile_image_url?: string | null;
  createdAt: string;
  is_contact: boolean;
}

export default function PendingContacts() {
  const currentUserInView = useAppSelector(
    (state) => state.elysiumChatNavigation.currentUserInView
  );
  const dispatch = useAppDispatch();

  const [foundUser, setFoundUser] = useState<FoundUser | null>(null);

  useEffect(() => {
    if (!currentUserInView) return;

    const fetchUser = async () => {
      try {
        const token = Cookies.get("elysium_chat_session_token");
        const res = await nodeExpressAxios.post(
          "/v1/elysium-chat/fetch-user-by-email",
          { email: currentUserInView },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const data: any = res.data;
        if (data.success) {
          setFoundUser(data.user);
        }
      } catch (err) {
        console.error("Failed to fetch user:", err);
      }
    };

    fetchUser();
  }, [currentUserInView]);

  const handleShowAllPendingContacts = () => {
    dispatch(setCurrentView("my_chats"));
    dispatch(setCurrentUserInView(""));
    setFoundUser(null);
  };

  return (
    <div className="w-full flex flex-col items-start justify-between">
      <Logo />
      <div className="w-full py-[10px] mt-[10px]">
        <div className="flex items-center justify-start gap-[10px]">
          <div
            className="flex items-center justify-center hover:text-eclightblue transition-all duration-300 cursor-pointer"
            onClick={handleShowAllPendingContacts}
          >
            <ArrowLeft className="cursor-pointer" size={20} />
          </div>
          <p className="text-[14px] font-[600] text-ecdarkblue">
            Pending Contact Requests
          </p>
        </div>
      </div>

      {foundUser && <PendingContactCard foundUser={foundUser} />}
    </div>
  );
}
