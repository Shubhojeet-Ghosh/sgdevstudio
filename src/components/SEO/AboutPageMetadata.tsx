import type { Metadata } from "next";

export function getAboutPageMetadata(): Metadata {
  return {
    title: "About Me",
    description:
      "Learn more about Shubhojeet Ghosh, a senior software engineer specializing in AI-powered systems, intelligent agents, and end-to-end web applications. Bringing ideas to life through intelligent systems.",
    keywords: [
      "About Shubhojeet Ghosh",
      "Senior Software Engineer",
      "AI Engineer",
      "Full Stack Developer",
      "Intelligent Systems",
      "Software Development",
    ],
    openGraph: {
      title: "About Me | Shubhojeet Ghosh",
      description:
        "Learn more about Shubhojeet Ghosh, a senior software engineer specializing in AI-powered systems and intelligent agents.",
      url: "https://sgdevstudio.in/about",
      siteName: "sgdevstudio.in",
      images: [
        {
          url: "https://cdn.sgdevstudio.in/assets/og-image.png",
          width: 1200,
          height: 630,
          alt: "Shubhojeet Ghosh - About Me",
        },
      ],
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: "About Me | Shubhojeet Ghosh",
      description:
        "Senior Software Engineer specializing in AI-powered systems, intelligent agents, and end-to-end web applications.",
      creator: "@devshubhojeet",
      images: ["https://cdn.sgdevstudio.in/assets/og-image.png"],
    },
    alternates: {
      canonical: "https://sgdevstudio.in/about",
    },
  };
}
