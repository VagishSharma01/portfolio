/** Shared Motion tokens — coherent, expensive, restrained. */

export const easeOut = [0.22, 1, 0.36, 1] as const;
export const easeInOut = [0.65, 0, 0.35, 1] as const;
export const easeExpo = [0.16, 1, 0.3, 1] as const;

export const springSoft = {
  type: "spring" as const,
  stiffness: 260,
  damping: 30,
  mass: 0.9,
};

export const springSnappy = {
  type: "spring" as const,
  stiffness: 480,
  damping: 34,
};

export const springLux = {
  type: "spring" as const,
  stiffness: 120,
  damping: 22,
  mass: 1.05,
};

export const defaultTransition = {
  duration: 0.55,
  ease: easeOut,
};

export const sectionReveal = {
  initial: { opacity: 0, y: 28, filter: "blur(6px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.75, ease: easeExpo },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

export const fadeUpSoft = {
  hidden: { opacity: 0, y: 22, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: easeExpo },
  },
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.04,
    },
  },
};

export const staggerFast = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.045,
      delayChildren: 0.02,
    },
  },
};

export const staggerSlow = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.06,
    },
  },
};

export const wordVariant = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.72, ease: easeExpo },
  },
};

export const cardHover = {
  y: -4,
  transition: { type: "spring" as const, stiffness: 380, damping: 28 },
};

export const tapScale = { scale: 0.98 };
