"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { easeExpo, springSnappy, springSoft, tapScale } from "@/lib/motion";

const links = [
  { href: "#hero", id: "hero", label: "Profile", num: "00" },
  { href: "#work", id: "work", label: "Selected work", num: "01" },
  { href: "#experience", id: "experience", label: "Experience", num: "02" },
  { href: "#stack", id: "stack", label: "Stack", num: "03" },
  { href: "#notes", id: "notes", label: "Notes", num: "04" },
  { href: "#contact", id: "contact", label: "Contact", num: "05" },
];

export function Rail() {
  const [active, setActive] = useState("hero");
  const reduce = useReducedMotion();

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[];

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-18% 0px -55% 0px", threshold: [0.15, 0.45, 0.7] },
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <aside className="rail" aria-label="Site">
      <motion.div
        className="brand"
        initial={reduce ? false : { opacity: 0, y: 12, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.65, ease: easeExpo }}
      >
        Vagish
        <br />
        Sharma
      </motion.div>
      <motion.div
        className="role"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.45 }}
      >
        Software Engineering
      </motion.div>
      <motion.p
        className="rail-blurb"
        initial={reduce ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.28, duration: 0.5, ease: easeExpo }}
      >
        Backend systems, REST APIs, SQL performance, cloud integrations.
      </motion.p>

      <nav className="rail-nav" aria-label="Sections">
        {links.map((l, i) => {
          const isActive = active === l.id;
          return (
            <motion.a
              key={l.id}
              href={l.href}
              className={isActive ? "active" : undefined}
              aria-current={isActive ? "true" : undefined}
              initial={reduce ? false : { opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.32 + i * 0.04, duration: 0.4, ease: easeExpo }}
              whileHover={reduce ? undefined : { x: 2 }}
            >
              <span className="num" aria-hidden>
                {l.num}
              </span>
              <span className="tick-wrap" aria-hidden>
                {isActive && !reduce ? (
                  <motion.span
                    className="tick active-tick"
                    layoutId="rail-tick"
                    transition={springSnappy}
                  />
                ) : (
                  <span className={`tick${isActive ? " active-tick" : ""}`} />
                )}
              </span>
              {l.label}
            </motion.a>
          );
        })}
      </nav>

      <motion.div
        className="rail-links"
        initial={reduce ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.45, ease: easeExpo }}
      >
        <motion.a
          className="btn btn-primary"
          href="/Vagish_Sharma_Resume.pdf"
          download
          whileHover={reduce ? undefined : { y: -1 }}
          whileTap={reduce ? undefined : tapScale}
          transition={springSoft}
        >
          Résumé
        </motion.a>
        <a className="btn" href="mailto:vagishsharma1234@gmail.com">
          Email
        </a>
        <a
          className="btn"
          href="https://github.com/VagishSharma01"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className="btn"
          href="https://www.linkedin.com/in/vagish-sharma-531132283/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </motion.div>
    </aside>
  );
}
