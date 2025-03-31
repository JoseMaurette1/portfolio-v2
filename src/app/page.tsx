import React from 'react'
import { HeroSection } from './components/Hero'
import SkillsSection from './components/Skills'
import Projects from './components/Projects';

const page = () => {
  return (
    <div className="flex flex-col gap-12 md:gap-16">
      <HeroSection />
      <SkillsSection />
      <Projects />
    </div>
  );
};

export default page;
