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
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.35]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="/images/hero-atmosphere.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,9,13,0.35)_0%,rgba(7,9,13,0.55)_45%,rgba(7,9,13,0.92)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(7,9,13,0.55)_75%)]" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative mx-auto flex min-h-[100svh] max-w-[1200px] flex-col justify-end px-5 pb-16 pt-32 md:px-8 md:pb-24"
      >
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow mb-6"
        >
          Backend Software Engineer · ~1 YOE
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="display max-w-[12ch] text-[clamp(3.6rem,12vw,7.8rem)] text-[var(--ink)]"
        >
          Vagish
          <br />
          Sharma
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 max-w-[34rem] text-[1.15rem] leading-relaxed text-[var(--muted)] md:text-[1.25rem]"
        >
          I design and ship{" "}
          <span className="serif text-[var(--ink)]">C# / .NET REST APIs</span>{" "}
          and SQL Server systems for enterprise platforms — clear contracts,
          fast queries, reliable integrations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a className="btn btn-primary" href="mailto:vagishsharma1234@gmail.com">
            Start a conversation
          </a>
          <a className="btn btn-ghost" href="#work">
            View selected work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="mt-16 flex items-center gap-3 font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.16em] text-[var(--muted)]"
        >
          <span className="inline-block h-px w-10 bg-[var(--accent)]" />
          Scroll to explore
        </motion.div>
      </motion.div>
    </section>
  );
}
