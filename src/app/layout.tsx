import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

import dynamic from "next/dynamic";

const ReduxProvider = dynamic(() => import("@/store/redux-provider"), {
  ssr: false, // Ensures Redux runs only on the client
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta", // Optional for CSS usage
});

export const metadata: Metadata = {
  title: "Shubhojeet Ghosh | Full Stack AI Engineer",
  description:
    "Shubhojeet this side, I am a full stack developer with deep interest and knowledge in Artificial Intelligent(AI) and agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} antialiased font-jakarta`}>
        <ReduxProvider> {children}</ReduxProvider>
        <Toaster />
      </body>
    </html>
  );
}
