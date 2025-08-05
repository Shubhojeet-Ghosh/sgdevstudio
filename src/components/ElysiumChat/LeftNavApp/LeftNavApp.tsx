import { usePathname } from "next/navigation";
import { MessageSquareText, LogOut } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function LeftNavApp() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    Cookies.remove("elysium_chat_session_token");
    router.push("/elysium-chat/auth/login");
  };

  return (
    <TooltipProvider delayDuration={100}>
      <div className="fixed top-0 left-0 h-[100dvh] rounded-r-[12px] bg-ecdarkblue flex w-[70px] py-[20px] flex-col justify-between">
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-center">
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className={`flex items-center justify-center p-[6px] rounded-full transition-all duration-300 cursor-pointer
                    ${
                      pathname === "/elysium-chat"
                        ? "bg-white"
                        : "hover:bg-ecpink"
                    }
                  `}
                >
                  <MessageSquareText className="text-ecnavy" size={18} />
                </div>
              </TooltipTrigger>
              <TooltipContent
                side="right"
                className="text-[12px] font-[400] bg-eclightblue text-white"
              >
                Conversations
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
        <div className="text-white">
          <div className="flex flex-col w-full gap-[16px]">
            <div className="flex items-center justify-center">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    className={`flex items-center justify-center p-[6px] rounded-full transition-all duration-300 cursor-pointer hover:bg-white text-white hover:text-ecnavy`}
                    onClick={handleLogout}
                  >
                    <LogOut size={20} />
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="text-[12px] font-[400] bg-eclightblue text-white"
                >
                  Logout
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
