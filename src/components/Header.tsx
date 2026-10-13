"use client";

import { motion } from "framer-motion";

const links = [
  { href: "#work", label: "Work" },
  { href: "#craft", label: "Craft" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-5 md:px-8">
        <a
          href="#top"
          className="display text-sm tracking-[0.18em] text-[var(--ink)]"
        >
          VS
        </a>
        <nav className="flex items-center gap-6 font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.14em] text-[var(--muted)] md:gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-[var(--accent)]"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
