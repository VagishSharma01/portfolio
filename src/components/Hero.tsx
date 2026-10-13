"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <section id="top" ref={ref} className="relative">
      <div className="relative min-h-[100svh] w-full overflow-hidden">
        <motion.div style={{ y, scale }} className="absolute inset-0">
          <Image
            src="/images/hero-atelier.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        {/* Atmospheric wash — keep photo dominant, text readable */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,18,20,0.28)_0%,rgba(16,18,20,0.12)_35%,rgba(16,18,20,0.55)_100%)]" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-5 pb-14 pt-28 md:px-10 md:pb-20">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.2em] text-[rgba(243,244,246,0.78)]"
          >
            Backend Software Engineer · ~1 YOE
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="display max-w-[11ch] text-[clamp(4.4rem,13vw,9.2rem)] text-[var(--paper)]"
          >
            Vagish
            <br />
            Sharma
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.85 }}
            className="mt-7 max-w-xl text-[1.15rem] leading-relaxed text-[rgba(243,244,246,0.82)] md:text-[1.28rem]"
          >
            I build{" "}
            <span className="serif text-[1.25em] text-[var(--paper)]">
              C# / .NET REST APIs
            </span>{" "}
            and SQL Server systems — clear contracts, fast queries, reliable
            integrations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a
              href="mailto:vagishsharma1234@gmail.com"
              className="inline-flex items-center border border-[var(--paper)] bg-[var(--paper)] px-5 py-4 font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.14em] text-[var(--ink)] transition hover:bg-transparent hover:text-[var(--paper)]"
            >
              Inquire
            </a>
            <a
              href="#work"
              className="inline-flex items-center border border-[rgba(243,244,246,0.55)] px-5 py-4 font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.14em] text-[var(--paper)] transition hover:border-[var(--paper)]"
            >
              Selected work
            </a>
          </motion.div>
        </div>
      </div>

      <div className="marquee" aria-hidden>
        <div className="marquee-track">
          {Array.from({ length: 2 }).flatMap((_, pass) =>
            [
              "C#",
              ".NET Core",
              "SQL Server",
              "Azure",
              "REST APIs",
              "AWS",
              "System Design",
              "Integrations",
            ].map((t) => (
              <span key={`${pass}-${t}`}>{t}</span>
            )),
          )}
        </div>
      </div>
    </section>
  );
}
