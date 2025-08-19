"use client";

import { useEffect } from "react";
import { getSocket } from "@/lib/socket";
import { toast } from "sonner";
import {
  setCurrentView,
  setCurrentUserInView,
} from "@/store/reducers/elysiumChatNavigationSlice";
import { useAppDispatch } from "@/store";

export default function ContactsSocketListener() {
  const socket = getSocket();
  const dispatch = useAppDispatch();
  const handleNewIncomingContactRequest = (data: any) => {
    console.log(
      "[Socket:new-incoming-contact-request] New contact request from:",
      data
    );
    dispatch(setCurrentView("pending_contacts"));
    dispatch(setCurrentUserInView(data.email));
  };

  useEffect(() => {
    if (!socket) return;

    socket.on("new-contact-request", (data) => {
      console.log(
        "[Socket:new-contact-request] New contact request from:",
        data
      );
      toast(`New contact request`, {
        description: `${data.from || ""} wants to connect...`,
        action: {
          label: "View",
          onClick: () => handleNewIncomingContactRequest(data),
        },
      });
    });

    socket.on("contact-error", (data) => {
      console.log("[Socket:contact-error] Something went wrong:", data);
      toast("Error", {
        description:
          data.message || "Something went wrong while sending the request",
      });
    });

    return () => {
      socket.off("new-contact-request");
      socket.off("contact-error");
    };
  }, [socket]);

  return null; // This component only runs listeners
}
