"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="relative px-5 pb-10 pt-16 md:px-8 md:pt-24">
      <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[2px] border border-[var(--line)] bg-[linear-gradient(145deg,rgba(126,224,198,0.08),rgba(14,19,27,0.9)_40%,rgba(228,181,122,0.08))] px-6 py-16 md:px-14 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow mb-4">Contact</p>
          <h2 className="display max-w-[14ch] text-[clamp(2.6rem,7vw,5rem)]">
            Let’s build something
            <span className="serif text-[var(--warm)]"> durable.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-[var(--muted)]">
            Open to Backend / Software Engineer roles — Bengaluru, Delhi NCR, or
            remote India. Resume on request.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a className="btn btn-primary" href="mailto:vagishsharma1234@gmail.com">
              vagishsharma1234@gmail.com
            </a>
            <a
              className="btn btn-ghost"
              href="https://www.linkedin.com/in/vagish-sharma-531132283/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="btn btn-ghost"
              href="https://github.com/VagishSharma01"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>

          <p className="mt-12 font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.12em] text-[var(--muted)]">
            B.Tech CSE · VIT Chennai · 2021–2025 · CGPA 8.74/10
          </p>
        </motion.div>
      </div>

      <footer className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 py-10 font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.12em] text-[var(--muted)]">
        <span>© {new Date().getFullYear()} Vagish Sharma</span>
        <a
          href="https://github.com/VagishSharma01/portfolio"
          className="hover:text-[var(--accent)]"
          target="_blank"
          rel="noreferrer"
        >
          Source
        </a>
      </footer>
    </section>
  );
}
