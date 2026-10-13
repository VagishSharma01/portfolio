"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "SQL Database",
    meta: "Schema · Queries · ER",
    href: "https://github.com/VagishSharma01/SQL_Database",
    image: "/images/project-sql.jpg",
    copy: "A social-platform relational model — users, posts, likes, comments, hashtags, follows — with DDL, analytical queries, and an ER diagram ready for a product frontend.",
  },
  {
    title: "Movie App",
    meta: "HTML · CSS · JS · TMDb",
    href: "https://github.com/VagishSharma01/Movie_App",
    image: "/images/project-movie.jpg",
    copy: "A polished movie explorer with live search, rating-forward cards, and responsive layout — built as a crisp client experience on public film data.",
  },
  {
    title: "Number Plate Detection",
    meta: "Python · OpenCV · OCR",
    href: "https://github.com/VagishSharma01/Number_Plate_detection",
    image: "/images/project-anpd.jpg",
    copy: "Computer-vision pipeline for locating plates and extracting alphanumerics from still imagery — cascade detection meeting CNN/OCR recognition.",
  },
  {
    title: "Art Image Classification",
    meta: "Transfer learning · SVM",
    href: "https://github.com/VagishSharma01/Art_Image_Classification",
    image: "/images/project-art.jpg",
    copy: "Ensemble classification across GoogLeNet, VGG-19, Xception, and ResNet-50 with an SVM head — applied ML with a museum-grade visual problem.",
  },
];

export function Work() {
  return (
    <section id="work" className="relative px-5 py-28 md:px-8 md:py-36">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-16 max-w-2xl md:mb-24">
          <p className="eyebrow mb-4">Selected work</p>
          <h2 className="display text-[clamp(2.4rem,6vw,4.4rem)]">
            Projects with
            <span className="serif block text-[var(--warm)]">
              substance, not noise.
            </span>
          </h2>
        </div>

        <div className="flex flex-col gap-20 md:gap-28">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="project-row group grid items-center gap-8 md:grid-cols-12 md:gap-10"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className={`project-media relative aspect-[16/10] overflow-hidden rounded-[2px] md:col-span-7 ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <Image
                  src={p.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>
              <div
                className={`md:col-span-5 ${i % 2 === 1 ? "md:order-1" : ""}`}
              >
                <p className="eyebrow mb-3">{p.meta}</p>
                <h3 className="display text-[clamp(1.8rem,3.5vw,2.8rem)]">
                  {p.title}
                </h3>
                <p className="mt-4 text-[1.05rem] leading-relaxed text-[var(--muted)]">
                  {p.copy}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.14em] text-[var(--accent)]">
                  Open repository
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="mt-24 border-t border-[var(--line)] pt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow mb-6">Also from the resume</p>
          <ul className="grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Flight Booking System",
                d: ".NET Core · ASP.NET Web API · SQL Server · React · JWT",
              },
              {
                t: "AI Document Intelligence",
                d: "Azure OpenAI · OCR · Python pipelines for structured extraction",
              },
              {
                t: "Enterprise service-order APIs",
                d: "Partner Create / Patch / Get · SQL tuning (~30% latency) · 50+ integration fixes",
              },
            ].map((item) => (
              <li key={item.t} className="border-l border-[var(--line)] pl-5">
                <h4 className="display text-xl">{item.t}</h4>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  {item.d}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
