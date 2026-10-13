export function MobileBar() {
  return (
    <header className="mobile-bar">
      <a href="#hero" className="brand-mini">
        Vagish Sharma
      </a>
      <nav className="mobile-nav" aria-label="Mobile">
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="/Vagish_Sharma_Resume.pdf" download>
          Résumé
        </a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
