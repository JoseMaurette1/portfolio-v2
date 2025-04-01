"use client"
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { EmailButton } from "@/components/ui/email-button";

function FAQ() {
  return (
    <div className="w-full py-12 md:py-20 lg:py-32">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col gap-8 md:gap-10">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div>
                <Badge variant="default">FAQ</Badge>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-2xl md:text-3xl lg:text-5xl tracking-tighter font-regular">Contact Me</h4>
                <p className="text-base md:text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
                  If you have any questions, please reach out to me.
                </p>
              </div>
              <div className="flex justify-start">
                <EmailButton />
              </div>
            </div>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-base md:text-lg">
                What technologies do you specialize in?
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base">
                I specialize in modern web development technologies including React, Next.js, TypeScript, and TailwindCSS. I have extensive experience building responsive and accessible user interfaces.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-base md:text-lg">
                Are you available for freelance work?
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base">
                Yes! I&apos;m open to freelance opportunities and collaborations. Feel free to reach out via email to discuss your project requirements.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-base md:text-lg">
                What is your preferred way of communication?
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base">
                Email is the best way to reach me
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-base md:text-lg">
                When do you graduate college?
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base">
                I&apos;ll graduate in December 2025, looking for a job or internship.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export { FAQ };
