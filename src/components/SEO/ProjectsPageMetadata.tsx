import type { Metadata } from "next";

export function getProjectsPageMetadata(): Metadata {
  return {
    title: "Projects",
    description:
      "Explore projects by Shubhojeet Ghosh including Legitt Copilot, AI Native Editor, and Legittmate AI. Each project represents unique challenges in AI, frontend, and backend development.",
    keywords: [
      "Shubhojeet Ghosh Projects",
      "Software Engineering Projects",
      "AI Projects",
      "Full Stack Projects",
      "Legitt Copilot",
      "AI Native Editor",
      "Legittmate AI",
      "React Projects",
      "Next.js Projects",
      "Python Projects",
    ],
    openGraph: {
      title: "Projects | Shubhojeet Ghosh",
      description:
        "Explore projects by Shubhojeet Ghosh including Legitt Copilot, AI Native Editor, and Legittmate AI. Each project represents unique challenges in AI, frontend, and backend development.",
      url: "https://sgdevstudio.in/work/projects",
      siteName: "sgdevstudio.in",
      images: [
        {
          url: "https://cdn.sgdevstudio.in/assets/og-image.png",
          width: 1200,
          height: 630,
          alt: "Shubhojeet Ghosh - Projects",
        },
      ],
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: "Projects | Shubhojeet Ghosh",
      description:
        "Explore projects by Shubhojeet Ghosh including Legitt Copilot, AI Native Editor, and Legittmate AI. Each project represents unique challenges in AI, frontend, and backend development.",
      creator: "@devshubhojeet",
      images: ["https://cdn.sgdevstudio.in/assets/og-image.png"],
    },
    alternates: {
      canonical: "https://sgdevstudio.in/work/projects",
    },
  };
}
