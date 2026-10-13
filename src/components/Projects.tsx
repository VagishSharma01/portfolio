import Image from "next/image";

const projects = [
  {
    title: "SQL Database",
    dates: "2025",
    href: "https://github.com/VagishSharma01/SQL_Database",
    image: "/images/work-sql-lux.jpg",
    stack: ["SQL", "Schema design", "ER modeling"],
  },
  {
    title: "Movie App",
    dates: "2024",
    href: "https://github.com/VagishSharma01/Movie_App",
    image: "/images/work-movie-lux.jpg",
    stack: ["HTML", "CSS", "JavaScript", "TMDb"],
  },
  {
    title: "Number Plate Detection",
    dates: "2024",
    href: "https://github.com/VagishSharma01/Number_Plate_detection",
    image: "/images/work-anpd-lux.jpg",
    stack: ["Python", "OpenCV", "CNN", "OCR"],
  },
  {
    title: "Art Image Classification",
    dates: "2023",
    href: "https://github.com/VagishSharma01/Art_Image_Classification",
    image: "/images/work-art-lux.jpg",
    stack: ["Transfer learning", "SVM", "Python"],
  },
  {
    title: "Flight Booking System",
    dates: "Resume",
    href: "mailto:vagishsharma1234@gmail.com?subject=Flight%20Booking%20System",
    image: "/images/work-sql-lux.jpg",
    stack: [".NET Core", "SQL Server", "React", "JWT"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="section">
      <h2>My recent projects</h2>
      <p className="hint">A few favorites. Click a tile to open the repo.</p>

      <div className="card">
        {projects.map((p, i) => (
          <a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className="proj"
            style={
              i < projects.length - 1
                ? { borderBottom: "1px solid var(--line)" }
                : undefined
            }
          >
            <div className="proj-thumb">
              <Image
                src={p.image}
                alt=""
                fill
                sizes="72px"
                className="object-cover"
              />
            </div>
            <div>
              <div className="proj-top">
                <div className="proj-title">{p.title}</div>
                <div className="proj-date">{p.dates}</div>
              </div>
              <div className="proj-stack">
                {p.stack.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
