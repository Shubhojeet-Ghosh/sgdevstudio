import React from "react";

const ProjectsSectionHeader: React.FC = () => {
  return (
    <div className="flex flex-col mb-4 lg:mb-6">
      <p className="md:text-[32px] lg:text-[36px] text-[32px] font-[800] leading-[0.9] text-pastelprimarygreen">
        My Projects
      </p>
      <p className="mt-[24px] lg:text-[24px] md:text-[20px] text-[14px] font-[700] dark:text-brightgray text-darkerblack leading-tight mb-6 lg:mb-0">
        Here are some of the projects I have worked on. Each one represents a
        unique challenge and learning experience.
      </p>
    </div>
  );
};

export default ProjectsSectionHeader;

