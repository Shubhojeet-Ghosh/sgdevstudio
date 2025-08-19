"use client";
import { useEffect } from "react";
import { getSocket } from "@/lib/socket";

export default function SocketInitializer() {
  useEffect(() => {
    const socket = getSocket();

    const onConnect = () => {
      console.log("[Socket] Connected:", socket.id);
      socket.emit("ping", { message: "Hello from client" });
    };
    const onPong = (res: any) => console.log("[Socket] Received:", res.message);

    socket.on("connect", onConnect);
    socket.on("pong", onPong);

    // Important: don't disconnect here if you want it shared app-wide.
    return () => {
      socket.off("connect", onConnect);
      socket.off("pong", onPong);
    };
  }, []);

  return null;
}
