"use client";

import { motion, useReducedMotion } from "motion/react";
import { easeExpo, fadeUpSoft, staggerContainer } from "@/lib/motion";

/** Orchestrated entrance for case-study pages. */
export function CaseStudyMotion({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
}

export function CaseBlock({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div className={className} variants={fadeUpSoft}>
      {children}
    </motion.div>
  );
}

export function CaseTitle({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  if (reduce) return <h1>{children}</h1>;

  return (
    <motion.h1
      initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.7, ease: easeExpo, delay: 0.08 }}
    >
      {children}
    </motion.h1>
  );
}
