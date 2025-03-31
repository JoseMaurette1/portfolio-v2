import React from 'react';
import { GradientHeading } from "@/components/ui/gradient-heading";
import { BlurFade } from "@/components/ui/blur-fade";

const Bio = () => {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto relative z-10">
      <div className="space-y-8">
        <BlurFade delay={0.1} inView>
          <GradientHeading variant="pink" size="md" className="mb-6">
            About Me
          </GradientHeading>
        </BlurFade>

        <div className="space-y-6">
          <BlurFade delay={0.2} inView>
            <p className="text-lg leading-relaxed">
              I'm a frontend developer with a passion for creating beautiful and functional websites.
              My focus is on crafting intuitive user experiences with modern technologies.
            </p>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <p className="text-lg leading-relaxed">
              Currently, I'm a Senior at Florida International University, on track to graduate in December 2025
              with a degree in Computer Science.
            </p>
          </BlurFade>

          <BlurFade delay={0.4} inView>
            <p className="text-lg leading-relaxed">
              With 1.5 years of experience building websites, I'm constantly expanding my skills and
              looking for new opportunities to grow and learn in the ever-evolving world of web development.
            </p>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default Bio;