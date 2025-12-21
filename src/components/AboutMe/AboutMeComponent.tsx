import LeftProfileSection from "./LeftProfileSection";
import RightProfileSection from "./RightProfileSection";

interface AboutMeSectionProps {
  useCasualPicture?: boolean;
}

function AboutMeSection({ useCasualPicture }: AboutMeSectionProps) {
  return (
    <div className="w-full space-y-12">
      {/* Profile Section with Image and Text */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Section - Profile Image */}
        <div className="order-1 lg:order-1">
          <LeftProfileSection useCasualPicture={useCasualPicture} />
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
