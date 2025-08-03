import { NextRequest, NextResponse } from "next/server";

// Define public routes (add any public paths here)
const PUBLIC_ROUTES = ["/elysium-chat/auth/login", "/elysium-chat/auth/verify"];

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  console.log("Current page:", path);

  // Allow public routes without a token
  if (PUBLIC_ROUTES.includes(path)) {
    return NextResponse.next();
  }

  // For other (private) routes, require a token
  const token = request.cookies.get("elysium_chat_session_token")?.value;

  if (!token) {
    const loginUrl = new URL("/elysium-chat/auth/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/elysium-chat/:path*"],
};
