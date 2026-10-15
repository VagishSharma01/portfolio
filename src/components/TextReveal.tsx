"use client";

import { motion, useReducedMotion } from "motion/react";
import { wordVariant } from "@/lib/motion";

type Props = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  mode?: "words" | "lines";
  /** When true, reveal on scroll into view instead of mount. */
  inView?: boolean;
  /** Gate mount animations (e.g. wait for intro veil). Default true. */
  active?: boolean;
};

/** Clip-path style word/line reveal for cinematic entrances. */
export function TextReveal({
  text,
  className,
  as: Tag = "span",
  delay = 0,
  mode = "words",
  inView = false,
  active = true,
}: Props) {
  const reduce = useReducedMotion();
  const parts =
    mode === "lines"
      ? text.split("\n").filter(Boolean)
      : text.split(" ").filter(Boolean);

  if (reduce) {
    return <Tag className={className}>{text.replace(/\n/g, " ")}</Tag>;
  }

  const label = text.replace(/\n/g, " ");
  const show = inView ? undefined : active ? "show" : "hidden";

  return (
    <Tag className={className}>
      <motion.span
        className="text-reveal"
        initial="hidden"
        {...(inView
          ? {
              whileInView: "show",
              viewport: { once: true, amount: 0.35 },
            }
          : { animate: show })}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: mode === "words" ? 0.052 : 0.14,
              delayChildren: delay,
            },
          },
        }}
        aria-label={label}
      >
        {parts.map((part, i) => (
          <span key={`${part}-${i}`} className="text-reveal-word">
            <motion.span className="text-reveal-inner" variants={wordVariant}>
              {part}
              {mode === "words" ? "\u00A0" : null}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
