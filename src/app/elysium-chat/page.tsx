import SocketInitializer from "@/components/socket/ElysiumSocketInitializer";

import LeftNavApp from "@/components/ElysiumChat/LeftNavApp/LeftNavApp";
import ProfileCompletionPrompt from "@/components/ElysiumChat/auth/ProfileCompletionPrompt";
import SidebarLayout from "@/components/ElysiumChat/SidebarLayout";
import ContactsSocketListener from "@/components/ElysiumChat/ContactsSocketListener";

export default function ElysiumChatAuthPage() {
  return (
    <>
      <div className="flex flex-col items-start justify-center w-full px-[18px] py-[10px]">
        <LeftNavApp />
      </div>
      <ProfileCompletionPrompt />
      <SocketInitializer />
      <SidebarLayout />
      <ContactsSocketListener />
    </>
  );
}
