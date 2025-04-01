import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const EmailButton = () => {
  const handleEmailClick = () => {
    window.open("mailto:josemaurette1234@gmail.com", "_blank");
  };

  return (
    <Button className="group" variant="secondary" onClick={handleEmailClick} aria-label="Send an email to Jose Maurette">
      <Mail className="-ms-1 me-2 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
      Email
      <ArrowRight
        className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
        size={16}
        strokeWidth={2}
        aria-hidden="true"
      />
    </Button>
  );
}

export { EmailButton };
