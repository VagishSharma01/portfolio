"use client";

import { motion, useReducedMotion } from "motion/react";
import { projects } from "@/lib/projects";
import { CopyEmail } from "@/components/CopyEmail";
import { CountUp } from "@/components/CountUp";
import { RequestFlow } from "@/components/RequestFlow";
import { TextReveal } from "@/components/TextReveal";
import {
  cardHover,
  easeExpo,
  easeOut,
  fadeUpSoft,
  sectionReveal,
  springSoft,
  staggerContainer,
  staggerFast,
  tapScale,
} from "@/lib/motion";

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
  const reduce = useReducedMotion();
  return (
    <motion.section
      id={id}
      className="chapter"
      {...(reduce
        ? {}
        : {
            initial: sectionReveal.initial,
            whileInView: sectionReveal.whileInView,
            viewport: sectionReveal.viewport,
            transition: sectionReveal.transition,
          })}
    >
      <div className="chapter-head">
        <TextReveal text={title} as="h2" inView delay={0.04} />
        <motion.span
          className="chapter-num"
          initial={reduce ? false : { opacity: 0, x: 8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: easeOut }}
        >
          {num}
        </motion.span>
      </div>
      {children}
    </motion.section>
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
  const reduce = useReducedMotion();
  return (
    <div className="diagram case-preview" role="img" aria-label={label}>
      <svg viewBox="0 0 640 120">
        <rect width="640" height="120" fill="#0a0a0a" />
        {steps.map((s, i) => {
          const x = 24 + i * (boxW + gap);
          return (
            <motion.g
              key={s}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.06 + i * 0.07, ease: easeExpo }}
            >
              {i > 0 ? (
                <motion.path
                  d={`M${x - gap} 60 H${x}`}
                  stroke="#ffffff"
                  strokeWidth="1.25"
                  initial={reduce ? false : { pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.1 + i * 0.07 }}
                />
              ) : null}
              <rect
                x={x}
                y="34"
                width={boxW}
                height="52"
                rx="3"
                fill="#141414"
                stroke={i === steps.length - 1 ? "#a3a3a3" : "#292929"}
              />
              <text
                x={x + boxW / 2}
                y="65"
                fill="#ffffff"
                fontSize="11"
                textAnchor="middle"
                fontFamily="monospace"
              >
                {s}
              </text>
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}

function ProjectVisual({ slug }: { slug: string }) {
  if (slug === "service-order-api") return <RequestFlow />;
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
      <div className="code-panel case-preview" aria-label="SQL schema excerpt">
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
  const reduce = useReducedMotion();

  return (
    <div>
      <motion.section
        id="hero"
        className="chapter"
        aria-labelledby="hero-title"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <motion.p
          className="hero-kicker"
          initial={reduce ? false : { opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.05, ease: easeExpo }}
        >
          Vagish Sharma / Software Engineering · 00 — Profile
        </motion.p>

        <h1 id="hero-title" className="hero-title">
          <TextReveal
            text="I build backend systems"
            as="span"
            className="hero-title-line"
            delay={0.14}
          />
          <TextReveal
            text="that work in production."
            as="span"
            className="hero-title-line"
            delay={0.42}
          />
        </h1>

        <motion.p
          className="hero-stack"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.72, ease: easeExpo }}
        >
          C# / .NET / REST APIs / SQL SERVER / AZURE
        </motion.p>
        <motion.p
          className="lead"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.82, ease: easeExpo }}
        >
          Software engineer focused on reliable APIs, database performance, and
          enterprise integrations. I build and troubleshoot backend workflows,
          optimize SQL queries, and turn production issues into measurable
          improvements.
        </motion.p>
        <motion.div
          className="cta-row"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springSoft, delay: 0.94 }}
        >
          <motion.a
            className="btn btn-primary"
            href="#work"
            whileHover={reduce ? undefined : { y: -2 }}
            whileTap={reduce ? undefined : tapScale}
          >
            Explore selected work ↗
          </motion.a>
          <motion.a
            className="btn"
            href="/Vagish_Sharma_Resume.pdf"
            download
            whileHover={reduce ? undefined : { y: -2 }}
            whileTap={reduce ? undefined : tapScale}
          >
            Download résumé ↓
          </motion.a>
        </motion.div>
        <motion.div
          className="proof"
          aria-label="Proof points"
          initial={reduce ? false : "hidden"}
          animate="show"
          variants={reduce ? undefined : staggerContainer}
        >
          {[
            {
              value: (
                <>
                  <CountUp value={50} suffix="+" />
                </>
              ),
              label: "Backend / integration defects resolved",
            },
            {
              value: (
                <>
                  ~
                  <CountUp value={30} suffix="%" />
                </>
              ),
              label: "Service-order query latency reduction",
            },
            {
              value: ".NET",
              label: "Core engineering specialization",
            },
          ].map((item) => (
            <motion.div
              key={item.label}
              className="proof-item"
              variants={reduce ? undefined : fadeUpSoft}
            >
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <Chapter id="work" num="01" title="Selected work">
        <p className="lead">
          Evidence-driven projects — production backend work, public agent demos,
          and SQL engineering. Open a case study for architecture and decisions.
        </p>
        <motion.div
          className="projects"
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.08 }}
          variants={reduce ? undefined : staggerContainer}
        >
          {projects.map((p) => (
            <motion.article
              key={p.slug}
              className="case"
              variants={reduce ? undefined : fadeUpSoft}
              whileHover={reduce ? undefined : cardHover}
            >
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
              <div className="case-preview-wrap">
                <ProjectVisual slug={p.slug} />
              </div>
              <p className="highlight">
                <strong>Highlight — </strong>
                {p.highlight}
              </p>
              <div className="case-links">
                <motion.a
                  className="btn btn-primary btn-arrow"
                  href={`/work/${p.slug}`}
                  whileHover={reduce ? undefined : { x: 3 }}
                  transition={springSoft}
                >
                  Case study
                  <span aria-hidden>↗</span>
                </motion.a>
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
            </motion.article>
          ))}
        </motion.div>
      </Chapter>

      <Chapter id="experience" num="02" title="Experience">
        <motion.div
          className="timeline"
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          variants={reduce ? undefined : staggerContainer}
        >
          <motion.article className="job" variants={reduce ? undefined : fadeUpSoft}>
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
          </motion.article>

          <motion.article className="job" variants={reduce ? undefined : fadeUpSoft}>
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
          </motion.article>
        </motion.div>
      </Chapter>

      <Chapter id="stack" num="03" title="Technical stack">
        <p className="lead">
          Backend-first specialization — technologies I can discuss in an interview
          from real project and production work.
        </p>
        <motion.div
          className="skill-groups"
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={reduce ? undefined : staggerFast}
        >
          {(
            [
              {
                title: "Backend engineering",
                items: [
                  "C#",
                  "ASP.NET Core",
                  "ASP.NET Web API",
                  "REST APIs",
                  "Entity Framework",
                  "LINQ",
                  "JWT",
                ],
              },
              {
                title: "Databases",
                items: [
                  "SQL Server",
                  "T-SQL",
                  "Stored Procedures",
                  "Indexing",
                  "Query Optimization",
                  "Data Modeling",
                ],
              },
              {
                title: "Cloud & AI",
                items: [
                  "Azure",
                  "AWS",
                  "Azure OpenAI",
                  "Python agents",
                  "FastAPI",
                  "EC2",
                  "S3",
                  "IAM",
                ],
              },
              {
                title: "Frontend",
                items: ["Angular", "TypeScript", "React", "HTML", "CSS"],
              },
              {
                title: "Engineering tools",
                items: [
                  "Git",
                  "GitHub",
                  "Postman",
                  "Swagger",
                  "Unit Testing",
                  "CI/CD",
                ],
              },
            ] as const
          ).map((group) => (
            <motion.div
              key={group.title}
              className="skill-group"
              variants={reduce ? undefined : fadeUpSoft}
            >
              <h3>{group.title}</h3>
              <div className="skills">
                {group.items.map((s) => (
                  <motion.span
                    key={s}
                    className="skill"
                    whileHover={reduce ? undefined : { y: -2, borderColor: "#ffffff" }}
                    transition={springSoft}
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Chapter>

      <Chapter id="notes" num="04" title="Engineering notes">
        <p className="lead">
          Short lessons from production and agentic project work — not tutorial
          filler.
        </p>
        <motion.div
          className="notes"
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={reduce ? undefined : staggerContainer}
        >
          {(
            [
              {
                title: "When the API says success but the UI is empty",
                body: "Trace the full path: request payload → mapping → stored procedure → interface flags. A “successful” write that never surfaces usually means the processing path diverged after the API returned 200.",
              },
              {
                title: "Latency wins from boring SQL",
                body: "The ~30% service-order read improvement came from indexing and procedure shape — not a new cache layer. Measure the hot query, fix the plan, then re-check the same path.",
              },
              {
                title: "Agents that show their work",
                body: "Portfolio agent demos keep a deterministic tool path and a visible trace so reviewers can follow quote → news → metrics or security → performance → style without needing an API key.",
              },
            ] as const
          ).map((n) => (
            <motion.article
              key={n.title}
              className="note"
              variants={reduce ? undefined : fadeUpSoft}
              whileHover={reduce ? undefined : { y: -2, borderColor: "#ffffff" }}
              transition={springSoft}
            >
              <h3>{n.title}</h3>
              <p>{n.body}</p>
            </motion.article>
          ))}
        </motion.div>
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

        <motion.div
          className="meta-grid"
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={reduce ? undefined : staggerFast}
        >
          {(
            [
              {
                title: "Education",
                body: "B.Tech CSE · VIT Chennai (2021–2025) · CGPA 8.74/10",
              },
              {
                title: "Certifications",
                body: "AWS SAA · AWS Cloud Practitioner · Azure AZ-900 · Azure AI-900",
              },
              {
                title: "Location",
                body: "Bengaluru, India · open to Delhi NCR and remote India",
              },
              {
                title: "Targeting",
                body: "Software Engineer · .NET Backend · Full-Stack roles",
              },
            ] as const
          ).map((m) => (
            <motion.div
              key={m.title}
              className="meta-card"
              variants={reduce ? undefined : fadeUpSoft}
              whileHover={reduce ? undefined : { y: -2, borderColor: "#a3a3a3" }}
              transition={springSoft}
            >
              <h3>{m.title}</h3>
              <p>{m.body}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="contact-block">
          <p className="hero-kicker">05 / Get in touch</p>
          <TextReveal
            text="Have a backend problem worth solving?"
            as="h3"
            className="contact-title"
            inView
            delay={0.06}
          />
          <p className="lead">
            Interested in roles where backend reliability, API design, and database
            performance matter.
          </p>
          <div className="cta-row">
            <motion.a
              className="btn btn-primary"
              href="mailto:vagishsharma1234@gmail.com"
              whileHover={reduce ? undefined : { y: -2 }}
              whileTap={reduce ? undefined : tapScale}
            >
              Email me ↗
            </motion.a>
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
