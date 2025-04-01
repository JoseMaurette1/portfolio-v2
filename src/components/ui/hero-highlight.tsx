"use client";
import { cn } from "@/lib/utils";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React, { ReactNode } from "react";

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const dotPattern = (color: string) => ({
    backgroundImage: `radial-gradient(circle, ${color} 1px, transparent 1px)`,
    backgroundSize: '16px 16px',
  });

  const left = useMotionTemplate`${mouseX}px`;
  const top = useMotionTemplate`${mouseY}px`;

  return (
    <div
      className={cn(
        "relative h-[40rem] flex items-center bg-white dark:bg-black justify-center w-full group",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-70"
        style={dotPattern('rgb(212 212 212)')} // neutral-300 for light mode
      />
      <div
        className="absolute inset-0 dark:opacity-70 opacity-0 pointer-events-none"
        style={dotPattern('rgb(38 38 38)')} // neutral-800 for dark mode
      />
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          ...dotPattern('rgb(99 102 241)'), // indigo-500
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${left} ${top},
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${left} ${top},
              black 0%,
              transparent 100%
            )
          `,
        }}
      />

      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
};

interface HighlightProps {
  children: ReactNode;
  className?: string;
}

export function Highlight({ children, className }: HighlightProps) {
  return (
    <span
      className={cn(
        "font-bold bg-zinc-200 dark:bg-zinc-800/30 text-zinc-900 dark:text-zinc-100 px-0.5 rounded transition-colors duration-200",
        className,
      )}
    >
      {children}
    </span>
  );
}