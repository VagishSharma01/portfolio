"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const skills = [
  "C#",
  ".NET Core",
  "ASP.NET Web API",
  "REST",
  "SQL Server",
  "T-SQL",
  "Stored Procedures",
  "Azure",
  "Azure OpenAI",
  "AWS",
  "React",
  "Angular",
  "Git",
  "Postman",
  "Swagger",
  "JWT",
];

const projects = [
  {
    title: "SQL Database",
    href: "https://github.com/VagishSharma01/SQL_Database",
    image: "/images/work-sql-lux.jpg",
    copy: "Relational model for a social product — schema, queries, ER thinking.",
    meta: "SQL · modeling",
  },
  {
    title: "Movie App",
    href: "https://github.com/VagishSharma01/Movie_App",
    image: "/images/work-movie-lux.jpg",
    copy: "Search-first movie explorer on TMDb with a calm, responsive UI.",
    meta: "HTML · CSS · JS",
  },
  {
    title: "Number Plate Detection",
    href: "https://github.com/VagishSharma01/Number_Plate_detection",
    image: "/images/work-anpd-lux.jpg",
    copy: "Locate plates, extract text — OpenCV meeting OCR under messy light.",
    meta: "Python · CV",
  },
  {
    title: "Art Classification",
    href: "https://github.com/VagishSharma01/Art_Image_Classification",
    image: "/images/work-art-lux.jpg",
    copy: "Transfer-learning ensemble with an SVM head — method over magic.",
    meta: "ML · ensembles",
  },
];

function Chapter({
  id,
  num,
  title,
  children,
}: {
  id: string;
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [28, -28]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.85, 1], [0.55, 1, 1, 0.7]);

  return (
    <motion.section
      id={id}
      ref={ref}
      className="chapter"
      style={{ y, opacity }}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="chapter-head">
        <h2>{title}</h2>
        <span className="chapter-num">{num}</span>
      </div>
      {children}
    </motion.section>
  );
}

export function Chapters() {
  return (
    <div>
      <Chapter id="about" num="01" title="About">
        <p className="lead">
          I’m a backend engineer (~1 YOE) who ships C# / .NET REST APIs and SQL
          Server workflows for enterprise partner systems. I like work where the
          contract is honest, the query plan is intentional, and production
          surprises get traced — not shrugged off.
        </p>
        <p className="lead" style={{ marginTop: "0.9rem" }}>
          AWS Solutions Architect – Associate. Azure fundamentals. Looking for
          Backend / Software Engineer roles in Bengaluru, Delhi NCR, or remote
          India.
        </p>
      </Chapter>

      <Chapter id="stack" num="02" title="Stack">
        <p className="lead">
          Tools I actually use to move tickets — not a museum of logos.
        </p>
        <div className="skills">
          {skills.map((s) => (
            <span key={s} className="skill">
              {s}
            </span>
          ))}
        </div>
      </Chapter>

      <Chapter id="experience" num="03" title="Experience">
        <p className="lead">
          Recent production work, written without employer name-dropping.
        </p>
        <div className="timeline">
          <article className="job">
            <div className="job-top">
              <h3>Enterprise warranty & service-order platform</h3>
              <time>Sep 2025 – Present</time>
            </div>
            <p className="role">Senior Software Engineer</p>
            <ul>
              <li>
                Build partner-facing Create / Patch / Get APIs on C# / .NET + SQL
                Server.
              </li>
              <li>
                Cut service-order query latency ~30% via stored-procedure and
                indexing work.
              </li>
              <li>
                Closed 50+ backend/integration defects across API, DB, and
                interface config.
              </li>
            </ul>
          </article>
          <article className="job">
            <div className="job-top">
              <h3>Cloud architecture internship</h3>
              <time>Aug 2023 – Nov 2023</time>
            </div>
            <p className="role">AWS Solutions Architect Intern</p>
            <ul>
              <li>
                Designed and launched a skill-sharing platform on EC2, S3, and
                IAM.
              </li>
            </ul>
          </article>
        </div>
      </Chapter>

      <Chapter id="work" num="04" title="Selected work">
        <p className="lead">
          Public repos that show how I think — data first, UI when it earns its
          place.
        </p>
        <div className="projects">
          {projects.map((p) => (
            <a
              key={p.title}
              className="project"
              href={p.href}
              target="_blank"
              rel="noreferrer"
            >
              <div className="project-media">
                <Image src={p.image} alt="" fill sizes="(max-width:700px) 100vw, 40vw" />
              </div>
              <div className="project-body">
                <h3>{p.title}</h3>
                <p>{p.copy}</p>
                <div className="project-meta">{p.meta}</div>
              </div>
            </a>
          ))}
        </div>
      </Chapter>

      <Chapter id="contact" num="05" title="Contact">
        <p className="lead">
          If you’re hiring for backend work that needs ownership, email me. Resume
          on request.
        </p>
        <div className="rail-links" style={{ marginTop: "1.2rem" }}>
          <a className="link" href="mailto:vagishsharma1234@gmail.com">
            vagishsharma1234@gmail.com
          </a>
          <a
            className="link"
            href="https://www.linkedin.com/in/vagish-sharma-531132283/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <p className="lead" style={{ marginTop: "1.2rem", fontSize: "0.85rem" }}>
          B.Tech CSE · VIT Chennai · 2021–2025 · CGPA 8.74/10
        </p>
      </Chapter>
    </div>
  );
}
