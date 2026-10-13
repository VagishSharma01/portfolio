export type Project = {
  slug: string;
  title: string;
  outcome: string;
  stack: string[];
  featured?: boolean;
  overview: string;
  problem: string;
  architecture: string[];
  implementation: string[];
  decisions: string[];
  challenges: string[];
  evidence: string[];
  links: { label: string; href: string; external?: boolean }[];
  highlight: string;
};

export const projects: Project[] = [
  {
    slug: "service-order-api",
    title: "Enterprise Service-Order Platform",
    outcome: "Partner Create / Patch / Get APIs with SQL performance work and integration hardening.",
    stack: ["C#", ".NET", "SQL Server", "REST APIs"],
    featured: true,
    overview:
      "Backend work on an enterprise warranty and service-order platform: partner-facing REST APIs, SQL Server workflows, and integration debugging across API, database, and interface configuration.",
    problem:
      "Partner channels needed reliable order create/update/read paths. Failures often spanned layers — API mapping, stored procedures, and interface flags — so UI and backend could disagree about whether an order existed.",
    architecture: [
      "Partner clients → .NET REST API (Create / Patch / Get)",
      "API validation and field mapping → SQL Server stored procedures / queries",
      "Interface configuration and integration flags controlling processing path",
      "Regional batch windows sensitive to timezone conversion correctness",
    ],
    implementation: [
      "Shipped Create, Patch, and Get endpoints for partner service-order submission and updates.",
      "SQL Server stored-procedure and indexing work on master-data retrieval, tax-master processing, and batch imports.",
      "Defect triage across Origin Code, field-mapping, and integration-flag issues so partner orders followed the intended path.",
    ],
    decisions: [
      "Keep state transitions explicit at the API/DB boundary so partner payloads cannot silently diverge from UI-visible state.",
      "Prefer indexed procedure paths for hot service-order reads over ad-hoc multi-join queries.",
    ],
    challenges: [
      "Orders completed in the backend but did not appear in the UI — traced API → DB → interface config, then fixed mapping/flags.",
      "Timezone conversion defects in order-processing APIs caused incorrect batch execution windows across regions.",
    ],
    evidence: [
      "~30% lower service-order query latency after stored-procedure and indexing improvements (measured on the service-order query path during optimization work).",
      "50+ backend/integration defects resolved across API, SQL, and interface configuration.",
    ],
    highlight: "~30% lower service-order query latency after stored-procedure and indexing work.",
    links: [
      { label: "Full case study", href: "/work/service-order-api" },
      { label: "Resume PDF", href: "/Vagish_Sharma_Resume.pdf" },
    ],
  },
  {
    slug: "pr-review-agents",
    title: "PR Review Agents",
    outcome: "Multi-agent PR reviewer: Security, Performance, Style → one Lead Reviewer comment.",
    stack: ["Python", "FastAPI", "Multi-agent", "GitHub Webhooks"],
    overview:
      "Event-driven multi-agent system that reviews pull requests with specialist agents and synthesizes a single actionable review comment. Ships with a flawed sample PR, CLI, web UI, and optional GitHub webhook posting.",
    problem:
      "PR feedback is scattered across checklists. Recruiters and teams want an autonomous review path that still surfaces severity and merge guidance clearly.",
    architecture: [
      "PR files (local sample or GitHub API) → specialist agents",
      "Security Agent · Performance Agent · Style Agent (parallel analysis)",
      "Lead Reviewer synthesizes findings into markdown",
      "Optional webhook posts the comment back to the PR",
    ],
    implementation: [
      "Deterministic analyzers for secrets, eval/exec, nested loops, SQL anti-patterns, and style hygiene.",
      "Lead Reviewer severity rollup with merge recommendation.",
      "Optional OpenAI enrichment when OPENAI_API_KEY is set; mock mode works with zero keys.",
    ],
    decisions: [
      "Keep specialist findings deterministic so demos stay reproducible without LLM spend.",
      "Use the LLM only to preface/enrich the lead summary, never to invent unsupported vulns.",
    ],
    challenges: [
      "Balancing noisy style findings against signal — capped and de-duplicated style output.",
      "Webhook path needs GitHub token + secret; local/sample path remains the default demo.",
    ],
    evidence: [
      "Public repo with sample_pr/, CLI, FastAPI UI, and live Vercel demo.",
      "Sample run surfaces critical eval() + hardcoded secret findings.",
    ],
    highlight: "Deterministic specialist agents surface critical eval() and secret findings without an API key.",
    links: [
      { label: "Full case study", href: "/work/pr-review-agents" },
      {
        label: "Live demo",
        href: "https://pr-review-agents-five.vercel.app",
        external: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/VagishSharma01/pr-review-agents",
        external: true,
      },
    ],
  },
  {
    slug: "market-analyst-agent",
    title: "Market Analyst Agent",
    outcome: "Tool-calling research agent: live quote → news → metrics → investment briefing.",
    stack: ["Python", "FastAPI", "ReAct", "Yahoo Finance"],
    overview:
      "Single-agent ReAct loop that accepts a market query, chooses tools (quote, news, metrics), and returns a structured markdown briefing. Web UI shows the tool trace.",
    problem:
      "Static LLM answers go stale. The agent must fetch live market context and show which tools it called.",
    architecture: [
      "User query → planner (LLM or rule-based mock)",
      "Tools: get_stock_quote · get_company_news · calculate_metrics",
      "Observations fed back into the loop → final briefing",
    ],
    implementation: [
      "OpenAI tool-calling mode when a key is present; deterministic mock planner otherwise.",
      "Live Yahoo Finance chart/search APIs for quotes and headlines.",
      "CLI + FastAPI UI + JSON API deployed on Vercel.",
    ],
    decisions: [
      "Expose the full tool trace in the UI so the agent path is auditable.",
      "Fall back to mock planner on LLM failure so demos never hard-fail.",
    ],
    challenges: [
      "News search relevance varies by ticker — briefing labels sources clearly.",
      "Not financial advice; framed as research tooling.",
    ],
    evidence: [
      "Public repo + live demo at market-analyst-agent-smoky.vercel.app.",
      "Mock mode still hits live quote/news APIs.",
    ],
    highlight: "Visible ReAct tool trace: quote → news → metrics → markdown briefing.",
    links: [
      { label: "Full case study", href: "/work/market-analyst-agent" },
      {
        label: "Live demo",
        href: "https://market-analyst-agent-smoky.vercel.app",
        external: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/VagishSharma01/market-analyst-agent",
        external: true,
      },
    ],
  },
  {
    slug: "doc-intel-agent",
    title: "Document Intelligence Agent",
    outcome: "Agentic invoice pipeline: plan → OCR normalize → extract → validate → persist.",
    stack: ["Python", "FastAPI", "OCR", "SQLite"],
    overview:
      "Agentic document pipeline that plans extraction, normalizes text, pulls structured invoice fields, validates totals/line items, and stores the run. Portfolio upgrade of document-intelligence work with a public runnable demo.",
    problem:
      "Unstructured invoices need stable fields for downstream systems — with a clear agent path and validation, not a black-box prompt.",
    architecture: [
      "Document text / upload → Planner",
      "OCR normalize → Field extractor (rules or LLM)",
      "Schema validator → SQLite run memory",
      "Markdown report for each run",
    ],
    implementation: [
      "Rule-based extractor for offline demos; optional OpenAI JSON extraction.",
      "Validator checks vendor, invoice number, total, and line-item sum consistency.",
      "Persists runs to SQLite for simple agent memory.",
    ],
    decisions: [
      "Separate OCR cleanup from extraction so each step is testable.",
      "Fail validation loudly when line items disagree with total.",
    ],
    challenges: [
      "Layout variety — mock mode covers common invoice patterns; LLM mode improves messy text.",
      "Binary PDF OCR left as a production swap (Azure Document Intelligence / Tesseract).",
    ],
    evidence: [
      "Public repo + live demo; sample invoice extracts vendor, INV number, totals, line items.",
    ],
    highlight: "Validates line-item sums against invoice total before persisting the run.",
    links: [
      { label: "Full case study", href: "/work/doc-intel-agent" },
      {
        label: "Live demo",
        href: "https://doc-intel-agent.vercel.app",
        external: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/VagishSharma01/doc-intel-agent",
        external: true,
      },
    ],
  },
  {
    slug: "flight-booking",
    title: "Flight Booking System",
    outcome: "Booking backend with JWT/RBAC, search APIs, and SQL-tuned availability.",
    stack: [".NET Core", "ASP.NET Web API", "SQL Server", "React", "JWT"],
    overview:
      "End-to-end booking system: .NET Core / SQL Server backend for flight search, booking, and admin operations, plus a React client with JWT-based auth.",
    problem:
      "Need authenticated customer and admin flows for search, booking, and administration without leaking privileged operations.",
    architecture: [
      "React client → ASP.NET Web API",
      "JWT authentication with role-based authorization",
      "SQL Server for flights, bookings, and admin data",
      "Search/filter path optimized in SQL for availability reads",
    ],
    implementation: [
      "REST APIs for flight search, booking, and admin operations.",
      "JWT auth and RBAC across customer and admin endpoints.",
      "SQL query work for flight availability and filtering.",
    ],
    decisions: [
      "Push availability filtering into SQL so concurrent search stays responsive.",
      "Separate admin and customer authorization at the API layer, not only in the UI.",
    ],
    challenges: [
      "Keeping booking and search contracts clear under role-separated endpoints.",
      "Avoiding duplicate/failed booking ambiguity through explicit API validation paths.",
    ],
    evidence: [
      "Documented on resume with stack .NET Core, ASP.NET Web API, SQL Server, React, JWT.",
      "Source not public — walkthrough available on request.",
    ],
    highlight: "JWT + RBAC at the API layer with SQL-tuned availability search.",
    links: [
      { label: "Full case study", href: "/work/flight-booking" },
      {
        label: "Request walkthrough",
        href: "mailto:vagishsharma1234@gmail.com?subject=Flight%20Booking%20System",
        external: true,
      },
    ],
  },
  {
    slug: "sql-database",
    title: "SQL Database Engineering",
    outcome: "Relational social-product schema with DDL, relationships, and query examples.",
    stack: ["SQL", "T-SQL", "Data modeling"],
    overview:
      "Public database project modeling a social platform: users, posts, media, likes, comments, hashtags, follows — with schema DDL and query examples.",
    problem:
      "Design storage contracts a frontend can consume without rewriting core relationships later.",
    architecture: [
      "users → posts / media",
      "engagement tables: likes, comments",
      "graph-ish relations: follows, hashtags, bookmarks",
    ],
    implementation: [
      "Normalized DDL with foreign keys and constraints.",
      "Sample queries demonstrating entity relationships.",
      "ER diagram included in the repository.",
    ],
    decisions: [
      "Normalize engagement tables so writes stay narrow and reads stay composable.",
    ],
    challenges: [
      "Balancing media URL storage with relational clarity for posts and engagement.",
    ],
    evidence: [
      "Public repository with schema.sql, queries, and ER diagram.",
    ],
    highlight: "Normalized DDL with FKs, sample queries, and a public ER diagram.",
    links: [
      { label: "Full case study", href: "/work/sql-database" },
      {
        label: "GitHub",
        href: "https://github.com/VagishSharma01/SQL_Database",
        external: true,
      },
      {
        label: "Schema",
        href: "https://github.com/VagishSharma01/SQL_Database/blob/main/schema.sql",
        external: true,
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
