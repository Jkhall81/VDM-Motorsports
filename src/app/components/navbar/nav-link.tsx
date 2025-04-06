"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface NavlinkProps {
  href: string;
  title: string;
  styles?: string;
  onClick?: () => void;
}

export const Navlink = ({ href, title, styles, onClick }: NavlinkProps) => {
  const pathname = usePathname();
  return (
    <Link
      onClick={onClick}
      className={cn(
        "px-6 font-semibold hover:text-emerald-500 select-none",
        styles
      )}
      href={href}
    >
      <span className={cn("", pathname === href ? "text-emerald-500" : "")}>
        {title}
      </span>
    </Link>
  );
};
