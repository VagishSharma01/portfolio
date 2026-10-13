"use client";

import { useState } from "react";

type Job = {
  id: string;
  mark: string;
  dates: string;
  title: string;
  role: string;
  bullets: string[];
  stack: string[];
};

const jobs: Job[] = [
  {
    id: "enterprise",
    mark: "SE",
    dates: "Sep 2025 – Present",
    title: "Enterprise warranty & service-order platform",
    role: "Senior Software Engineer",
    bullets: [
      "Build C# / .NET REST APIs and SQL Server components for partner service-order workflows.",
      "Shipped Create, Patch, and Get APIs so partner channels can submit and update orders reliably.",
      "Tuned stored procedures and indexing — ~30% lower service-order query latency.",
      "Resolved 50+ backend and integration defects across API, database, and interface configuration.",
    ],
    stack: ["C#", ".NET", "REST APIs", "SQL Server", "T-SQL", "Azure", "Postman", "Swagger"],
  },
  {
    id: "cloud",
    mark: "AWS",
    dates: "Aug 2023 – Nov 2023",
    title: "Cloud architecture internship",
    role: "AWS Solutions Architect Intern",
    bullets: [
      "Led design and AWS deployment of a skill-sharing platform on EC2, S3, and IAM.",
      "Covered architecture, access control, and launch readiness end to end.",
    ],
    stack: ["AWS", "EC2", "S3", "IAM"],
  },
];

export function Experience() {
  const [open, setOpen] = useState<string | null>(jobs[0].id);

  return (
    <section id="experience" className="section">
      <h2>Work Experience</h2>
      <p className="hint">Click a role to learn more.</p>

      {jobs.map((job) => {
        const isOpen = open === job.id;
        return (
          <div key={job.id} className="card">
            <button
              type="button"
              className="exp-btn"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : job.id)}
            >
              <span className="logo-dot" aria-hidden>
                {job.mark}
              </span>
              <span>
                <div className="exp-meta">{job.dates}</div>
                <div className="exp-title">{job.title}</div>
                <div className="exp-role">{job.role}</div>
              </span>
              <span className={`chev ${isOpen ? "open" : ""}`} aria-hidden>
                ›
              </span>
            </button>

            {isOpen ? (
              <div className="exp-body">
                <ul>
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="skills">
                  {job.stack.map((t) => (
                    <span key={t} className="tag accent">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        );
      })}
    </section>
  );
}
