// components/SEO/PersonSchema.tsx

import React from "react";

export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shubhojeet Ghosh",
    jobTitle: "Senior Software Engineer",
    url: "https://sgdevstudio.in",
    image: "https://cdn.sgdevstudio.in/assets/og-image.png", // optional but recommended
    sameAs: [
      "https://github.com/shubhojeet-ghosh", // 🔁 replace with your GitHub
      "https://x.com/devshubhojeet", // your X handle
      "https://www.linkedin.com/in/shubhojeet-ghosh", // LinkedIn URL
    ],
    worksFor: {
      "@type": "Organization",
      name: "Legitt AI",
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
