import Image from "next/image";
import { cn } from "@/lib/utils";
interface PersonBioProps {
  orientation?: string;
  name: string;
  bioText: string;
  imageSrc: string;
  imageSize: number;
  imageAlt: string;
  imageStyles: string;
}

export const PersonBio = ({
  imageSrc,
  imageSize,
  imageAlt,
  name,
  bioText,
  imageStyles,
}: PersonBioProps) => {
  return (
    <section className="grid grid-col-3 space-y-10">
      <div className="col-span-2 flex flex-col items-center">
        <h2 className="text-center text-2xl font-semibold py-10">{name}</h2>
        <Image
          alt={imageAlt}
          className={cn("object-cover z-[30]", imageStyles)}
          src={imageSrc}
          height={imageSize}
          width={imageSize}
        />
        <div className="col-span-1 mt-5 mx-auto max-w-[400px]">
          <p className="text-black">{bioText}</p>
        </div>
      </div>
    </section>
  );
};
