"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { springSoft } from "@/lib/motion";

const EMAIL = "vagishsharma1234@gmail.com";

export function CopyEmail() {
  const [msg, setMsg] = useState<string | null>(null);
  const reduce = useReducedMotion();

  async function copy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setMsg("Email copied");
    } catch {
      setMsg("Copy failed — use Email me");
    }
    window.setTimeout(() => setMsg(null), 1800);
  }

  return (
    <>
      <motion.button
        type="button"
        className="btn"
        onClick={copy}
        whileHover={reduce ? undefined : { y: -2 }}
        whileTap={reduce ? undefined : { scale: 0.98 }}
        transition={springSoft}
      >
        Copy email
      </motion.button>
      <AnimatePresence>
        {msg ? (
          <motion.div
            className="toast"
            role="status"
            initial={reduce ? false : { opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, y: 8 }}
            transition={springSoft}
          >
            {msg}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
