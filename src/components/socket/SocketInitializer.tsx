"use client";
import { useEffect, useRef } from "react";
import io, { Socket } from "socket.io-client";

// Always prefix with NEXT_PUBLIC_ for client envs
const SOCKET_URL = process.env.NEXT_PUBLIC_EXPRESS_SERVER_BASE_URL!;

export default function SocketInitializer() {
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    // Initialize socket connection
    const socket = io(SOCKET_URL, {
      transports: ["websocket"],
    });
    socketRef.current = socket;

    // On connect
    socket.on("connect", () => {
      console.log("[Socket] Connected:", socket.id);
      socket.emit("ping", { message: "Hello from vercel client..." });
      console.log("[Socket] Ping emitted");
    });

    // Listen for pong
    socket.on("pong", (response: { message: string }) => {
      console.log("[Socket] Received", response?.message);
    });

    // Cleanup on unmount
    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
        console.log("[Socket] Disconnected");
      }
    };
  }, []);

  return null; // No UI for now, but you can later provide context/provider here
}
