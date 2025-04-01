import { Button } from "@/components/ui/button";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

interface PreviewButtonProps {
  href: string;
}

const PreviewButton = ({ href }: PreviewButtonProps) => {
  return (
    <div className="inline-flex -space-x-px rounded-lg shadow-sm shadow-black/5 rtl:space-x-reverse">
      <Button
        className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        variant="outline"
        asChild
      >
        <Link href={href} target="_blank" rel="noopener noreferrer">
          Preview
        </Link>
      </Button>
      <Button
        className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        variant="outline"
        size="icon"
        aria-label="Open link"
        asChild
      >
        <Link href={href} target="_blank" rel="noopener noreferrer">
          <SquareArrowOutUpRight size={16} strokeWidth={2} aria-hidden="true" />
        </Link>
      </Button>
    </div>
  );
}

export { PreviewButton };
