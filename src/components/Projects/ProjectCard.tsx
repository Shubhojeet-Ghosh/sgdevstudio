"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "@/config/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  gradientClass?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Helper function to get RGB values for colors
  const getColorValue = (colorName: string) => {
    const colorMap: { [key: string]: string } = {
      "purple-500": "147, 51, 234",
      "blue-500": "59, 130, 246",
      "green-500": "34, 197, 94",
      "orange-500": "249, 115, 22",
      "indigo-500": "99, 102, 241",
      "pink-500": "236, 72, 153",
      "cyan-500": "6, 182, 212",
      "emerald-500": "16, 185, 129",
      "amber-500": "245, 158, 11",
    };
    return colorMap[colorName] || "107, 114, 128"; // fallback to gray
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-8 lg:py-0">
      <motion.a
        href={project.project_url}
        target="_blank"
        rel="noopener noreferrer"
        className="block group w-full max-w-2xl"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <div
          className={`relative overflow-hidden rounded-2xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3),0_2px_4px_-1px_rgba(0,0,0,0.2)] group-hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] dark:group-hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.4),0_4px_6px_-2px_rgba(0,0,0,0.3)] transition-shadow duration-300 p-1.5 lg:p-2 dark:border-2`}
          style={{
            borderColor: `rgba(${getColorValue(
              project.gradient_colors.base
            )}, 0.3)`,
          }}
        >
          <div className="relative overflow-hidden rounded-xl h-[400px] lg:h-[500px]">
            <div className="absolute top-4 left-4 right-4 lg:top-6 lg:left-6 lg:right-6 z-10 flex items-center gap-2">
              <p className="text-[13px] lg:text-[16px] font-semibold leading-tight text-darkerblack dark:text-brightgray flex-1">
                {project.image_description}
              </p>
              <svg
                className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0 text-darkerblack dark:text-brightgray transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 3L10 4l6 6H2v2h14l-6 6 1 1 8-8-8-8z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="absolute top-44 lg:top-48 left-0 right-0 h-[calc(100%-11rem)] lg:h-[calc(100%-12rem)] overflow-hidden rounded-t-xl border-0">
              <Image
                src={project.project_image_url}
                alt={project.project_name}
                width={1200}
                height={800}
                quality={100}
                className="w-full h-[130%] object-cover object-top transition-transform duration-500 group-hover:scale-105 rounded-t-xl border-0"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </motion.a>
    </div>
  );
};

export default ProjectCard;
