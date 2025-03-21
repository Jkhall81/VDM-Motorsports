"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface NavlinkProps {
  href: string;
  title: string;
  styles?: string;
}

export const Navlink = ({ href, title, styles }: NavlinkProps) => {
  const pathname = usePathname();
  return (
    <Link
      className={cn(
        "px-6 font-semibold hover:text-blue-500 select-none",
        styles
      )}
      href={href}
    >
      <span className={cn("", pathname === href ? "text-blue-500" : "")}>
        {title}
      </span>
    </Link>
  );
};
