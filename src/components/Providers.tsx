"use client";

import { MotionConfig } from "motion/react";

/** Global Motion defaults — respect OS reduced-motion. */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </MotionConfig>
  );
}
