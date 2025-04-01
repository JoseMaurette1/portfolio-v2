"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Navbar from "@/app/components/Navbar";
import { BlurFade } from "@/components/ui/blur-fade";
import { toast } from "sonner";
import { Typewriter } from "@/components/ui/typewriter-text";
import { Highlight } from "@/components/ui/hero-highlight";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { LearnMore } from "@/components/ui/learn-more";
export const HeroSection: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen py-16">
      <div className="relative z-20 pb-12">
        <div className="relative">
          <Avatar className="w-48 h-48">
            <AvatarImage src="/pfp.png" alt="Jose Maurette" />
            <AvatarFallback>JM</AvatarFallback>
          </Avatar>
          <span className="absolute -end-1 -top-1">
            <span className="sr-only">Verified</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                className="fill-background"
                d="M3.046 8.277A4.402 4.402 0 0 1 8.303 3.03a4.4 4.4 0 0 1 7.411 0 4.397 4.397 0 0 1 5.19 3.068c.207.713.23 1.466.067 2.19a4.4 4.4 0 0 1 0 7.415 4.403 4.403 0 0 1-3.06 5.187 4.398 4.398 0 0 1-2.186.072 4.398 4.398 0 0 1-7.422 0 4.398 4.398 0 0 1-5.257-5.248 4.4 4.4 0 0 1 0-7.437Z"
              />
              <path
                className="fill-primary"
                d="M4.674 8.954a3.602 3.602 0 0 1 4.301-4.293 3.6 3.6 0 0 1 6.064 0 3.598 3.598 0 0 1 4.3 4.302 3.6 3.6 0 0 1 0 6.067 3.6 3.6 0 0 1-4.29 4.302 3.6 3.6 0 0 1-6.074 0 3.598 3.598 0 0 1-4.3-4.293 3.6 3.6 0 0 1 0-6.085Z"
              />
              <path
                className="fill-background"
                d="M15.707 9.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414L11 12.586l3.293-3.293a1 1 0 0 1 1.414 0Z"
              />
            </svg>
          </span>
        </div>
      </div>
      <section id="header" className="relative z-10 text-center">
        <BlurFade delay={0.25} inView>
          <h2 className="text-3xl font-bold tracking-tighter sm:pb-4 sm:text-5xl xl:text-6xl/none">
            Hi, I&apos;m <Highlight>Jose</Highlight>
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
          className="mt-8 flex gap-4 justify-center"
        >
          <Button
            variant="outline"
            size="lg"
            asChild
            className="bg-white text-black hover:bg-white/90"
            onClick={() => {
              toast.success("Success!", {
                description: "Downloaded Resume!",
              })
            }}
          >
            <a href="/Resume.pdf" download>
              Resume
              <Download className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <LearnMore />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 * 4, duration: 0.5 }}
          className="mt-8"
        >
          <Navbar />
        </motion.div>
      </section>
    </div>
  );
};