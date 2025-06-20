import React from 'react'
import { HeroSection } from './components/Hero'
import SkillsSection from './components/Skills'
import Projects from './components/Projects';
import { BlurFade } from '@/components/ui/blur-fade';
import { Contact } from './components/Contact';
import Experience from './components/Experience';
const page = () => {
  return (
    <div className="flex flex-col gap-12 md:gap-16">
      <HeroSection />
      <BlurFade delay={0.25} inView>
        <SkillsSection />
      </BlurFade>
      <BlurFade delay={0.25} inView>
        <Experience />
      </BlurFade>
      <BlurFade delay={0.25} inView>
        <Projects />
      </BlurFade>
      <BlurFade delay={0.25} inView>
        <Contact />
      </BlurFade>
    </div>
  );
};

export default page;
