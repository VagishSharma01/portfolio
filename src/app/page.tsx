import { ScrambleText } from "@/components/ScrambleText";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Dock } from "@/components/Dock";

const skills = [
  "C#",
  ".NET Core",
  "ASP.NET Web API",
  "REST APIs",
  "SQL Server",
  "T-SQL",
  "Stored Procedures",
  "Azure",
  "Azure OpenAI",
  "AWS",
  "EC2",
  "S3",
  "IAM",
  "React",
  "Angular",
  "Git",
  "Postman",
  "Swagger",
  "SonarQube",
  "JWT",
  "Microservices",
];

function IconGitHub() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.73.5.5 5.84.5 12.26c0 5.2 3.29 9.6 7.86 11.15.58.12.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.71-3.88-1.58-3.88-1.58-.53-1.37-1.28-1.74-1.28-1.74-1.05-.74.08-.72.08-.72 1.16.08 1.77 1.22 1.77 1.22 1.03 1.81 2.7 1.29 3.36.99.1-.77.4-1.29.73-1.59-2.55-.3-5.23-1.32-5.23-5.86 0-1.29.44-2.35 1.17-3.18-.12-.3-.51-1.5.11-3.13 0 0 .96-.32 3.15 1.21a10.6 10.6 0 0 1 5.74 0c2.18-1.53 3.14-1.21 3.14-1.21.63 1.63.24 2.83.12 3.13.73.83 1.17 1.89 1.17 3.18 0 4.55-2.69 5.56-5.25 5.85.41.37.78 1.09.78 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.69.8.56A11.78 11.78 0 0 0 23.5 12.26C23.5 5.84 18.27.5 12 .5Z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 1-.02 5.001A2.5 2.5 0 0 1 4.98 3.5ZM3.5 8.98h2.98V20.5H3.5V8.98Zm5.36 0H11.7v1.57h.04c.45-.85 1.56-1.75 3.21-1.75 3.43 0 4.06 2.26 4.06 5.2v6.5h-2.98v-5.76c0-1.37-.02-3.14-1.91-3.14-1.91 0-2.2 1.49-2.2 3.03v5.87H8.86V8.98Z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="6" width="17" height="12" rx="2" />
      <path d="m4.5 8 7.5 5 7.5-5" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <main id="top" className="page">
        <div className="avatar" aria-hidden>
          VS
        </div>

        <h1>
          <ScrambleText text="Vagish Sharma" /> — Backend Software Engineer
          <br />
          Open to roles in Bengaluru / Delhi NCR / Remote India
        </h1>

        <div className="actions">
          <a
            className="chip-btn primary"
            href="mailto:vagishsharma1234@gmail.com?subject=Resume%20request"
          >
            Request resume
          </a>
          <a
            className="chip-btn"
            href="https://github.com/VagishSharma01"
            target="_blank"
            rel="noreferrer"
          >
            <IconGitHub /> GitHub
          </a>
          <a
            className="chip-btn"
            href="https://www.linkedin.com/in/vagish-sharma-531132283/"
            target="_blank"
            rel="noreferrer"
          >
            <IconLinkedIn /> LinkedIn
          </a>
          <a className="chip-btn" href="mailto:vagishsharma1234@gmail.com">
            <IconMail /> Email
          </a>
        </div>

        <div className="bio">
          <p>
            Backend engineer (~1 YOE) building C# / .NET REST APIs and SQL Server
            systems for enterprise partner workflows. I care about clear contracts,
            fast queries, and integrations that behave the same in prod as they do
            in Postman.
          </p>
          <p>
            Certified AWS Solutions Architect – Associate, plus Azure fundamentals.
            Outside work I sharpen system design and ship small public projects.
            Open to full-time Backend / Software Engineer roles.
          </p>
        </div>

        <section id="skills" className="section">
          <h2>Skills</h2>
          <div className="skills" style={{ marginTop: "0.85rem" }}>
            {skills.map((s) => (
              <span key={s} className="tag">
                {s}
              </span>
            ))}
          </div>
        </section>

        <Experience />
        <Projects />

        <div className="footer-social">
          <a
            href="https://github.com/VagishSharma01"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <IconGitHub />
          </a>
          <a
            href="https://www.linkedin.com/in/vagish-sharma-531132283/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <IconLinkedIn />
          </a>
          <a href="mailto:vagishsharma1234@gmail.com" aria-label="Email">
            <IconMail />
          </a>
        </div>
      </main>

      <Dock />
    </>
  );
}
