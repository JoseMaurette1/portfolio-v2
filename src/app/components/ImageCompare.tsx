import React from "react";
import { Compare } from "@/components/ui/compare";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function ImageCompare() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Compare
        firstImage="/new.png"
        secondImage="/old.png"
        firstImageClassName="object-cover object-left-top w-full"
        secondImageClassname="object-cover object-left-top w-full"
        className="h-[250px] w-full md:h-[500px]"
        slideMode="hover"
      />
    </motion.div>
  );
}

export default ImageCompare;
