"use client";

import { ArrowLeft, UserRoundPlus, Users } from "lucide-react";

import { useAppDispatch } from "@/store";
import { setCurrentView } from "@/store/reducers/elysiumChatNavigationSlice";

import Logo from "./LogoComponent";

export default function NewConversation() {
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="w-full flex flex-col items-start justify-between">
        <Logo />

        <div className="w-full py-[10px] mt-[10px]">
          <div className="flex items-center justify-start gap-[10px]">
            <div className="flex items-center justify-center hover:text-eclightblue transition-all duration-300 cursor-pointer">
              <ArrowLeft
                className="cursor-pointer"
                size={20}
                onClick={() => dispatch(setCurrentView("my_chats"))}
              />
            </div>

            <p className="text-[14px] font-[600] text-ecdarkblue">New Chat</p>
          </div>
          <div className="flex flex-col items-start justify-start mt-[20px]">
            <div className="flex items-start justify-start w-full">
              <div
                className="flex items-center justify-start gap-[20px] transition-all duration-300 cursor-pointer hover:bg-ecnude p-[10px] rounded-[6px] w-full"
                onClick={() => dispatch(setCurrentView("add_new_contact"))}
              >
                <div className="h-[35px] w-[35px] overflow-hidden flex items-center justify-center rounded-full p-[8px] bg-ecnavy text-white transition-all duration-300 cursor-pointer">
                  <UserRoundPlus className="cursor-pointer" size={24} />
                </div>

                <p className="text-[14px] font-[500] text-ecdarkblue">
                  New contact
                </p>
              </div>
            </div>
            <div className="flex items-start justify-start w-full">
              <div
                className="flex items-center justify-start gap-[20px] transition-all duration-300 cursor-pointer hover:bg-ecnude p-[10px] rounded-[6px] w-full"
                onClick={() => dispatch(setCurrentView("pending_contacts"))}
              >
                <div className="h-[35px] w-[35px] overflow-hidden flex items-center justify-center rounded-full p-[8px] bg-ecnavy text-white transition-all duration-300 cursor-pointer">
                  <Users className="cursor-pointer" size={24} />
                </div>

                <p className="text-[14px] font-[500] text-ecdarkblue">
                  Pending contact requests
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
