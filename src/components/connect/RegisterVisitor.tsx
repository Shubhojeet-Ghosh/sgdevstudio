"use client";

import { useEffect } from "react";
import { registerVisitor } from "@/services/connectService"; // adjust import path if needed

export default function RegisterVisitor() {
  useEffect(() => {
    const saved =
      typeof window !== "undefined" && localStorage.getItem("client_id");

    if (saved) {
      return;
    }

    // otherwise, call API
    const fetchVisitor = async () => {
      try {
        const data: any = await registerVisitor();
        if (data?.success && data?.client_id) {
          localStorage.setItem("client_id", data.client_id);
          //   console.log("Registered visitor, saved client_id:", data.client_id);
        } else {
          //   console.warn("registerVisitor returned no client_id", data);
        }
      } catch (error) {
        console.error("Failed to register visitor:", error);
      }
    };

    fetchVisitor();
  }, []);

  return null;
}
