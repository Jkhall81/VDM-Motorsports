import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  image: string;
  alt: string;
  href: string;
  styles?: string;
  size: number;
}

export const Logo = ({ image, href, size, styles, alt }: LogoProps) => {
  return (
    <Link href={href} className="h-full flex items-center">
      <Image
        src={image}
        alt={alt}
        className={cn("object-cover", styles)}
        height={size}
        width={size}
        priority
      />
    </Link>
  );
};
