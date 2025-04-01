"use client"
import { Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

function FAQ() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge variant="default">FAQ</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">Contact Me</h4>
                <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
                  If you have any questions, please reach out to me.
                </p>
              </div>
              <div className="">
                <Button className="gap-4 bg-white text-black hover:bg-white/90" variant="outline" onClick={() => window.open("mailto:josemaurette1234@gmail.com", "_blank")}>
                  Any questions? Reach out <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What technologies do you specialize in?
              </AccordionTrigger>
              <AccordionContent>
                I specialize in modern web development technologies including React, Next.js, TypeScript, and TailwindCSS. I have extensive experience building responsive and accessible user interfaces.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                Are you available for freelance work?
              </AccordionTrigger>
              <AccordionContent>
                Yes! I&apos;m open to freelance opportunities and collaborations. Feel free to reach out via email to discuss your project requirements.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                What is your preferred way of communication?
              </AccordionTrigger>
              <AccordionContent>
                Email is the best way to reach me initially. You can click the email button above or find me on LinkedIn. I aim to respond within 24-48 hours.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>When do you graduate college?</AccordionTrigger>
              <AccordionContent>I&apos;ll graduate in December 2025, looking for a job or internship.</AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>What&apos;s your favorite tech stack?</AccordionTrigger>
              <AccordionContent>I&apos;m passionate about the T3 Stack (TypeScript, Tailwind, tRPC) combined with Next.js for full-stack applications.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <p>
          Here&apos;s a timeline of my journey
        </p>
      </div>
    </div>
  );
}

export { FAQ };
