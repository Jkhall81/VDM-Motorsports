import Image from "next/image";

interface PersonBioProps {
  orientation?: string;
  name: string;
  bioText: string;
  imageSrc: string;
  imageSize: number;
  imageAlt: string;
}

export const PersonBio = ({
  orientation,
  imageSrc,
  imageSize,
  imageAlt,
  name,
  bioText,
}: PersonBioProps) => {
  return (
    <section className="grid grid-col-3 space-y-10">
      <h2 className="text-center text-2xl font-semibold pt-10">{name}</h2>
      <div className="col-span-2 flex flex-col items-center">
        <Image
          alt={imageAlt}
          className="object-cover"
          src={imageSrc}
          height={imageSize}
          width={imageSize}
        />
      </div>
      <div className="col-span-1 mx-16">
        <p className="text-muted-foreground">{bioText}</p>
      </div>
    </section>
  );
};
