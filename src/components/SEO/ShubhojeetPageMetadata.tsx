import type { Metadata } from "next";

export function getShubhojeetPageMetadata(): Metadata {
  return {
    title: "Shubhojeet",
    description:
      "Shubhojeet - Software engineer specializing in AI systems, agents, and web applications.",
    keywords: [
      "Shubhojeet",
      "Shubhojeet Software Engineer",
      "Shubhojeet Developer",
      "Shubhojeet AI Engineer",
      "Senior Software Engineer Shubhojeet",
      "Full Stack Developer Shubhojeet",
      "AI Expert Shubhojeet",
      "Intelligent Systems Developer",
      "Software Engineer India",
      "AI Engineer India",
      "sgdevstudio",
    ],
    openGraph: {
      title: "Shubhojeet | Senior Software Engineer",
      description:
        "Shubhojeet - Senior Software Engineer specializing in AI-powered systems, intelligent agents, and end-to-end web applications. Expert in building intelligent systems.",
      url: "https://sgdevstudio.in/shubhojeet",
      siteName: "sgdevstudio.in",
      images: [
        {
          url: "https://cdn.sgdevstudio.in/assets/og-image.png",
          width: 1200,
          height: 630,
          alt: "Shubhojeet - Senior Software Engineer",
        },
      ],
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: "Shubhojeet | Senior Software Engineer",
      description:
        "Senior Software Engineer specializing in AI-powered systems, intelligent agents, and end-to-end web applications.",
      creator: "@devshubhojeet",
      images: ["https://cdn.sgdevstudio.in/assets/og-image.png"],
    },
    alternates: {
      canonical: "https://sgdevstudio.in/shubhojeet",
    },
  };
}
