import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CaseBlock,
  CaseStudyMotion,
  CaseTitle,
} from "@/components/CaseStudyMotion";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Vagish Sharma`,
    description: project.outcome,
  };
}

export default async function WorkCaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="case-page">
      <CaseStudyMotion>
        <CaseBlock>
          <Link href="/#work" className="back">
            ← Back to selected work
          </Link>
        </CaseBlock>
        <CaseBlock>
          <p className="meta">{project.stack.join(" · ")}</p>
        </CaseBlock>
        <CaseTitle>{project.title}</CaseTitle>
        <CaseBlock>
          <p className="lead" style={{ marginTop: "1rem" }}>
            {project.outcome}
          </p>
        </CaseBlock>
        <CaseBlock>
          <p className="highlight" style={{ marginTop: "1rem" }}>
            <strong>Highlight — </strong>
            {project.highlight}
          </p>
        </CaseBlock>

        <CaseBlock>
          <section>
            <h2>Overview</h2>
            <p>{project.overview}</p>
          </section>
        </CaseBlock>
        <CaseBlock>
          <section>
            <h2>Problem</h2>
            <p>{project.problem}</p>
          </section>
        </CaseBlock>
        <CaseBlock>
          <section>
            <h2>Architecture</h2>
            <ul>
              {project.architecture.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </section>
        </CaseBlock>
        <CaseBlock>
          <section>
            <h2>Implementation</h2>
            <ul>
              {project.implementation.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </section>
        </CaseBlock>
        <CaseBlock>
          <section>
            <h2>Engineering decisions</h2>
            <ul>
              {project.decisions.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </section>
        </CaseBlock>
        <CaseBlock>
          <section>
            <h2>Challenges and trade-offs</h2>
            <ul>
              {project.challenges.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </section>
        </CaseBlock>
        <CaseBlock>
          <section>
            <h2>Evidence</h2>
            <ul>
              {project.evidence.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </section>
        </CaseBlock>
        <CaseBlock>
          <section>
            <h2>Links</h2>
            <div className="case-links">
              {project.links.map((l) => (
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
              <a className="btn btn-primary" href="/Vagish_Sharma_Resume.pdf" download>
                Résumé
              </a>
            </div>
          </section>
        </CaseBlock>
      </CaseStudyMotion>
    </main>
  );
}
