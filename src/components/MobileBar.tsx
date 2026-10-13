export function MobileBar() {
  return (
    <div className="mobile-bar">
      <a href="#hero" className="brand-mini">
        Vagish Sharma
      </a>
      <nav className="mobile-nav" aria-label="Mobile">
        <a href="#work">Projects</a>
        <a href="#experience">Experience</a>
        <a href="/Vagish_Sharma_Resume.pdf" download>
          Resume
        </a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );
}
