"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#practice", label: "Practice" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => {
    setSolid(v > 40);
  });

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
      style={{
        background: solid ? "rgba(243,244,246,0.86)" : "transparent",
        backdropFilter: solid ? "blur(14px)" : "none",
        borderBottom: solid ? "1px solid var(--line)" : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-5 md:px-10">
        <a href="#top" className="display text-[0.95rem] tracking-[0.22em]">
          VAGISH SHARMA
        </a>
        <nav className="hidden items-center gap-8 font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.18em] text-[var(--ink-soft)] sm:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-[var(--accent)]">
              {l.label}
            </a>
          ))}
          <a
            href="mailto:vagishsharma1234@gmail.com"
            className="border border-[var(--ink)] px-3 py-2 text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)]"
          >
            Email
          </a>
        </nav>
        <a
          href="mailto:vagishsharma1234@gmail.com"
          className="font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.18em] sm:hidden"
        >
          Email
        </a>
      </div>
    </motion.header>
  );
}
