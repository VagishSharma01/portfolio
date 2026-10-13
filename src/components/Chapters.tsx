"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import { CopyEmail } from "@/components/CopyEmail";

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
  return (
    <motion.section
      id={id}
      className="chapter"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="chapter-head">
        <h2>{title}</h2>
        <span className="chapter-num">{num}</span>
      </div>
      {children}
    </motion.section>
  );
}

function ApiDiagram() {
  return (
    <div className="diagram" role="img" aria-label="Partner clients to .NET REST API to SQL Server">
      <svg viewBox="0 0 640 200">
        <rect width="640" height="200" fill="#0c1014" />
        <rect x="24" y="68" width="118" height="52" rx="3" fill="#10151b" stroke="#53e2cb" />
        <text x="83" y="99" fill="#e1e6ef" fontSize="12" textAnchor="middle" fontFamily="monospace">
          Partner
        </text>
        <path d="M152 94 H214" stroke="#53e2cb" strokeWidth="1.5" />
        <rect x="220" y="40" width="200" height="108" rx="3" fill="#10151b" stroke="#29313b" />
        <text x="320" y="70" fill="#53e2cb" fontSize="11" textAnchor="middle" fontFamily="monospace">
          .NET REST API
        </text>
        <text x="320" y="92" fill="#929db0" fontSize="11" textAnchor="middle" fontFamily="monospace">
          Create · Patch · Get
        </text>
        <text x="320" y="114" fill="#929db0" fontSize="11" textAnchor="middle" fontFamily="monospace">
          validation · mapping
        </text>
        <path d="M430 94 H492" stroke="#e5b477" strokeWidth="1.5" />
        <rect x="498" y="68" width="118" height="52" rx="3" fill="#10151b" stroke="#e5b477" />
        <text x="557" y="92" fill="#e1e6ef" fontSize="12" textAnchor="middle" fontFamily="monospace">
          SQL Server
        </text>
        <text x="557" y="110" fill="#929db0" fontSize="10" textAnchor="middle" fontFamily="monospace">
          procs · indexes
        </text>
      </svg>
    </div>
  );
}

function AgentFlowDiagram({
  label,
  steps,
}: {
  label: string;
  steps: string[];
}) {
  const w = 640;
  const gap = 12;
  const boxW = (w - 48 - gap * (steps.length - 1)) / steps.length;
  return (
    <div className="diagram" role="img" aria-label={label}>
      <svg viewBox="0 0 640 120">
        <rect width="640" height="120" fill="#0c1014" />
        {steps.map((s, i) => {
          const x = 24 + i * (boxW + gap);
          return (
            <g key={s}>
              {i > 0 ? (
                <path
                  d={`M${x - gap} 60 H${x}`}
                  stroke="#53e2cb"
                  strokeWidth="1.25"
                />
              ) : null}
              <rect
                x={x}
                y="34"
                width={boxW}
                height="52"
                rx="3"
                fill="#10151b"
                stroke={i === steps.length - 1 ? "#e5b477" : "#29313b"}
              />
              <text
                x={x + boxW / 2}
                y="65"
                fill="#e1e6ef"
                fontSize="11"
                textAnchor="middle"
                fontFamily="monospace"
              >
                {s}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function ProjectVisual({ slug }: { slug: string }) {
  if (slug === "service-order-api") return <ApiDiagram />;
  if (slug === "pr-review-agents") {
    return (
      <AgentFlowDiagram
        label="Security, Performance, Style agents into Lead Reviewer"
        steps={["Security", "Perf", "Style", "Lead"]}
      />
    );
  }
  if (slug === "market-analyst-agent") {
    return (
      <AgentFlowDiagram
        label="Quote, news, metrics tools into briefing"
        steps={["Quote", "News", "Metrics", "Report"]}
      />
    );
  }
  if (slug === "doc-intel-agent") {
    return (
      <AgentFlowDiagram
        label="Plan, OCR, extract, validate, persist"
        steps={["Plan", "OCR", "Extract", "Validate"]}
      />
    );
  }
  if (slug === "sql-database") {
    return (
      <div className="code-panel" aria-label="SQL schema excerpt">
        <pre>{`CREATE TABLE users (
  user_id INTEGER AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(30) NOT NULL
);
CREATE TABLE post (
  post_id INTEGER AUTO_INCREMENT PRIMARY KEY,
  user_id INTEGER NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(user_id)
);`}</pre>
      </div>
    );
  }
  if (slug === "flight-booking") {
    return (
      <AgentFlowDiagram
        label="Client to API to SQL with JWT"
        steps={["React", "Web API", "JWT", "SQL"]}
      />
    );
  }
  return null;
}

export function Chapters() {
  return (
    <div>
      <motion.section
        id="hero"
        className="chapter"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        aria-labelledby="hero-title"
      >
        <p className="hero-kicker">Vagish Sharma / Software Engineering · 00 — Profile</p>
        <h1 id="hero-title" className="hero-title">
          I build backend systems that work in production.
        </h1>
        <p className="hero-stack">C# / .NET / REST APIs / SQL SERVER / AZURE</p>
        <p className="lead">
          Software engineer focused on reliable APIs, database performance, and
          enterprise integrations. I build and troubleshoot backend workflows,
          optimize SQL queries, and turn production issues into measurable
          improvements.
        </p>
        <div className="cta-row">
          <a className="btn btn-primary" href="#work">
            Explore selected work ↗
          </a>
          <a className="btn" href="/Vagish_Sharma_Resume.pdf" download>
            Download résumé ↓
          </a>
        </div>
        <div className="proof" aria-label="Proof points">
          <div className="proof-item">
            <strong>50+</strong>
            <span>Backend / integration defects resolved</span>
          </div>
          <div className="proof-item">
            <strong>~30%</strong>
            <span>Service-order query latency reduction</span>
          </div>
          <div className="proof-item">
            <strong>.NET</strong>
            <span>Core engineering specialization</span>
          </div>
        </div>
      </motion.section>

      <Chapter id="work" num="01" title="Selected work">
        <p className="lead">
          Evidence-driven projects — production backend work, public agent demos,
          and SQL engineering. Open a case study for architecture and decisions.
        </p>
        <div className="projects">
          {projects.map((p) => (
            <article key={p.slug} className="case">
              <div className="case-top">
                <h3>
                  {p.title}
                  {p.featured ? <span className="case-badge">Featured</span> : null}
                </h3>
              </div>
              <div className="tech-row">
                {p.stack.map((t) => (
                  <span key={t} className="tech">
                    {t}
                  </span>
                ))}
              </div>
              <p className="outcome">{p.outcome}</p>
              <p className="detail">{p.problem}</p>
              <ProjectVisual slug={p.slug} />
              <p className="highlight">
                <strong>Highlight — </strong>
                {p.highlight}
              </p>
              <div className="case-links">
                <a className="btn btn-primary" href={`/work/${p.slug}`}>
                  Case study
                </a>
                {p.links
                  .filter((l) => !l.href.startsWith("/work/"))
                  .slice(0, 2)
                  .map((l) => (
                    <a
                      key={l.href}
                      className="btn"
                      href={l.href}
                      {...(l.external
                        ? { target: "_blank", rel: "noreferrer" }
                        : l.href.endsWith(".pdf")
                          ? { download: true }
                          : {})}
                    >
                      {l.label}
                    </a>
                  ))}
              </div>
            </article>
          ))}
        </div>
      </Chapter>

      <Chapter id="experience" num="02" title="Experience">
        <div className="timeline">
          <article className="job">
            <div className="job-top">
              <h3>Senior Software Engineer</h3>
              <time dateTime="2025-09">Sep 2025 – Present</time>
            </div>
            <p className="job-role">
              Capgemini · Enterprise warranty and service-order platform
            </p>
            <div className="tech-row">
              {["C#", ".NET", "SQL Server", "REST APIs"].map((t) => (
                <span key={t} className="tech">
                  {t}
                </span>
              ))}
            </div>
            <ul>
              <li>
                Developed and maintained partner-facing Create, Patch, and Get REST
                APIs using C# / .NET and SQL Server.
              </li>
              <li>
                Improved service-order query performance through stored-procedure
                and indexing changes, achieving approximately 30% lower latency.
              </li>
              <li>
                Resolved 50+ backend and integration defects spanning API logic,
                database workflows, timezone handling, and interface configuration.
              </li>
            </ul>
            <div className="challenge">
              <strong>Sanitized case: </strong>
              partner orders completed in the backend but did not appear in the UI.
              Traced API → database → interface flags, then fixed mapping / origin-code
              issues and timezone windows so regional batches executed in the intended
              interval.
            </div>
          </article>

          <article className="job">
            <div className="job-top">
              <h3>AWS Solutions Architect Intern</h3>
              <time dateTime="2023-08">Aug 2023 – Nov 2023</time>
            </div>
            <p className="job-role">Codemithra</p>
            <div className="tech-row">
              {["AWS", "EC2", "S3", "IAM"].map((t) => (
                <span key={t} className="tech">
                  {t}
                </span>
              ))}
            </div>
            <ul>
              <li>
                Led design and AWS deployment of a skill-sharing platform on EC2,
                S3, and IAM — architecture, access control, and launch.
              </li>
            </ul>
          </article>
        </div>
      </Chapter>

      <Chapter id="stack" num="03" title="Technical stack">
        <p className="lead">
          Backend-first specialization — technologies I can discuss in an interview
          from real project and production work.
        </p>
        <div className="skill-groups">
          <div className="skill-group">
            <h3>Backend engineering</h3>
            <div className="skills">
              {[
                "C#",
                "ASP.NET Core",
                "ASP.NET Web API",
                "REST APIs",
                "Entity Framework",
                "LINQ",
                "JWT",
              ].map((s) => (
                <span key={s} className="skill">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="skill-group">
            <h3>Databases</h3>
            <div className="skills">
              {[
                "SQL Server",
                "T-SQL",
                "Stored Procedures",
                "Indexing",
                "Query Optimization",
                "Data Modeling",
              ].map((s) => (
                <span key={s} className="skill">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="skill-group">
            <h3>Cloud & AI</h3>
            <div className="skills">
              {[
                "Azure",
                "AWS",
                "Azure OpenAI",
                "Python agents",
                "FastAPI",
                "EC2",
                "S3",
                "IAM",
              ].map((s) => (
                <span key={s} className="skill">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="skill-group">
            <h3>Frontend</h3>
            <div className="skills">
              {["Angular", "TypeScript", "React", "HTML", "CSS"].map((s) => (
                <span key={s} className="skill">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="skill-group">
            <h3>Engineering tools</h3>
            <div className="skills">
              {[
                "Git",
                "GitHub",
                "Postman",
                "Swagger",
                "Unit Testing",
                "CI/CD",
              ].map((s) => (
                <span key={s} className="skill">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Chapter>

      <Chapter id="notes" num="04" title="Engineering notes">
        <p className="lead">
          Short lessons from production and agentic project work — not tutorial
          filler.
        </p>
        <div className="notes">
          <article className="note">
            <h3>When the API says success but the UI is empty</h3>
            <p>
              Trace the full path: request payload → mapping → stored procedure →
              interface flags. A “successful” write that never surfaces usually
              means the processing path diverged after the API returned 200.
            </p>
          </article>
          <article className="note">
            <h3>Latency wins from boring SQL</h3>
            <p>
              The ~30% service-order read improvement came from indexing and
              procedure shape — not a new cache layer. Measure the hot query,
              fix the plan, then re-check the same path.
            </p>
          </article>
          <article className="note">
            <h3>Agents that show their work</h3>
            <p>
              Portfolio agent demos keep a deterministic tool path and a visible
              trace so reviewers can follow quote → news → metrics or security →
              performance → style without needing an API key.
            </p>
          </article>
        </div>
      </Chapter>

      <Chapter id="contact" num="05" title="About & contact">
        <p className="lead">
          I&apos;m a software engineer focused on backend development, API design,
          and database-driven applications. My work involves building REST APIs,
          troubleshooting integration issues, improving SQL workflows, and
          understanding how services behave in production.
        </p>
        <p className="lead">
          I enjoy engineering problems that require careful debugging, clear data
          contracts, and practical trade-offs between reliability, performance,
          and maintainability.
        </p>

        <div className="meta-grid">
          <div className="meta-card">
            <h3>Education</h3>
            <p>B.Tech CSE · VIT Chennai (2021–2025) · CGPA 8.74/10</p>
          </div>
          <div className="meta-card">
            <h3>Certifications</h3>
            <p>AWS SAA · AWS Cloud Practitioner · Azure AZ-900 · Azure AI-900</p>
          </div>
          <div className="meta-card">
            <h3>Location</h3>
            <p>Bengaluru, India · open to Delhi NCR and remote India</p>
          </div>
          <div className="meta-card">
            <h3>Targeting</h3>
            <p>Software Engineer · .NET Backend · Full-Stack roles</p>
          </div>
        </div>

        <div className="contact-block">
          <p className="hero-kicker">05 / Get in touch</p>
          <h3 className="contact-title">Have a backend problem worth solving?</h3>
          <p className="lead">
            Interested in roles where backend reliability, API design, and database
            performance matter.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="mailto:vagishsharma1234@gmail.com">
              Email me ↗
            </a>
            <CopyEmail />
            <a
              className="btn"
              href="https://github.com/VagishSharma01"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <a
              className="btn"
              href="https://www.linkedin.com/in/vagish-sharma-531132283/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a className="btn" href="/Vagish_Sharma_Resume.pdf" download>
              Résumé ↓
            </a>
          </div>
        </div>

        <footer className="site-footer">
          <span>© {new Date().getFullYear()} Vagish Sharma</span>
          <span>
            <a href="https://github.com/VagishSharma01" target="_blank" rel="noreferrer">
              GitHub
            </a>
            {" · "}
            <a
              href="https://www.linkedin.com/in/vagish-sharma-531132283/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </span>
        </footer>
      </Chapter>
    </div>
  );
}
