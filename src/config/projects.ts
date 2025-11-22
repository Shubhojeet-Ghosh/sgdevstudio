export interface Project {
  project_image_url: string;
  project_url: string;
  project_name: string;
  project_description: string;
  image_description: string;
  project_points: string[];
  tech_stack_used: string[];
  gradient_colors: {
    base: string;
    secondary: string;
  };
}

export const projectsData: Project[] = [
  {
    project_image_url:
      "https://cdn.sgdevstudio.in/assets/legittai_landing_page_lana.png",
    project_url: "https://legittai.com/",
    project_name: "Legitt Copilot",
    project_description:
      "A smart conversational agent designed to help users access insights from Legitt AI's features, contract data, and CRM pipeline effortlessly.",
    image_description:
      "A smart conversational agent that delivers effortless insights across Legitt AI’s features, contract data, and CRM pipeline.",
    project_points: [
      "Chat with 100k+ contracts",
      "Search 1M CRM records",
      "Instant app feature guidance",
      "Unified AI conversational search",
    ],
    tech_stack_used: [
      "PythonIcon",
      "QdrantIcon",
      "ReactIcon",
      "MongoDbIcon",
      "RedisIcon",
    ],
    gradient_colors: {
      base: "purple-500",
      secondary: "pink-500",
    },
  },
  {
    project_image_url:
      "https://cdn.sgdevstudio.in/assets/ai_native_editor.png ",
    project_url: "https://app2.legittai.com",
    project_name: "AI Native Editor",
    project_description:
      "A modern collaborative editor built using TipTap and ProseMirror, featuring real-time teamwork and AI-powered writing assistance for a smooth and intuitive editing experience.",
    image_description:
      "A modern AI-powered document editing interface showcasing collaborative tools, real-time updates, and intelligent writing assistance.",
    project_points: [
      "AI writing assistance for generating and refining content.",
      "Real-time updates with Socket.IO",
      "Track Changes support to review, accept, or reject edits.",
      "Custom editor extensions like pricing tables, templates, and smart blocks.",
      "Advanced Variables support for auto-filling dynamic fields across documents.",
    ],
    tech_stack_used: [
      "NodeJsIcon",
      "ReactIcon",
      "SocketIoIcon",
      "MySqlIcon",
      "MongoDbIcon",
      "RedisIcon",
    ],
    gradient_colors: {
      base: "blue-500",
      secondary: "cyan-500",
    },
  },
  {
    project_image_url:
      "https://cdn.sgdevstudio.in/assets/legittmateai_landing_page.png",
    project_url: "https://legittmateai.com/",
    project_name: "Legittmate AI",
    project_description:
      "A powerful AI chat platform that lets users create an embeddable chatbot for their website. The agent can be trained on website content, uploaded documents, and sources like S3, while offering real-time visitor tracking, team-to-visitor live chat, and automatic lead capture based on conversation context.",
    image_description:
      "An AI agent builder that lets users create and deploy intelligent website chatbots with live visitor insights.",
    project_points: [
      "Create AI agents that can be embedded directly into any website.",
      "Train chatbots on custom data such as website content, uploaded files, and cloud sources like S3.",
      "Real-time visitor tracking to monitor user activity and engagement as it happens.",
      "Team handoff support, allowing team members to chat directly with visitors inside the platform.",
      "Automatic lead capture, where the AI agent identifies and collects visitor details based on conversation context.",
    ],
    tech_stack_used: [
      "NextJsIcon",
      "PythonIcon",
      "RedisIcon",
      "MongoDbIcon",
      "NodeJsIcon",
      "TypeScriptIcon",
      "TailwindCssIcon",
      "SocketIoIcon",
    ],
    gradient_colors: {
      base: "green-500",
      secondary: "emerald-500",
    },
  },
];
