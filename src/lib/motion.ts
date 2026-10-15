/** Shared Motion tokens — keep timing coherent sitewide. */

export const easeOut = [0.22, 1, 0.36, 1] as const;

export const springSoft = {
  type: "spring" as const,
  stiffness: 280,
  damping: 28,
  mass: 0.85,
};

export const springSnappy = {
  type: "spring" as const,
  stiffness: 420,
  damping: 32,
};

export const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
};

export const sectionReveal = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.14 },
  transition: { duration: 0.55, ease: easeOut },
};

export const staggerParent = {
  animate: {
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

export const staggerChild = {
  initial: { opacity: 0, y: 14 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};
