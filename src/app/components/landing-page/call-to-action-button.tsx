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
      <Link className="z-[30]" href={href}>
        <Button
          variant={variant}
          className={cn("min-w-[300px] cursor-pointer", styles)}
        >
          {buttonText}
        </Button>
      </Link>
    </div>
  );
};
