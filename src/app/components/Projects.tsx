"use client"
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { GradientHeading } from "@/components/ui/gradient-heading";

const Projects = () => {
  const data = [
    {
      title: "Macrotrue",
      content: (
        <div>
          <p className="text-zinc-50 text-xs md:text-sm font-normal mb-8">
            A comprehensive customer relationship management system with powerful analytics.
          </p>
          <p className="text-zinc-50 text-xs md:text-sm font-normal mb-8">
            Built with React, NextJS, and TailwindCSS for a responsive and intuitive user interface.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/macro.png"
              alt="macro"
              width={300}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/macro2.png"
              alt="macro"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/macro3.png"
              alt="macro"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/macro4.png"
              alt="macro"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Always",
      content: (
        <div>
          <p className="text-zinc-50 text-xs md:text-sm font-normal mb-8">
            A music streaming platform with a modern UI and seamless user experience.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/always.png"
              alt="always"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/always1.png"
              alt="always"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/always2.png"
              alt="always"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/always3.png"
              alt="always"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Skills & Technologies",
      content: (
        <div>
          <p className="text-zinc-50 text-xs md:text-sm font-normal mb-4">
            Technologies I'm proficient with
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-zinc-300 text-xs md:text-sm">
              ✅ React & Next.js for frontend development
            </div>
            <div className="flex gap-2 items-center text-zinc-300 text-xs md:text-sm">
              ✅ TypeScript for type-safe code
            </div>
            <div className="flex gap-2 items-center text-zinc-300 text-xs md:text-sm">
              ✅ TailwindCSS for responsive styling
            </div>
            <div className="flex gap-2 items-center text-zinc-300 text-xs md:text-sm">
              ✅ Git for version control
            </div>
            <div className="flex gap-2 items-center text-zinc-300 text-xs md:text-sm">
              ✅ RESTful APIs and GraphQL
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-zinc-800/50 rounded-lg p-4 flex flex-col items-center justify-center">
              <h3 className="text-zinc-50 font-medium">Frontend</h3>
              <p className="text-zinc-300 text-xs text-center mt-2">React, Next.js, TailwindCSS, Framer Motion</p>
            </div>
            <div className="bg-zinc-800/50 rounded-lg p-4 flex flex-col items-center justify-center">
              <h3 className="text-zinc-50 font-medium">Languages</h3>
              <p className="text-zinc-300 text-xs text-center mt-2">TypeScript, JavaScript, HTML, CSS</p>
            </div>
            <div className="bg-zinc-800/50 rounded-lg p-4 flex flex-col items-center justify-center">
              <h3 className="text-zinc-50 font-medium">Tools</h3>
              <p className="text-zinc-300 text-xs text-center mt-2">Git, VS Code, Figma, Vercel</p>
            </div>
            <div className="bg-zinc-800/50 rounded-lg p-4 flex flex-col items-center justify-center">
              <h3 className="text-zinc-50 font-medium">Other</h3>
              <p className="text-zinc-300 text-xs text-center mt-2">REST APIs, GraphQL, UI/UX Design</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-16 px-4 relative z-10 bg-transparent">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <GradientHeading variant="secondary" size="md">
            My Projects
          </GradientHeading>
        </div>
        <Timeline data={data} />
      </div>
    </section>
  );
}

export default Projects;