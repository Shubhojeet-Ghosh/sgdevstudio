"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ElysiumChatAuthPage() {
  const router = useRouter();
  useEffect(() => {
    router.push("/elysium-chat/auth/login");
  }, [router]);

  return null;
}
