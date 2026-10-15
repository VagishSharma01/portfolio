"use client";

import { motion, useReducedMotion } from "motion/react";

const nodes = [
  { id: "client", label: "Client", x: 36 },
  { id: "api", label: "REST API", x: 168 },
  { id: "logic", label: "Business logic", x: 300 },
  { id: "sql", label: "SQL Server", x: 432 },
  { id: "res", label: "Response", x: 564 },
];

/** Animated request path for the featured service-order backend. */
export function RequestFlow() {
  const reduce = useReducedMotion();

  return (
    <div
      className="diagram request-flow"
      role="img"
      aria-label="Request flow: Client to REST API to business logic to SQL Server to response"
    >
      <svg viewBox="0 0 640 200" className="request-flow-svg">
        <rect width="640" height="200" fill="#0a0a0a" />

        <path
          d="M86 100 H554"
          stroke="#292929"
          strokeWidth="2"
          fill="none"
        />

        {!reduce ? (
          <motion.path
            d="M86 100 H554"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0.35 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 1.45, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          />
        ) : (
          <path d="M86 100 H554" stroke="#ffffff" strokeWidth="1.5" fill="none" />
        )}

        {!reduce ? (
          <motion.circle
            cy="100"
            r="5"
            fill="#ffffff"
            initial={{ cx: 86, opacity: 0 }}
            whileInView={{
              cx: [86, 554],
              opacity: [0, 1, 1, 0],
            }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{
              duration: 2.1,
              ease: "easeInOut",
              delay: 0.45,
              repeat: Infinity,
              repeatDelay: 1.25,
            }}
          />
        ) : null}

        {nodes.map((n, i) => (
          <motion.g
            key={n.id}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
          >
            <rect
              x={n.x}
              y="72"
              width="100"
              height="56"
              rx="3"
              fill="#141414"
              stroke={i === nodes.length - 1 ? "#a3a3a3" : "#ffffff"}
              strokeWidth="1.25"
            />
            <text
              x={n.x + 50}
              y="105"
              fill="#ffffff"
              fontSize="11"
              textAnchor="middle"
              fontFamily="ui-monospace, monospace"
            >
              {n.label}
            </text>
          </motion.g>
        ))}

        <text
          x="320"
          y="178"
          fill="#737373"
          fontSize="11"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          Create · Patch · Get — validated mapping into SQL procedures
        </text>
      </svg>
    </div>
  );
}
