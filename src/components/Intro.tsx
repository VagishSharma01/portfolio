"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { easeExpo } from "@/lib/motion";

const IntroCtx = createContext({ ready: true });

export function useIntroReady() {
  return useContext(IntroCtx).ready;
}

function shouldSkipIntro() {
  try {
    return sessionStorage.getItem("vs-intro") === "1";
  } catch {
    return false;
  }
}

/** Confident black hold → reveal — Huyml-style, no spinner. */
export function Intro({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  const [veil, setVeil] = useState(false);
  const [ready, setReady] = useState(true);

  useEffect(() => {
    let hold = 0;
    let reveal = 0;
    const frame = window.requestAnimationFrame(() => {
      if (reduce || shouldSkipIntro()) {
        setVeil(false);
        setReady(true);
        return;
      }
      setReady(false);
      setVeil(true);
      hold = window.setTimeout(() => setVeil(false), 720);
      reveal = window.setTimeout(() => {
        setReady(true);
        try {
          sessionStorage.setItem("vs-intro", "1");
        } catch {
          /* ignore */
        }
      }, 1180);
    });

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(hold);
      window.clearTimeout(reveal);
    };
  }, [reduce]);

  return (
    <IntroCtx.Provider value={{ ready: reduce ? true : ready }}>
      {children}
      <AnimatePresence>
        {veil && !reduce ? (
          <motion.div
            className="intro-veil"
            aria-hidden
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.7, ease: easeExpo },
            }}
          >
            <motion.span
              className="intro-mark"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: easeExpo, delay: 0.08 }}
            >
              Vagish Sharma
            </motion.span>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </IntroCtx.Provider>
  );
}
