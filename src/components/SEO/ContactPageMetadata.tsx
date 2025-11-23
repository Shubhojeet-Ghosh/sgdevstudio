import type { Metadata } from "next";

export function getContactPageMetadata(): Metadata {
  return {
    title: "Contact",
    description:
      "Get in touch with Shubhojeet Ghosh. Have a question? Drop me a message on social media, email, or phone. Let's connect and discuss your next project.",
    keywords: [
      "Contact Shubhojeet Ghosh",
      "Software Engineer Contact",
      "AI Engineer Contact",
      "Hire Software Developer",
      "Contact Developer",
      "Get in Touch",
    ],
    openGraph: {
      title: "Contact | Shubhojeet Ghosh",
      description:
        "Get in touch with Shubhojeet Ghosh. Have a question? Drop me a message on social media, email, or phone.",
      url: "https://sgdevstudio.in/work/contact",
      siteName: "sgdevstudio.in",
      images: [
        {
          url: "https://cdn.sgdevstudio.in/assets/og-image.png",
          width: 1200,
          height: 630,
          alt: "Shubhojeet Ghosh - Contact",
        },
      ],
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: "Contact | Shubhojeet Ghosh",
      description:
        "Get in touch with Shubhojeet Ghosh. Have a question? Drop me a message on social media, email, or phone.",
      creator: "@devshubhojeet",
      images: ["https://cdn.sgdevstudio.in/assets/og-image.png"],
    },
    alternates: {
      canonical: "https://sgdevstudio.in/work/contact",
    },
  };
}
