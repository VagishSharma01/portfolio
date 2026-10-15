"use client";

import { useEffect, useRef } from "react";
import { useInView, useReducedMotion } from "motion/react";

type Props = {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
};

export function CountUp({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView) return;

    const format = (n: number) => {
      const formatted =
        decimals > 0 ? n.toFixed(decimals) : Math.round(n).toString();
      el.textContent = `${prefix}${formatted}${suffix}`;
    };

    if (reduce) {
      format(value);
      return;
    }

    const start = performance.now();
    const duration = 1100;
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      format(value * eased);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduce, value, prefix, suffix, decimals]);

  // SSR / initial paint
  const initial =
    decimals > 0 ? value.toFixed(decimals) : Math.round(reduce ? value : 0).toString();

  return (
    <span ref={ref} className={className}>
      {prefix}
      {reduce ? (decimals > 0 ? value.toFixed(decimals) : value) : initial}
      {suffix}
    </span>
  );
}
