"use client"
import React from "react";
import Image from "next/image";
import { Highlight } from "@/components/ui/hero-highlight";
import { PreviewButton } from "@/components/ui/preview-button";
import { TimelineComponent } from "@/components/ui/timeline";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";

interface Experience {
  name: string;
  date: string;
  description: string;
  stack: string[];
  logo: string;
  href: string;
  role: string;
  image: string;
}

const Experience = () => {
  const experiences: Experience[] = [
    {
      name: "Kontaktsource",
      role: "Frontend Developer Intern",
      date: "June 2025 - Present",
      description: "Spearheaded and maintained seamless, intuitive web experiences for professionals in private equity, investment banking, family offices, and M&A. Our platform is all about facilitating meaningful connections and exclusive opportunities, so I focus on creating sleek, high-performance interfaces that reflect the caliber of our community. From dynamic event dashboards to secure, members-only features, I ensure that every digital touchpoint reinforces trust, professionalism, and innovation.",
      stack: ["WordPress", "PeepSo", "Amazon SES", "hCaptcha", "CSS", "HTML", "Javascript"],
      href: "https://kontaktsource.com",
      logo: "/klogo.png",
      image: "/kback.png"
    }
  ];

  const timelineData = experiences.map(experience => ({
    title: experience.name,
    date: experience.date,
    content: (
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Card key={experience.name} className="relative overflow-hidden group bg-zinc-900">
          <CardHeader>
            <Image
              src={experience.logo}
              alt={`${experience.name} Logo`}
              width={48}
              height={48}
              className="rounded-full"
            />
          </CardHeader>
          <CardContent className="space-y-4">
            <Image
              src={experience.image}
              alt={experience.name}
              width={800}
              height={450}
              className="w-full h-auto rounded-lg transition-opacity group-hover:opacity-90"
            />
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <span className="text-md text-gray-300 font-medium">{experience.role}</span>
            </div>
            <CardDescription className="text-gray-300 text-base md:text-md">
              {experience.description}
            </CardDescription>
            <div className="flex flex-wrap gap-2">
              {experience.stack.map((tech: string, index: number) => (
                <span
                  key={index}
                  className="px-2 py-1 text-sm rounded-md bg-blue-500 text-white tracking-wide"
                >
                  {tech}
                </span>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <PreviewButton href={experience.href} />
          </CardFooter>
          <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
        </Card>
      </motion.div>
    )
  }));

  return (
    <section className="py-8 md:py-16 px-4 relative z-10 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 md:mb-12">
          <Highlight className="text-zinc-900 text-3xl md:text-4xl font-bold">
            Experience
          </Highlight>
        </div>
        <div className="min-h-screen">
          <TimelineComponent data={timelineData} />
        </div>
      </div>
    </section>
  );
}

export default Experience;