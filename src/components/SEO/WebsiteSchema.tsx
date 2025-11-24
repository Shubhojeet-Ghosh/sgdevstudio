// components/SEO/WebsiteSchema.tsx

import React from "react";

export default function WebsiteSchema() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://sgdevstudio.in";

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Shubhojeet Ghosh - Senior Software Engineer",
    url: baseUrl,
    description:
      "Senior Software Engineer specializing in AI-powered systems, intelligent agents, and end-to-end web applications.",
    publisher: {
      "@type": "Person",
      name: "Shubhojeet Ghosh",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

