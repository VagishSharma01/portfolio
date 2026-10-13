"use client";

import { motion } from "framer-motion";

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
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
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
    <div className="diagram" aria-label="Anonymized API flow diagram">
      <svg viewBox="0 0 640 220" role="img">
        <rect width="640" height="220" fill="#0c0f14" />
        <rect x="20" y="70" width="120" height="56" rx="4" fill="#171c25" stroke="#5ee1c5" />
        <text x="80" y="103" fill="#e4e7ee" fontSize="12" textAnchor="middle" fontFamily="monospace">
          Partner
        </text>
        <path d="M150 98 H210" stroke="#5ee1c5" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <rect x="220" y="40" width="200" height="116" rx="4" fill="#171c25" stroke="rgba(228,231,238,0.25)" />
        <text x="320" y="68" fill="#5ee1c5" fontSize="11" textAnchor="middle" fontFamily="monospace">
          .NET REST API
        </text>
        <text x="320" y="92" fill="#9aa3b5" fontSize="11" textAnchor="middle" fontFamily="monospace">
          Create · Patch · Get
        </text>
        <text x="320" y="116" fill="#9aa3b5" fontSize="11" textAnchor="middle" fontFamily="monospace">
          validation · mapping
        </text>
        <text x="320" y="140" fill="#9aa3b5" fontSize="11" textAnchor="middle" fontFamily="monospace">
          error contracts
        </text>
        <path d="M430 98 H490" stroke="#e0b07a" strokeWidth="1.5" />
        <rect x="500" y="70" width="120" height="56" rx="4" fill="#171c25" stroke="#e0b07a" />
        <text x="560" y="95" fill="#e4e7ee" fontSize="12" textAnchor="middle" fontFamily="monospace">
          SQL Server
        </text>
        <text x="560" y="113" fill="#9aa3b5" fontSize="10" textAnchor="middle" fontFamily="monospace">
          procs · indexes
        </text>
        <defs>
          <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6" fill="#5ee1c5" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}

const schemaSnippet = `CREATE TABLE users (
  user_id INTEGER AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(30) NOT NULL,
  bio VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE post (
  post_id INTEGER AUTO_INCREMENT PRIMARY KEY,
  user_id INTEGER NOT NULL,
  caption VARCHAR(200),
  created_at TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY(user_id) REFERENCES users(user_id)
);

CREATE TABLE comments (
  comment_id INTEGER AUTO_INCREMENT PRIMARY KEY,
  comment_text VARCHAR(255) NOT NULL,
  post_id INTEGER NOT NULL,
  user_id INTEGER NOT NULL,
  FOREIGN KEY(post_id) REFERENCES post(post_id),
  FOREIGN KEY(user_id) REFERENCES users(user_id)
);`;

export function Chapters() {
  return (
    <div>
      <motion.section
        id="hero"
        className="chapter"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="hero-kicker">Software Engineer · Bengaluru, India</p>
        <h1 className="hero-title">I build backend systems that work in production.</h1>
        <p className="hero-stack">C# · .NET · SQL Server · REST APIs · Azure</p>
        <p className="lead">
          Software engineer focused on reliable APIs, database performance, and
          cloud-connected applications. Experienced in debugging production
          issues, optimizing SQL workflows, and building enterprise integrations.
        </p>
        <div className="cta-row">
          <a className="btn btn-primary" href="#work">
            Explore projects ↗
          </a>
          <a className="btn" href="/Vagish_Sharma_Resume.pdf" download>
            Download resume ↓
          </a>
        </div>
        <p className="availability">
          Open to Software Engineer / .NET Backend / Full-Stack roles
        </p>
      </motion.section>

      <Chapter id="work" num="01" title="Selected projects">
        <p className="lead">
          Evidence first — problem, implementation, decisions, and links. Client
          work is described without confidential data.
        </p>

        <div className="projects">
          <article className="case">
            <div className="case-top">
              <h3>Enterprise Service-Order API</h3>
              <span className="case-meta">C# · .NET · SQL Server · REST</span>
            </div>
            <dl>
              <div>
                <dt>Problem</dt>
                <dd>
                  Partner channels needed a reliable way to create, update, and
                  retrieve service orders across API, database, and interface
                  configuration layers.
                </dd>
              </div>
              <div>
                <dt>Engineering</dt>
                <dd>
                  Designed and shipped Create, Patch, and Get REST endpoints with
                  field mapping, validation, and SQL Server stored-procedure
                  workflows for master data and batch paths.
                </dd>
              </div>
              <div>
                <dt>Key decision</dt>
                <dd>
                  Keep order-state transitions explicit in the API/DB boundary so
                  partner payloads follow one processing path instead of silent
                  UI/backend drift.
                </dd>
              </div>
              <div>
                <dt>Evidence</dt>
                <dd>
                  Reduced service-order query latency by ~30% through joins and
                  indexing work; resolved 50+ backend/integration defects across
                  API logic, SQL workflows, and interface flags (measured in
                  production triage / query timings on the service-order path).
                </dd>
              </div>
            </dl>
            <ApiDiagram />
            <div className="case-links">
              <a className="link" href="#experience">
                Experience detail
              </a>
              <a className="link" href="/Vagish_Sharma_Resume.pdf" download>
                Resume PDF
              </a>
            </div>
          </article>

          <article className="case">
            <div className="case-top">
              <h3>Flight Booking System</h3>
              <span className="case-meta">.NET Core · SQL Server · React · JWT</span>
            </div>
            <dl>
              <div>
                <dt>Problem</dt>
                <dd>
                  Build a booking backend with search, booking, and admin
                  operations, plus authenticated customer/admin access.
                </dd>
              </div>
              <div>
                <dt>Engineering</dt>
                <dd>
                  ASP.NET Web API + SQL Server for availability and bookings; React
                  client; JWT authentication with role-based authorization across
                  endpoints.
                </dd>
              </div>
              <div>
                <dt>Key decision</dt>
                <dd>
                  Push filtering/availability work into SQL so search stays
                  responsive under concurrent read patterns.
                </dd>
              </div>
              <div>
                <dt>Evidence</dt>
                <dd>
                  Portfolio case study from shipped coursework/product work —
                  stack and responsibilities match the resume. Full source not
                  public.
                </dd>
              </div>
            </dl>
            <div className="case-links">
              <a className="link" href="mailto:vagishsharma1234@gmail.com?subject=Flight%20Booking%20System">
                Request walkthrough
              </a>
              <a className="link" href="/Vagish_Sharma_Resume.pdf" download>
                Resume PDF
              </a>
            </div>
          </article>

          <article className="case">
            <div className="case-top">
              <h3>Database Engineering — Social Schema</h3>
              <span className="case-meta">SQL · T-SQL · modeling</span>
            </div>
            <dl>
              <div>
                <dt>Problem</dt>
                <dd>
                  Model a social product’s core entities so a frontend can plug in
                  without rewriting storage contracts.
                </dd>
              </div>
              <div>
                <dt>Engineering</dt>
                <dd>
                  Users, posts, media, likes, comments, hashtags, follows — DDL,
                  relationships, and query examples in a public repo.
                </dd>
              </div>
              <div>
                <dt>Key decision</dt>
                <dd>
                  Normalize engagement tables (likes/comments) so reads stay
                  composable and writes stay narrow.
                </dd>
              </div>
              <div>
                <dt>Evidence</dt>
                <dd>Real schema from the repository (excerpt below).</dd>
              </div>
            </dl>
            <div className="code-panel">
              <pre>{schemaSnippet}</pre>
            </div>
            <div className="case-links">
              <a
                className="link"
                href="https://github.com/VagishSharma01/SQL_Database"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="link"
                href="https://github.com/VagishSharma01/SQL_Database/blob/main/schema.sql"
                target="_blank"
                rel="noreferrer"
              >
                Full schema
              </a>
            </div>
          </article>

          <article className="case">
            <div className="case-top">
              <h3>AI Document Intelligence</h3>
              <span className="case-meta">Azure OpenAI · OCR · Python</span>
            </div>
            <dl>
              <div>
                <dt>Problem</dt>
                <dd>
                  Extract structured fields from messy PDFs, Word docs, and images
                  without manual re-keying.
                </dd>
              </div>
              <div>
                <dt>Engineering</dt>
                <dd>
                  OCR + Azure OpenAI pipeline with document-specific extraction /
                  summarization for invoices, resumes, and contracts.
                </dd>
              </div>
              <div>
                <dt>Key decision</dt>
                <dd>
                  Keep AI behind a clear extraction contract so backend consumers
                  get stable fields, not free-form model chatter.
                </dd>
              </div>
              <div>
                <dt>Evidence</dt>
                <dd>
                  Resume case study — demonstrates Azure AI integration into a
                  practical backend workflow. Source not public.
                </dd>
              </div>
            </dl>
            <div className="case-links">
              <a className="link" href="mailto:vagishsharma1234@gmail.com?subject=Document%20Intelligence">
                Request walkthrough
              </a>
              <a className="link" href="/Vagish_Sharma_Resume.pdf" download>
                Resume PDF
              </a>
            </div>
          </article>
        </div>

        <p className="more-projects">
          Other public experiments:{" "}
          <a href="https://github.com/VagishSharma01/Movie_App" target="_blank" rel="noreferrer">
            Movie App
          </a>
          ,{" "}
          <a
            href="https://github.com/VagishSharma01/Number_Plate_detection"
            target="_blank"
            rel="noreferrer"
          >
            Number Plate Detection
          </a>
          ,{" "}
          <a
            href="https://github.com/VagishSharma01/Art_Image_Classification"
            target="_blank"
            rel="noreferrer"
          >
            Art Classification
          </a>
          .
        </p>
      </Chapter>

      <Chapter id="experience" num="02" title="Experience">
        <div className="timeline">
          <article className="job">
            <div className="job-top">
              <h3>Enterprise warranty & service-order platform</h3>
              <time>Sep 2025 – Present</time>
            </div>
            <p className="job-role">Senior Software Engineer · ~1 YOE professional</p>
            <ul>
              <li>
                Developed and maintained partner-facing Create, Patch, and Get REST
                APIs using C# / .NET and SQL Server.
              </li>
              <li>
                Reduced service-order query latency by ~30% through stored-procedure
                and indexing improvements on master-data / batch paths.
              </li>
              <li>
                Resolved 50+ backend and integration defects across API logic,
                database workflows, and interface configuration.
              </li>
            </ul>
            <div className="challenge">
              <strong>Technical challenge:</strong> partner orders completed in the
              backend but failed to appear in the UI. Traced API → DB → interface
              flags, fixed origin-code / mapping issues and timezone windows so
              regional batches ran in the intended interval.
            </div>
          </article>

          <article className="job">
            <div className="job-top">
              <h3>Cloud architecture internship</h3>
              <time>Aug 2023 – Nov 2023</time>
            </div>
            <p className="job-role">AWS Solutions Architect Intern</p>
            <ul>
              <li>
                Led design and AWS deployment of a skill-sharing platform on EC2,
                S3, and IAM — architecture, access control, and launch.
              </li>
            </ul>
          </article>
        </div>
      </Chapter>

      <Chapter id="stack" num="03" title="Technical skills">
        <div className="skill-groups">
          <div className="skill-group">
            <h3>Backend</h3>
            <div className="skills">
              {["C#", ".NET Core", "ASP.NET Web API", "REST APIs", "JWT"].map((s) => (
                <span key={s} className="skill">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="skill-group">
            <h3>Data</h3>
            <div className="skills">
              {["SQL Server", "T-SQL", "Stored Procedures", "Indexing"].map((s) => (
                <span key={s} className="skill">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="skill-group">
            <h3>Cloud</h3>
            <div className="skills">
              {["Azure", "Azure OpenAI", "AWS", "EC2", "S3", "IAM"].map((s) => (
                <span key={s} className="skill">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="skill-group">
            <h3>Frontend & tools</h3>
            <div className="skills">
              {["React", "Angular", "Git", "Postman", "Swagger", "SonarQube"].map(
                (s) => (
                  <span key={s} className="skill">
                    {s}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
        <p className="lead">
          Certifications: AWS Solutions Architect – Associate · AWS Cloud
          Practitioner · Azure AZ-900 · Azure AI-900
        </p>
      </Chapter>

      <Chapter id="contact" num="04" title="About & contact">
        <p className="lead">
          B.Tech CSE, VIT Chennai (2021–2025), CGPA 8.74/10. Based in India —
          open to Bengaluru, Delhi NCR, and remote.
        </p>
        <div className="cta-row">
          <a className="btn btn-primary" href="/Vagish_Sharma_Resume.pdf" download>
            Download resume
          </a>
          <a className="btn" href="mailto:vagishsharma1234@gmail.com">
            vagishsharma1234@gmail.com
          </a>
          <a
            className="btn"
            href="https://www.linkedin.com/in/vagish-sharma-531132283/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="btn"
            href="https://github.com/VagishSharma01"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </Chapter>
    </div>
  );
}
