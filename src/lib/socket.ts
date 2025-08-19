"use client";

import { io, Socket } from "socket.io-client";
import Cookies from "js-cookie";

const SOCKET_URL = process.env.NEXT_PUBLIC_EXPRESS_SERVER_BASE_URL!;
let socket: Socket | null = null;

export function getSocket(): Socket {
  if (typeof window === "undefined") {
    throw new Error("getSocket() must be called on the client");
  }
  if (!socket) {
    const token = Cookies.get("elysium_chat_session_token") || "";
    socket = io(SOCKET_URL, {
      transports: ["websocket"],
      auth: { token: `Bearer ${token}` },
      autoConnect: true,
      reconnection: true,
    });
  }
  return socket;
}

export function setSocketAuthToken(token: string) {
  const s = getSocket();
  s.auth = { token: `Bearer ${token}` };
  // Force re-auth on next connect attempt if needed
  if (!s.connected) s.connect();
}

export function disconnectSocket() {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
}
