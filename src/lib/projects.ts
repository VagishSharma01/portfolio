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
    links: [
      { label: "Full case study", href: "/work/service-order-api" },
      { label: "Resume PDF", href: "/Vagish_Sharma_Resume.pdf" },
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
    slug: "document-intelligence",
    title: "Document Intelligence",
    outcome: "OCR + Azure OpenAI pipeline for structured extraction from messy documents.",
    stack: ["Python", "Azure OpenAI", "OCR"],
    overview:
      "Document-processing pipeline that extracts and classifies structured information from PDFs, Word files, and images for invoices, resumes, and contracts.",
    problem:
      "Manual review of unstructured documents is slow and error-prone; consumers need stable structured fields.",
    architecture: [
      "Document ingest (PDF / Word / image)",
      "OCR for text recovery from scans/images",
      "Azure OpenAI extraction / summarization per document type",
      "Structured field output for downstream systems",
    ],
    implementation: [
      "Document-specific extraction and summarization workflows.",
      "Automated structured-field extraction to reduce manual data entry.",
    ],
    decisions: [
      "Expose AI results through a clear extraction contract so backends get fields, not free-form prose.",
    ],
    challenges: [
      "Handling varied document layouts while keeping output schema stable.",
    ],
    evidence: [
      "Resume case study — Azure OpenAI + OCR + Python.",
      "Source not public — architecture walkthrough available on request.",
    ],
    links: [
      { label: "Full case study", href: "/work/document-intelligence" },
      {
        label: "Request walkthrough",
        href: "mailto:vagishsharma1234@gmail.com?subject=Document%20Intelligence",
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
