import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavlinkProps {
  href: string;
  title: string;
  styles?: string;
}

export const Navlink = ({ href, title, styles }: NavlinkProps) => {
  return (
    <Link className={cn("px-6 hover:text-purple-700", styles)} href={href}>
      {title}
    </Link>
  );
};
