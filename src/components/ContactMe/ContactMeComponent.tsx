import LeftContactSection from "./LeftContactSection";
import RightContactForm from "./RightContactForm";

export default function ContactMeSection() {
  return (
    <section className="w-full py-16">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        {/* Header Section */}
        <div className="flex flex-col">
          <p className="md:text-[32px] lg:text-[36px] text-[32px] font-[800] leading-[0.9] text-pastelprimarygreen">
            Contact
          </p>
          <p className="mt-[24px] lg:text-[24px] md:text-[20px] text-[14px] font-[700] dark:text-brightgray text-darkerblack leading-tight text-justify">
            Get in touch with me to collaborate on a project or discuss your
            ideas.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="flex flex-col md:flex-row gap-12">
          <LeftContactSection />
          <RightContactForm />
        </div>
      </div>
    </section>
  );
}
