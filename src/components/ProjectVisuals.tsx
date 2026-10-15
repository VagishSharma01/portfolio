"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArchitectureWalkthrough } from "@/components/ArchitectureWalkthrough";
import { RequestFlow } from "@/components/RequestFlow";
import { easeExpo } from "@/lib/motion";

function AgentFlowDiagram({
  label,
  steps,
  caption,
}: {
  label: string;
  steps: string[];
  caption?: string;
}) {
  const w = 640;
  const gap = 12;
  const boxW = (w - 48 - gap * (steps.length - 1)) / steps.length;
  const reduce = useReducedMotion();
  return (
    <div className="diagram case-preview visual-story" role="img" aria-label={label}>
      <svg viewBox="0 0 640 148">
        <rect width="640" height="148" fill="#0a0a0a" />
        {steps.map((s, i) => {
          const x = 24 + i * (boxW + gap);
          return (
            <motion.g
              key={s}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.06 + i * 0.08, ease: easeExpo }}
            >
              {i > 0 ? (
                <motion.path
                  d={`M${x - gap} 56 H${x}`}
                  stroke="#ffffff"
                  strokeWidth="1.25"
                  initial={reduce ? false : { pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.12 + i * 0.08 }}
                />
              ) : null}
              <rect
                x={x}
                y="30"
                width={boxW}
                height="52"
                rx="3"
                fill="#141414"
                stroke={i === steps.length - 1 ? "#a3a3a3" : "#292929"}
              />
              <text
                x={x + boxW / 2}
                y="61"
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
        {caption ? (
          <text
            x="320"
            y="128"
            fill="#737373"
            fontSize="11"
            textAnchor="middle"
            fontFamily="monospace"
          >
            {caption}
          </text>
        ) : null}
      </svg>
    </div>
  );
}

function SchemaVisual() {
  return (
    <div className="code-panel case-preview visual-story" aria-label="SQL schema excerpt">
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

/** Shared project visuals for home cards and case-study pages. */
export function ProjectVisual({
  slug,
  variant = "card",
}: {
  slug: string;
  variant?: "card" | "case";
}) {
  if (slug === "service-order-api") {
    if (variant === "case") {
      return (
        <div className="case-visual-stack">
          <ArchitectureWalkthrough />
          <RequestFlow />
        </div>
      );
    }
    return <RequestFlow />;
  }
  if (slug === "pr-review-agents") {
    return (
      <AgentFlowDiagram
        label="Security, Performance, Style agents into Lead Reviewer"
        steps={["Security", "Perf", "Style", "Lead"]}
        caption="Specialists run in parallel → Lead Reviewer synthesizes one comment"
      />
    );
  }
  if (slug === "market-analyst-agent") {
    return (
      <AgentFlowDiagram
        label="Quote, news, metrics tools into briefing"
        steps={["Quote", "News", "Metrics", "Report"]}
        caption="ReAct loop with a visible tool trace in the demo UI"
      />
    );
  }
  if (slug === "doc-intel-agent") {
    return (
      <AgentFlowDiagram
        label="Plan, OCR, extract, validate, persist"
        steps={["Plan", "OCR", "Extract", "Validate"]}
        caption="Invoice fields validated before SQLite persistence"
      />
    );
  }
  if (slug === "sql-database") return <SchemaVisual />;
  if (slug === "flight-booking") {
    return (
      <AgentFlowDiagram
        label="Client to API to SQL with JWT"
        steps={["React", "Web API", "JWT", "SQL"]}
        caption="JWT + RBAC at the API layer · SQL-tuned availability"
      />
    );
  }
  return null;
}
