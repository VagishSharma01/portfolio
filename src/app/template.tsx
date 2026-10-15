"use client";

import { motion, useReducedMotion } from "motion/react";
import { easeExpo } from "@/lib/motion";

/**
 * Route transition inspired by Huyml-style black wipe:
 * veil scales away, content fades up underneath.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;

  return (
    <div className="route-shell">
      <motion.div
        className="page-wipe"
        aria-hidden
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.85, ease: easeExpo }}
        style={{ transformOrigin: "top" }}
      />
      <motion.div
        initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.75, ease: easeExpo, delay: 0.28 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
