"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#hero", id: "hero", label: "Intro" },
  { href: "#work", id: "work", label: "Projects" },
  { href: "#experience", id: "experience", label: "Experience" },
  { href: "#stack", id: "stack", label: "Skills" },
  { href: "#contact", id: "contact", label: "Contact" },
];

export function Rail() {
  const [active, setActive] = useState("hero");

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
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.15, 0.4, 0.7] },
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <aside className="rail">
      <div className="brand">
        Vagish
        <br />
        Sharma
      </div>
      <div className="role">Software Engineer · Bengaluru</div>
      <p className="rail-blurb">
        Production APIs, SQL performance, and cloud-connected backends.
      </p>

      <nav className="rail-nav" aria-label="Sections">
        {links.map((l) => (
          <a
            key={l.id}
            href={l.href}
            className={active === l.id ? "active" : undefined}
          >
            <span className="tick" aria-hidden />
            {l.label}
          </a>
        ))}
      </nav>

      <div className="rail-links">
        <a className="link btn-primary" href="/Vagish_Sharma_Resume.pdf" download>
          Resume
        </a>
        <a className="link" href="mailto:vagishsharma1234@gmail.com">
          Email
        </a>
        <a
          className="link"
          href="https://github.com/VagishSharma01"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </aside>
  );
}
