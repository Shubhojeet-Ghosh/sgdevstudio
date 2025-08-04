import { NextRequest, NextResponse } from "next/server";

// Define public routes (add any public paths here)
const PUBLIC_ROUTES = ["/elysium-chat/auth/login", "/elysium-chat/auth/verify"];

const HOME_ROUTE = "/elysium-chat"; // where to send logged-in users trying to access public routes

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  console.log("Current page:", path);

  const token = request.cookies.get("elysium_chat_session_token")?.value;

  // If the path is public
  if (PUBLIC_ROUTES.includes(path)) {
    // If user is logged in, redirect to home
    if (token) {
      const homeUrl = new URL(HOME_ROUTE, request.url);
      return NextResponse.redirect(homeUrl);
    }
    // If user is not logged in, allow
    return NextResponse.next();
  }

  // For all other (private) routes, require token
  if (!token) {
    const loginUrl = new URL("/elysium-chat/auth/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/elysium-chat/:path*"],
};
