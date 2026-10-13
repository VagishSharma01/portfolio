"use client";

import { motion } from "framer-motion";

const rows = [
  ["Backend", "C# · .NET Core · ASP.NET Web API · REST"],
  ["Data", "SQL Server · T-SQL · Stored procedures · Indexing"],
  ["Cloud", "Azure · Azure OpenAI · AWS (EC2, S3, IAM)"],
  ["Frontend", "React · Angular"],
  ["Delivery", "Git · Postman · Swagger · SonarQube"],
];

export function Craft() {
  return (
    <section id="practice" className="border-y border-[var(--line)] bg-[var(--paper-2)] px-5 md:px-10">
      <div className="mx-auto grid max-w-[1400px] gap-14 py-20 md:grid-cols-12 md:gap-10 md:py-28">
        <div className="md:col-span-5">
          <p className="eyebrow mb-4">Practice</p>
          <h2 className="display text-[clamp(2.4rem,5.5vw,4rem)]">
            A precise
            <span className="serif block text-[var(--accent)]">operating stack.</span>
          </h2>
          <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-[var(--ink-soft)]">
            Production instincts over checklist fluff. Certified on AWS and Azure;
            comfortable owning the contract, the query plan, and the edge cases
            between systems.
          </p>
          <p className="mt-8 font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.16em] text-[var(--warm)]">
            AWS SAA · AWS CCP · AZ-900 · AI-900
          </p>
        </div>

        <ul className="md:col-span-7">
          {rows.map(([label, value], i) => (
            <motion.li
              key={label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-[6.5rem_1fr] gap-4 border-t border-[var(--line)] py-6 last:border-b md:grid-cols-[8rem_1fr]"
            >
              <span className="font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.16em] text-[var(--accent)]">
                {label}
              </span>
              <span className="text-[1.08rem] text-[var(--ink)]">{value}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
