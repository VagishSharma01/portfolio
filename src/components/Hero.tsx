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
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section id="top" ref={ref} className="relative">
      {/* Full-bleed visual plane */}
      <div className="relative h-[72svh] min-h-[520px] w-full overflow-hidden md:h-[86svh]">
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
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,18,20,0.18)_0%,rgba(16,18,20,0.05)_40%,rgba(243,244,246,0)_70%)]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,transparent,var(--paper))]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 pb-16 pt-8 md:px-10 md:pb-24 md:pt-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow mb-6"
        >
          Backend Software Engineer · ~1 YOE
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="display max-w-[11ch] text-[clamp(4.2rem,13vw,9.5rem)] text-[var(--ink)]"
        >
          Vagish
          <br />
          Sharma
        </motion.h1>

        <div className="mt-10 grid gap-10 md:grid-cols-12 md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.9 }}
            className="max-w-xl text-[1.2rem] leading-[1.55] text-[var(--ink-soft)] md:col-span-7 md:text-[1.35rem]"
          >
            I build{" "}
            <span className="serif text-[1.35em] text-[var(--ink)]">
              C# / .NET REST APIs
            </span>{" "}
            and SQL Server systems for enterprise platforms — contracts that stay
            clear, queries that stay fast, integrations that stay honest.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-wrap gap-3 md:col-span-5 md:justify-end"
          >
            <a className="btn btn-primary" href="mailto:vagishsharma1234@gmail.com">
              Inquire
            </a>
            <a className="btn btn-ghost" href="#work">
              Selected work
            </a>
          </motion.div>
        </div>
      </div>

      <div className="marquee" aria-hidden>
        <div className="marquee-track">
          {[
            "C#",
            ".NET Core",
            "SQL Server",
            "Azure",
            "REST APIs",
            "AWS",
            "System Design",
            "Integrations",
            "C#",
            ".NET Core",
            "SQL Server",
            "Azure",
            "REST APIs",
            "AWS",
            "System Design",
            "Integrations",
          ].map((t, i) => (
            <span key={`${t}-${i}`}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
