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
        <a
          href="#top"
          className="display text-[0.95rem] tracking-[0.22em]"
          style={{ color: solid ? "var(--ink)" : "var(--paper)" }}
        >
          VAGISH SHARMA
        </a>
        <nav
          className="hidden items-center gap-8 font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.18em] sm:flex"
          style={{ color: solid ? "var(--ink-soft)" : "rgba(243,244,246,0.8)" }}
        >
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:opacity-70">
              {l.label}
            </a>
          ))}
          <a
            href="mailto:vagishsharma1234@gmail.com"
            className="border px-3 py-2 transition"
            style={{
              borderColor: solid ? "var(--ink)" : "var(--paper)",
              color: solid ? "var(--ink)" : "var(--paper)",
              background: "transparent",
            }}
          >
            Email
          </a>
        </nav>
        <a
          href="mailto:vagishsharma1234@gmail.com"
          className="font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.18em] sm:hidden"
          style={{ color: solid ? "var(--ink)" : "var(--paper)" }}
        >
          Email
        </a>
      </div>
    </motion.header>
  );
}
