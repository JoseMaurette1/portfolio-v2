"use client"
import React from "react";
import Image from "next/image";
import { Highlight } from "@/components/ui/hero-highlight";
import { PreviewButton } from "@/components/ui/preview-button";
import { ImageCompare } from "@/app/components/ImageCompare";
import { TimelineComponent } from "@/components/ui/timeline";
import { Code2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";
const Projects = () => {
  const projects = [
    {
      Icon: () => <Image src="/macrotruelogo.png" alt="Macrotrue Logo" width={48} height={48} className="rounded-full" />,
      name: "Macrotrue",
      date: "Mar 2025-June 2025",
      description: "A SaaS that helps recommends macro recipes based on your dietary goals.",
      href: "https://macrotrue.vercel.app",
      cta: "View Project",
      image: "/macro.png",
      stack: ["Next.js", "Tailwind", "TypeScript", "React"]
    },
    {
      Icon: () => <Image src="/alwayslogo.png" alt="Always Logo" width={48} height={48} className="rounded-full" />,
      name: "Always",
      date: "Dec 2024 - Feb 2025",
      description: "Full Stack Workout Tracker that helps you track your workouts and progress.",
      href: "https://alwaysv1.vercel.app",
      cta: "View Project",
      image: "/always.png",
      stack: ["Next.js", "Tailwind", "TypeScript", "React"]
    },
    {
      Icon: () => <Image src="/Trailtaleslogo.png" alt="TrailTales Logo" width={48} height={48} className="rounded-full" />,
      name: "TrailTales",
      date: "Sep 2024-Dec 2024",
      description: "A web app that helps you find the best trails for your next adventure.",
      href: "https://trailtales.vercel.app",
      cta: "View Project",
      image: "/tt.png",
      stack: ["Next.js", "Tailwind", "TypeScript", "React"]
    }
  ];

  const timelineData = projects.map(project => ({
    title: project.name,
    date: project.date,
    content: (
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Card key={project.name} className="relative overflow-hidden group bg-zinc-900">
          <CardHeader>
            <project.Icon />
          </CardHeader>
          <CardContent className="space-y-4">
            <Image
              src={project.image}
              alt={project.name}
              width={800}
              height={450}
              className="w-full h-auto rounded-lg transition-opacity group-hover:opacity-90"
            />
            <CardDescription className="text-white text-base md:text-lg">{project.description}</CardDescription>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, index) => (
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
            <PreviewButton href={project.href} />
          </CardFooter>
          <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
        </Card>
      </motion.div>
    )
  }));

  const portfolioTimelineData = {
    title: "Portfolio",
    date: "Mar 2025",
    content: (
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Card className="relative overflow-hidden group bg-zinc-900">
          <CardHeader>
            <Code2 className="h-12 w-12 text-neutral-300" />
          </CardHeader>
          <CardContent className="space-y-4">
            <ImageCompare />
            <CardDescription className="text-white text-base md:text-lg">
              Portfolio Website
            </CardDescription>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "Tailwind", "TypeScript", "React"].map((tech, index) => (
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
            <PreviewButton href="https://hosedev.vercel.app" />
          </CardFooter>
          <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
        </Card>
      </motion.div>
    )
  };

  return (
    <section className="py-8 md:py-16 px-4 relative z-10 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 md:mb-12">
          <Highlight className="text-zinc-900 text-3xl md:text-4xl font-bold">
            Projects
          </Highlight>
        </div>
        <div className="min-h-screen">
          <TimelineComponent data={[...timelineData, portfolioTimelineData]} />
        </div>
      </div>
    </section>
  );
}

export default Projects;