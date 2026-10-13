"use client";

import { useEffect, useId, useState } from "react";

const links = [
  { href: "#hero", label: "Profile", num: "00" },
  { href: "#work", label: "Work", num: "01" },
  { href: "#experience", label: "Experience", num: "02" },
  { href: "#stack", label: "Stack", num: "03" },
  { href: "#contact", label: "Contact", num: "05" },
  { href: "/Vagish_Sharma_Resume.pdf", label: "Résumé", num: "↓", download: true },
];

export function MobileBar() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="mobile-bar">
      <a href="#hero" className="brand-mini" onClick={() => setOpen(false)}>
        Vagish Sharma
      </a>
      <button
        type="button"
        className="menu-toggle"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "Close" : "Menu"}
      </button>
      <div id={panelId} className={`mobile-drawer${open ? " open" : ""}`}>
        <nav aria-label="Mobile sections">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              {...(l.download ? { download: true } : {})}
              onClick={() => setOpen(false)}
            >
              <span className="num" aria-hidden>
                {l.num}
              </span>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
