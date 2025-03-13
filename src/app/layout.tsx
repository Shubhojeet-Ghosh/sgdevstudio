import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta", // Optional for CSS usage
});

export const metadata: Metadata = {
  title: "Shubhojeet Ghosh | Full Stack AI Engineer",
  description:
    "Shubhojeet this side, I am a full stack developer with deep interest and knowledge in Artificial Intelligent(AI).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} antialiased font-jakarta`}>
        {children}
      </body>
    </html>
  );
}
