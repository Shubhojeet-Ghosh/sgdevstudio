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
  metadataBase: new URL("https://sgdevstudio.in"),
  title: {
    default: "Shubhojeet Ghosh | Senior Software Engineer",
    template: "%s | Shubhojeet Ghosh",
  },
  description:
    "Shubhojeet this side, I am a senior software engineer specialized in AI-powered systems, intelligent agents, and end-to-end web applications.",
  keywords: [
    "Shubhojeet Ghosh",
    "Senior Software Engineer",
    "Intelligent Agents",
    "Advanced RAG Applications",
  ],
  // Open Graph (used by LinkedIn, Slack, WhatsApp, etc.)
  openGraph: {
    title: "Shubhojeet Ghosh | Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in AI-powered systems, intelligent agents, and end-to-end web applications.",
    url: "https://sgdevstudio.in",
    siteName: "sgdevstudio.in",
    images: [
      {
        url: "https://cdn.sgdevstudio.in/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shubhojeet Ghosh - Senior Software Engineer",
      },
    ],
    type: "website",
    locale: "en_IN",
  },

  // Twitter card
  twitter: {
    card: "summary_large_image",
    title: "Shubhojeet Ghosh | Senior Software Engineer",
    description:
      "Senior Software Engineer - AI-powered systems, intelligent agents, full-stack web applications.",
    creator: "@devshubhojeet", // <-- replace with your X/Twitter handle
    images: ["https://cdn.sgdevstudio.in/assets/og-image.png"],
  },

  // small helpful extras:
  alternates: { canonical: "https://sgdevstudio.in" },
  icons: { icon: "/favicon.ico" },
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
