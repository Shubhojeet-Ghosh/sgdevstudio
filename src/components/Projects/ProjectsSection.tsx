"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "@/config/projects";
import ProjectCard from "./ProjectCard";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  ReactIcon,
  NodeJsIcon,
  MongoDbIcon,
  MySqlIcon,
  TypeScriptIcon,
  TailwindCssIcon,
  NextJsIcon,
  SocketIoIcon,
  PythonIcon,
  RedisIcon,
  QdrantIcon,
  GitIcon,
  VSCodeIcon,
  ExternalLink,
} from "@/components/TechStacks/Icons";

const ProjectsSection: React.FC = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      let newActiveIndex = 0;

      projectRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const elementTop = scrollPosition + rect.top;
          const elementBottom = elementTop + rect.height;

          // Get the viewport top and bottom positions
          const viewportTop = scrollPosition;
          const viewportBottom = scrollPosition + windowHeight;

          // Check if the element is visible in the viewport
          if (elementTop < viewportBottom && elementBottom > viewportTop) {
            // Calculate how much of the element is visible
            const visibleTop = Math.max(elementTop, viewportTop);
            const visibleBottom = Math.min(elementBottom, viewportBottom);
            const visibleHeight = visibleBottom - visibleTop;
            const totalHeight = elementBottom - elementTop;
            const visibilityRatio = visibleHeight / totalHeight;

            // If more than 50% of the element is visible, make it active
            if (visibilityRatio > 0.5) {
              newActiveIndex = index;
            }
            // If we're at the last element and it's partially visible, keep it active
            else if (
              index === projectRefs.current.length - 1 &&
              visibilityRatio > 0
            ) {
              newActiveIndex = index;
            }
          }
        }
      });

      setActiveProjectIndex(newActiveIndex);
    };

    // Use throttled scroll event for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, []);

  const iconMap: {
    [key: string]: {
      component: React.ComponentType<any>;
      name: string;
      hoverColor: string;
    };
  } = {
    ReactIcon: {
      component: ReactIcon,
      name: "React",
      hoverColor: "hover:text-[#61DAFB]",
    },
    NodeJsIcon: {
      component: NodeJsIcon,
      name: "Node.js",
      hoverColor: "hover:text-[#47A248]",
    },
    MongoDbIcon: {
      component: MongoDbIcon,
      name: "MongoDB",
      hoverColor: "hover:text-[#47A248]",
    },
    MySqlIcon: {
      component: MySqlIcon,
      name: "MySQL",
      hoverColor: "hover:text-[#47A248]",
    },
    TypeScriptIcon: {
      component: TypeScriptIcon,
      name: "TypeScript",
      hoverColor: "hover:text-[#3178C6]",
    },
    TailwindCssIcon: {
      component: TailwindCssIcon,
      name: "Tailwind CSS",
      hoverColor: "hover:text-[#06B6D4]",
    },
    NextJsIcon: {
      component: NextJsIcon,
      name: "Next.js",
      hoverColor: "hover:text-[#000000] dark:hover:text-[#FFFFFF]",
    },
    SocketIoIcon: {
      component: SocketIoIcon,
      name: "Socket.io",
      hoverColor: "hover:text-[#47A248]",
    },
    PythonIcon: {
      component: PythonIcon,
      name: "Python",
      hoverColor: "hover:text-[#47A248]",
    },
    RedisIcon: {
      component: RedisIcon,
      name: "Redis",
      hoverColor: "hover:text-[#47A248]",
    },
    QdrantIcon: {
      component: QdrantIcon,
      name: "Qdrant",
      hoverColor: "hover:text-[#47A248]",
    },
    GitIcon: {
      component: GitIcon,
      name: "Git",
      hoverColor: "hover:text-[#47A248]",
    },
    VSCodeIcon: {
      component: VSCodeIcon,
      name: "VS Code",
      hoverColor: "hover:text-[#47A248]",
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  const activeProject = projectsData[activeProjectIndex];

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

  const contentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <motion.section
      className="pb-2"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Main Projects Section */}
      <div className="relative">
        <div
          className="hidden lg:grid lg:gap-12 max-w-7xl mx-auto "
          style={{ gridTemplateColumns: "65% 35%" }}
        >
          {/* Left Side - Scrolling Images */}
          <div className="space-y-0">
            {projectsData.map((project, index) => (
              <div
                key={project.project_name}
                ref={(el) => {
                  projectRefs.current[index] = el;
                }}
              >
                <ProjectCard
                  project={project}
                  index={index}
                  gradientClass={`from-${project.gradient_colors.base} to-${project.gradient_colors.secondary}`}
                />
              </div>
            ))}
          </div>

          {/* Right Side - Sticky Content */}
          <div className="relative">
            <div className="sticky top-24 h-screen flex items-start pt-32">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProjectIndex}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="w-full"
                >
                  <motion.div variants={itemVariants}>
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        className="h-1 w-8 opacity-60 rounded-full"
                        style={{
                          backgroundColor: `rgb(${getColorValue(
                            activeProject.gradient_colors.base
                          )})`,
                        }}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                          delay: 0.2,
                          duration: 0.8,
                          ease: [0.4, 0, 0.2, 1] as const,
                        }}
                      />
                      <a
                        href={activeProject.project_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link text-xl lg:text-2xl font-bold text-gray-900 dark:text-white hover:underline transition-all duration-200 flex items-center gap-2"
                      >
                        {activeProject.project_name}
                        <ExternalLink className="w-4 h-4 lg:w-5 lg:h-5 opacity-0 group-hover/link:opacity-100 transition-opacity duration-200" />
                      </a>
                    </div>
                  </motion.div>

                  <motion.p
                    className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed"
                    variants={itemVariants}
                  >
                    {activeProject.project_description}
                  </motion.p>

                  {/* Project Points */}
                  <motion.div className="mb-6" variants={itemVariants}>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {activeProject.project_points.map((point, pointIndex) => (
                        <motion.li
                          key={pointIndex}
                          className="flex items-start gap-3 text-xs text-gray-600 dark:text-gray-300"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: pointIndex * 0.1 }}
                        >
                          <motion.span
                            className="flex-shrink-0 w-4 h-4 mt-1"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              delay: pointIndex * 0.1 + 0.2,
                              duration: 0.3,
                            }}
                            style={{
                              color: `rgb(${getColorValue(
                                activeProject.gradient_colors.base
                              )})`,
                            }}
                          >
                            <svg
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-full h-full"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                          </motion.span>
                          <span>{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Tech Stack */}
                  <motion.div variants={itemVariants}>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                      Tech Stack:
                    </h4>
                    <div className="overflow-x-auto pb-[5px] flex scrollbar-hide">
                      <TooltipProvider delayDuration={150}>
                        <motion.ul
                          className="flex items-center gap-3.5 text-slate-500 dark:text-slate-500"
                          initial="hide"
                          animate="show"
                          transition={{
                            delayChildren: 0.3,
                            staggerChildren: 0.025,
                          }}
                        >
                          {activeProject.tech_stack_used.map(
                            (tech, techIndex) => {
                              const techInfo = iconMap[tech];
                              const IconComponent = techInfo?.component;
                              return (
                                <motion.li
                                  key={techIndex}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: techIndex * 0.05 }}
                                >
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <motion.div
                                        className={`transition duration-200 ${
                                          techInfo?.hoverColor ||
                                          "hover:text-[#47A248]"
                                        } flex items-center justify-center cursor-pointer`}
                                        whileHover={{ scale: 1.05 }}
                                      >
                                        {IconComponent &&
                                        tech === "NodeJsIcon" ? (
                                          <IconComponent className="h-9 w-9" />
                                        ) : IconComponent &&
                                          tech === "MySqlIcon" ? (
                                          <IconComponent className="h-9 w-9" />
                                        ) : IconComponent &&
                                          tech === "TypeScriptIcon" ? (
                                          <IconComponent className="h-5 w-5" />
                                        ) : IconComponent ? (
                                          <IconComponent className="h-6 w-6" />
                                        ) : null}
                                      </motion.div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      {techInfo?.name ||
                                        tech.replace("Icon", "")}
                                    </TooltipContent>
                                  </Tooltip>
                                </motion.li>
                              );
                            }
                          )}
                        </motion.ul>
                      </TooltipProvider>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Original Stacked Layout */}
        <div className="lg:hidden space-y-8 px-4 sm:px-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.project_name}
              className="space-y-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCard project={project} index={index} />
              <div className="space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    className="h-1 w-8 opacity-60 rounded-full"
                    style={{
                      backgroundColor: `rgb(${getColorValue(
                        project.gradient_colors.base
                      )})`,
                    }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.2,
                      duration: 0.8,
                      ease: [0.4, 0, 0.2, 1] as const,
                    }}
                  />
                  <a
                    href={project.project_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link text-xl font-bold text-gray-900 dark:text-white hover:underline transition-all duration-200 flex items-center gap-2"
                  >
                    {project.project_name}
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity duration-200" />
                  </a>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
                  {project.project_description}
                </p>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {project.project_points.map((point, pointIndex) => (
                      <motion.li
                        key={pointIndex}
                        className="flex items-start gap-3 text-xs text-gray-600 dark:text-gray-300"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: pointIndex * 0.1 }}
                      >
                        <motion.span
                          className="flex-shrink-0 w-4 h-4 mt-1"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: pointIndex * 0.1 + 0.2,
                            duration: 0.3,
                          }}
                          style={{
                            color: `rgb(${getColorValue(
                              project.gradient_colors.base
                            )})`,
                          }}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-full h-full"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        </motion.span>
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    Tech Stack:
                  </h4>
                  <div className="overflow-x-auto pb-[5px] flex scrollbar-hide">
                    <TooltipProvider delayDuration={150}>
                      <motion.ul
                        className="flex items-center gap-3.5 text-slate-500 dark:text-slate-500"
                        initial="hide"
                        whileInView="show"
                        viewport={{ once: true }}
                        transition={{
                          delayChildren: 0.3,
                          staggerChildren: 0.025,
                        }}
                      >
                        {project.tech_stack_used.map((tech, techIndex) => {
                          const techInfo = iconMap[tech];
                          const IconComponent = techInfo?.component;
                          return (
                            <motion.li
                              key={techIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: techIndex * 0.05 }}
                            >
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <motion.div
                                    className={`transition duration-200 ${
                                      techInfo?.hoverColor ||
                                      "hover:text-[#47A248]"
                                    } flex items-center justify-center cursor-pointer`}
                                    whileHover={{ scale: 1.05 }}
                                  >
                                    {IconComponent && tech === "NodeJsIcon" ? (
                                      <IconComponent className="h-9 w-9" />
                                    ) : IconComponent &&
                                      tech === "MySqlIcon" ? (
                                      <IconComponent className="h-9 w-9" />
                                    ) : IconComponent &&
                                      tech === "TypeScriptIcon" ? (
                                      <IconComponent className="h-5 w-5" />
                                    ) : IconComponent ? (
                                      <IconComponent className="h-6 w-6" />
                                    ) : null}
                                  </motion.div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  {techInfo?.name || tech.replace("Icon", "")}
                                </TooltipContent>
                              </Tooltip>
                            </motion.li>
                          );
                        })}
                      </motion.ul>
                    </TooltipProvider>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        className="text-center px-4 sm:px-6 lg:px-8"
        variants={headerVariants}
      ></motion.div>
    </motion.section>
  );
};

export default ProjectsSection;
