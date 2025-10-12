import LeftProfileSection from "./LeftProfileSection";
import RightProfileSection from "./RightProfileSection";

function AboutMeSection() {
  return (
    <div className="w-full space-y-12">
      {/* Header Section */}
      <div className="flex flex-col">
        <p className="md:text-[32px] lg:text-[36px] text-[32px] font-[800] leading-[0.9] text-pastelprimarygreen">
          About Me
        </p>
        <p className="mt-[24px] lg:text-[24px] md:text-[20px] text-[14px] font-[700] dark:text-brightgray text-darkerblack leading-tight">
          Bringing ideas to life through intelligent systems.
        </p>
      </div>

      {/* Profile Section with Image and Text */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Section - Profile Image */}
        <div className="order-1 lg:order-1">
          <LeftProfileSection />
        </div>

        {/* Right Section - About Text */}
        <div className="order-2 lg:order-2">
          <RightProfileSection />
        </div>
      </div>
    </div>
  );
}

export default AboutMeSection;
