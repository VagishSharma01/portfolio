"use client";

import { motion } from "framer-motion";

const rows = [
  {
    label: "Backend",
    value: "C# · .NET Core · ASP.NET Web API · REST",
  },
  {
    label: "Data",
    value: "SQL Server · T-SQL · Stored procedures · Indexing",
  },
  {
    label: "Cloud",
    value: "Azure · Azure OpenAI · AWS (EC2, S3, IAM)",
  },
  {
    label: "Frontend",
    value: "React · Angular",
  },
  {
    label: "Practice",
    value: "Git · Postman · Swagger · SonarQube · Agile delivery",
  },
];

export function Craft() {
  return (
    <section id="craft" className="relative px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-[1200px] gap-14 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <p className="eyebrow mb-4">Craft</p>
          <h2 className="display text-[clamp(2.2rem,5vw,3.6rem)]">
            Tools sharpened
            <span className="serif block text-[var(--accent)]">
              in production.
            </span>
          </h2>
          <p className="mt-6 max-w-md text-[var(--muted)]">
            Certified across AWS and Azure. Comfortable owning API contracts,
            SQL performance, and the messy middle of third-party integrations.
          </p>
          <p className="mt-8 font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.12em] text-[var(--warm)]">
            AWS SAA · AWS CCP · AZ-900 · AI-900
          </p>
        </div>

        <ul className="md:col-span-7">
          {rows.map((row, i) => (
            <motion.li
              key={row.label}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                delay: i * 0.06,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid grid-cols-[7rem_1fr] gap-4 border-t border-[var(--line)] py-5 last:border-b md:grid-cols-[9rem_1fr]"
            >
              <span className="font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.12em] text-[var(--accent)]">
                {row.label}
              </span>
              <span className="text-[1.05rem] text-[var(--ink)]">{row.value}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
