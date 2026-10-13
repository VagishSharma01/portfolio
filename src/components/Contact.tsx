"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="px-5 md:px-10">
      <div className="mx-auto max-w-[1400px] py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="border border-[var(--ink)] bg-[var(--ink)] px-6 py-16 text-[var(--paper)] md:px-16 md:py-24"
        >
          <p className="font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.18em] text-[rgba(243,244,246,0.55)]">
            Contact
          </p>
          <h2 className="display mt-5 max-w-[12ch] text-[clamp(3rem,8vw,6rem)]">
            Hire for
            <span className="serif block text-[rgba(228,181,122,0.95)]">
              durable backends.
            </span>
          </h2>
          <p className="mt-7 max-w-xl text-[1.15rem] leading-relaxed text-[rgba(243,244,246,0.72)]">
            Open to Backend / Software Engineer roles — Bengaluru, Delhi NCR, or
            remote India. Resume on request.
          </p>

          <div className="mt-12 flex flex-wrap gap-3">
            <a
              href="mailto:vagishsharma1234@gmail.com"
              className="inline-flex items-center border border-[var(--paper)] bg-[var(--paper)] px-5 py-4 font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.14em] text-[var(--ink)] transition hover:bg-transparent hover:text-[var(--paper)]"
            >
              vagishsharma1234@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/vagish-sharma-531132283/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center border border-[rgba(243,244,246,0.35)] px-5 py-4 font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.14em] text-[var(--paper)] transition hover:border-[var(--paper)]"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/VagishSharma01"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center border border-[rgba(243,244,246,0.35)] px-5 py-4 font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.14em] text-[var(--paper)] transition hover:border-[var(--paper)]"
            >
              GitHub
            </a>
          </div>

          <p className="mt-14 font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.16em] text-[rgba(243,244,246,0.45)]">
            B.Tech CSE · VIT Chennai · 2021–2025 · CGPA 8.74/10
          </p>
        </motion.div>

        <footer className="flex items-center justify-between gap-4 py-10 font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.14em] text-[var(--muted)]">
          <span>© {new Date().getFullYear()} Vagish Sharma</span>
          <a
            href="https://github.com/VagishSharma01/portfolio"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--accent)]"
          >
            Source
          </a>
        </footer>
      </div>
    </section>
  );
}
