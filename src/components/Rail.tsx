"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { springSnappy } from "@/lib/motion";

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
      <div className="brand">
        Vagish
        <br />
        Sharma
      </div>
      <div className="role">Software Engineering</div>
      <p className="rail-blurb">
        Backend systems, REST APIs, SQL performance, cloud integrations.
      </p>

      <nav className="rail-nav" aria-label="Sections">
        {links.map((l) => {
          const isActive = active === l.id;
          return (
            <a
              key={l.id}
              href={l.href}
              className={isActive ? "active" : undefined}
              aria-current={isActive ? "true" : undefined}
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
            </a>
          );
        })}
      </nav>

      <div className="rail-links">
        <motion.a
          className="btn btn-primary"
          href="/Vagish_Sharma_Resume.pdf"
          download
          whileHover={reduce ? undefined : { y: -1 }}
          whileTap={reduce ? undefined : { scale: 0.98 }}
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
      </div>
    </aside>
  );
}
