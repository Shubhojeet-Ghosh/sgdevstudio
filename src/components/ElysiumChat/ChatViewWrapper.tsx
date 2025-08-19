"use client";

import { AnimatePresence, motion } from "framer-motion";
import MyChats from "./MyChats";
import NewConversation from "./NewConversation";
import AddNewContact from "./AddNewContact";
import PendingContacts from "./PendingContacts";
import { useAppSelector } from "@/store";

export default function ChatViewWrapper() {
  const currentView = useAppSelector(
    (state) => state.elysiumChatNavigation.currentView
  );

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        {currentView === "my_chats" && (
          <motion.div
            key="my_chats"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute w-full h-full"
          >
            <MyChats />
          </motion.div>
        )}

        {currentView === "new_conversation" && (
          <motion.div
            key="new_conversation"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute w-full h-full"
          >
            <NewConversation />
          </motion.div>
        )}

        {currentView === "add_new_contact" && (
          <motion.div
            key="add_new_contact"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute w-full h-full"
          >
            <AddNewContact />
          </motion.div>
        )}

        {currentView === "pending_contacts" && (
          <motion.div
            key="pending_contacts"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute w-full h-full"
          >
            <PendingContacts />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
