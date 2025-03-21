import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CallToActionButtonProps {
  variant:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null;
  buttonText: string;
  styles?: string;
  containerStyles?: string;
  href: string;
}

export const CallToActionButton = ({
  variant,
  buttonText,
  styles,
  containerStyles,
  href,
}: CallToActionButtonProps) => {
  return (
    <div className={cn("", containerStyles)}>
      <Button variant={variant} className={cn("", styles)}>
        <Link href={href}>{buttonText}</Link>
      </Button>
    </div>
  );
};
