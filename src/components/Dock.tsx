"use client";

function IconUser() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5.5 19.5c1.6-3.2 4-4.8 6.5-4.8s4.9 1.6 6.5 4.8" />
    </svg>
  );
}

function IconBrief() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="7" width="17" height="12.5" rx="2" />
      <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" />
    </svg>
  );
}

function IconGrid() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="4" y="4" width="6.5" height="6.5" rx="1.2" />
      <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.2" />
      <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.2" />
      <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.2" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="6" width="17" height="12" rx="2" />
      <path d="m4.5 8 7.5 5 7.5-5" />
    </svg>
  );
}

const items = [
  { href: "#top", label: "About", Icon: IconUser },
  { href: "#experience", label: "Experience", Icon: IconBrief },
  { href: "#projects", label: "Projects", Icon: IconGrid },
  { href: "mailto:vagishsharma1234@gmail.com", label: "Email", Icon: IconMail },
];

export function Dock() {
  return (
    <nav className="dock" aria-label="Quick navigation">
      {items.map(({ href, label, Icon }) => (
        <a key={href} href={href} title={label} aria-label={label}>
          <Icon />
        </a>
      ))}
    </nav>
  );
}
