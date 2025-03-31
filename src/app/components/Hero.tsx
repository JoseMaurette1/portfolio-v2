"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BlurFade } from "@/components/ui/blur-fade";
import { Typewriter } from "@/components/ui/typewriter-text";
import { Highlight } from "@/components/ui/hero-highlight";
import { DotPattern } from "@/components/ui/dot-pattern";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

export const HeroSection: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <div className="relative z-20 pb-12">
        <Avatar className="w-48 h-48">
          <AvatarImage src="/pfp.png" alt="Jose Maurette" />
          <AvatarFallback>JM</AvatarFallback>
        </Avatar>
      </div>
      <DotPattern className="absolute inset-0 opacity-50 z-0" />
      <section id="header" className="relative z-10 text-center">
        <BlurFade delay={0.25} inView>
          <h2 className="text-3xl font-bold tracking-tighter sm:pb-4 sm:text-5xl xl:text-6xl/none">
            Hi, I'm <Highlight>Jose</Highlight>
          </h2>
        </BlurFade>
        <BlurFade delay={0.25 * 2} inView>
          <Typewriter
            text={["Frontend Developer", "UI Enthusiast", "React Developer"]}
            speed={100}
            loop={true}
            className="text-2xl sm:text-2xl xl:text-2xl font-medium"
          />
        </BlurFade>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 * 3, duration: 0.5 }}
          className="mt-8"
        >
          <Button variant="outline" size="lg" asChild className="bg-white text-black hover:bg-white/90">
            <a href="/Resume.pdf" download>
               Resume
            <Download className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </section>
    </div>
  );
};