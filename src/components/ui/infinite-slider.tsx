'use client';
import { cn } from '@/lib/utils';
import { useMotionValue, animate, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import useMeasure from 'react-use-measure';

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = 'horizontal',
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [ref, { width, height }] = useMeasure();
  const translation = useMotionValue(0);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const size = direction === 'horizontal' ? width : height;
    if (!size) return;

    const contentSize = size + gap;
    const target = reverse ? 0 : -contentSize / 2;

    const controls = animate(translation, target, {
      type: "tween",
      duration: hovering ? durationOnHover || duration : duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
      onComplete: () => {
        translation.set(0);
      }
    });

    return () => controls.stop();
  }, [gap, width, height, duration, durationOnHover, hovering, direction, reverse, translation]);

  return (
    <div
      className={cn('overflow-hidden', className)}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <motion.div
        className='flex w-max'
        style={{
          ...(direction === 'horizontal'
            ? { x: translation }
            : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
        }}
        ref={ref}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
