"use client";
import Logo from "./LogoComponent";
import { MessageSquarePlus } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { useAppDispatch } from "@/store";
import { setCurrentView } from "@/store/reducers/elysiumChatNavigationSlice";

export default function MyChats() {
  const dispatch = useAppDispatch();

  return (
    <TooltipProvider delayDuration={100}>
      <div className="w-full flex flex-row items-center justify-between   ">
        <Logo />
        <Tooltip>
          <TooltipTrigger asChild>
            <MessageSquarePlus
              className="text-ecdarkblue cursor-pointer hover:text-eclightblue transition-all duration-300"
              size={24}
              onClick={() => dispatch(setCurrentView("new_conversation"))}
            />
          </TooltipTrigger>
          <TooltipContent
            side="right"
            className="text-[12px] font-[400] bg-eclightblue text-white"
          >
            New Conversation
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
