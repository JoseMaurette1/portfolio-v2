"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TimelineEntry {
  title: string;
  date: string;
  content: React.ReactNode;
}

interface TimelineProps {
  children: ReactNode;
  className?: string;
}

interface TimelineItemProps {
  children: ReactNode;
  className?: string;
}

export function Timeline({ children, className }: TimelineProps) {
  return (
    <div className={cn("relative space-y-8", className)}>
      <div className="absolute left-4 top-0 h-full w-0.5 bg-zinc-600" />
      {children}
    </div>
  );
}

export function TimelineItem({ children, className }: TimelineItemProps) {
  return (
    <div className={cn("relative pl-12", className)}>
      <div className="absolute left-0 top-0 h-4 w-4 rounded-full bg-zinc-600" />
      {children}
    </div>
  );
}

export const TimelineComponent = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const contentRect = ref.current.getBoundingClientRect();
        setHeight(Math.min(contentRect.height, containerRect.height));
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-transparent font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-10 md:py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-zinc-50 max-w-4xl">
          Here&apos;s a timeline of my journey
        </h2>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-10 md:pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-20 md:top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-zinc-800 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-zinc-700 border border-zinc-600 p-2" />
              </div>
              <div className="hidden md:block md:pl-20">
                <h3 className="text-xl md:text-5xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-500 mt-1">
                  {item.date}
                </p>
              </div>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <div className="md:hidden mb-4">
                <h3 className="text-2xl font-bold text-zinc-400">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-500 mt-1">
                  {item.date}
                </p>
              </div>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-zinc-600 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-blue-500 via-blue-400 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
