"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    index: "01",
    title: "SQL Database",
    meta: "Relational systems",
    href: "https://github.com/VagishSharma01/SQL_Database",
    image: "/images/work-sql-lux.jpg",
    copy: "A complete social-platform schema — users, posts, media, likes, comments, hashtags, follows — with DDL, query patterns, and an ER model built for a real product surface.",
  },
  {
    index: "02",
    title: "Movie App",
    meta: "Product interface",
    href: "https://github.com/VagishSharma01/Movie_App",
    image: "/images/work-movie-lux.jpg",
    copy: "A refined movie explorer on TMDb: search, rating-forward presentation, and responsive composition — an exercise in clarity over chrome.",
  },
  {
    index: "03",
    title: "Number Plate Detection",
    meta: "Computer vision",
    href: "https://github.com/VagishSharma01/Number_Plate_detection",
    image: "/images/work-anpd-lux.jpg",
    copy: "Detection and recognition from still imagery — OpenCV cascade work meeting CNN/OCR extraction under imperfect lighting.",
  },
  {
    index: "04",
    title: "Art Image Classification",
    meta: "Applied machine learning",
    href: "https://github.com/VagishSharma01/Art_Image_Classification",
    image: "/images/work-art-lux.jpg",
    copy: "Transfer-learning ensemble across GoogLeNet, VGG-19, Xception, and ResNet-50 with an SVM head — methodical model comparison, not demo theater.",
  },
];

function ProjectBlock({
  p,
  reverse,
}: {
  p: (typeof projects)[number];
  reverse: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <motion.a
      ref={ref}
      href={p.href}
      target="_blank"
      rel="noreferrer"
      className="project group block border-t border-[var(--line)] py-14 md:py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={`grid items-center gap-8 md:grid-cols-12 md:gap-12 ${
          reverse ? "" : ""
        }`}
      >
        <div
          className={`media-frame aspect-[16/10] md:col-span-7 ${
            reverse ? "md:order-2" : ""
          }`}
        >
          <motion.div style={{ y }} className="absolute inset-[-8%]">
            <Image
              src={p.image}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover"
            />
          </motion.div>
        </div>

        <div className={`md:col-span-5 ${reverse ? "md:order-1" : ""}`}>
          <div className="mb-5 flex items-baseline justify-between gap-4">
            <p className="eyebrow">{p.meta}</p>
            <span className="font-[family-name:var(--font-mono)] text-[0.68rem] tracking-[0.16em] text-[var(--muted)]">
              {p.index}
            </span>
          </div>
          <h3 className="display text-[clamp(2.2rem,4.5vw,3.6rem)]">{p.title}</h3>
          <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-[var(--ink-soft)]">
            {p.copy}
          </p>
          <span className="mt-8 inline-flex items-center gap-3 font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.16em] text-[var(--accent)]">
            View repository
            <span className="h-px w-10 bg-[var(--accent)] transition-all group-hover:w-16" />
          </span>
        </div>
      </div>
    </motion.a>
  );
}

export function Work() {
  return (
    <section id="work" className="px-5 md:px-10">
      <div className="mx-auto max-w-[1400px] py-20 md:py-28">
        <div className="mb-6 grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="eyebrow mb-4">Selected work</p>
            <h2 className="display text-[clamp(2.8rem,7vw,5.5rem)]">
              Substance
              <span className="serif block text-[var(--warm)]">over spectacle.</span>
            </h2>
          </div>
          <p className="max-w-sm text-[var(--ink-soft)] md:col-span-5 md:justify-self-end md:text-right">
            Public repositories that show how I think about data, interfaces, and
            applied systems — not a wallpaper of badges.
          </p>
        </div>

        <div>
          {projects.map((p, i) => (
            <ProjectBlock key={p.title} p={p} reverse={i % 2 === 1} />
          ))}
        </div>

        <div className="mt-8 border-t border-[var(--line)] pt-14">
          <p className="eyebrow mb-8">Also on the resume</p>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                t: "Flight Booking System",
                d: ".NET Core, ASP.NET Web API, SQL Server, React, JWT — booking flows with RBAC and query tuning for availability search.",
              },
              {
                t: "AI Document Intelligence",
                d: "Azure OpenAI + OCR pipelines that pull structured fields from PDFs, Word, and images.",
              },
              {
                t: "Enterprise service-order APIs",
                d: "Partner Create / Patch / Get endpoints, SQL latency work (~30%), fifty-plus integration fixes across API and data layers.",
              },
            ].map((item) => (
              <article key={item.t} className="border-t border-[var(--ink)] pt-5">
                <h3 className="display text-2xl">{item.t}</h3>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-[var(--ink-soft)]">
                  {item.d}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
