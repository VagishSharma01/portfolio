/** Shared Motion tokens — Huyml-leaning: slower, expo, restrained. */

export const easeOut = [0.22, 1, 0.36, 1] as const;
export const easeInOut = [0.65, 0, 0.35, 1] as const;
export const easeExpo = [0.16, 1, 0.3, 1] as const;

export const springSoft = {
  type: "spring" as const,
  stiffness: 220,
  damping: 28,
  mass: 1,
};

export const springSnappy = {
  type: "spring" as const,
  stiffness: 420,
  damping: 34,
};

export const springLux = {
  type: "spring" as const,
  stiffness: 110,
  damping: 20,
  mass: 1.1,
};

export const defaultTransition = {
  duration: 0.7,
  ease: easeExpo,
};

export const sectionReveal = {
  initial: { opacity: 0, y: 36, filter: "blur(8px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.14 },
  transition: { duration: 0.9, ease: easeExpo },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeExpo },
  },
};

export const fadeUpSoft = {
  hidden: { opacity: 0, y: 28, filter: "blur(5px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: easeExpo },
  },
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.06,
    },
  },
};

export const staggerFast = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.055,
      delayChildren: 0.04,
    },
  },
};

export const staggerSlow = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const wordVariant = {
  hidden: { y: "115%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.85, ease: easeExpo },
  },
};

export const cardHover = {
  y: -5,
  transition: { type: "spring" as const, stiffness: 320, damping: 26 },
};

export const tapScale = { scale: 0.985 };
