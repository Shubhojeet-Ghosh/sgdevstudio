# Projects Section

This directory contains the components for displaying the projects section of the portfolio.

## Components

### ProjectsSection.tsx

The main component that renders the entire projects section with:

- Section header with animated title
- List of all projects
- Call-to-action section at the bottom

### ProjectCard.tsx

Individual project card component that displays:

- Project image (clickable to visit project)
- Project name and description
- Key features list
- Tech stack with icons
- Visit project button

## Data Structure

Projects data is stored in `src/config/projects.ts` with the following structure:

```typescript
interface Project {
  project_image_url: string;
  project_url: string;
  project_name: string;
  project_description: string;
  project_points: string[];
  tech_stack_used: string[];
}
```

## Features

- **Responsive Design**: Works on all screen sizes
- **Smooth Animations**: Uses Framer Motion for scroll-triggered animations
- **Alternating Layout**: Projects alternate between left and right image placement
- **Interactive Elements**: Hover effects and smooth transitions
- **Tech Stack Icons**: Displays technology icons with hover effects
- **External Links**: Direct links to project repositories or live demos

## Usage

Simply import and use the `ProjectsSection` component in your page:

```tsx
import ProjectsSection from "@/components/Projects/ProjectsSection";

// In your component
<ProjectsSection />;
```

## Customization

To add new projects or modify existing ones, update the `projectsData` array in `src/config/projects.ts`.

To add new tech stack icons, make sure they are exported from `@/components/TechStacks/Icons` and add them to the `iconMap` in `ProjectCard.tsx`.
