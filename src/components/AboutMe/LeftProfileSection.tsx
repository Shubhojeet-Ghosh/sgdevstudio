import Image from "next/image";
import { AbutMePictureURL2, CasualPictureURL } from "@/config/about_me";

interface LeftProfileSectionProps {
  useCasualPicture?: boolean;
}

export default function LeftProfileSection({
  useCasualPicture,
}: LeftProfileSectionProps) {
  const pictureURL = useCasualPicture
    ? CasualPictureURL.link
    : AbutMePictureURL2.link;

  return (
    <div className="w-full flex justify-center items-center">
      <div className="relative w-full lg:max-w-[400px] max-w-[300px] aspect-square">
        <div className="absolute inset-[-24px] bg-gradient-to-br from-primarycyan via-gradientpurple to-gradientpink rounded-full opacity-20 blur-xl"></div>
        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primarycyan/30">
          <Image
            src={pictureURL}
            alt="Shubhojeet Profile Picture"
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
