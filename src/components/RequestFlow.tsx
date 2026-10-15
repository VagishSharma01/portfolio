"use client";

import { motion, useReducedMotion } from "motion/react";
import { easeOut, springSoft } from "@/lib/motion";

const nodes = [
  { id: "client", label: "Client", sub: "Partner", x: 28 },
  { id: "api", label: "REST API", sub: ".NET", x: 156 },
  { id: "logic", label: "Logic", sub: "Validate", x: 284 },
  { id: "sql", label: "SQL Server", sub: "Procs", x: 412 },
  { id: "res", label: "Response", sub: "200 OK", x: 540 },
];

/** Cinematic monochrome request path for the featured backend project. */
export function RequestFlow() {
  const reduce = useReducedMotion();

  return (
    <div
      className="diagram request-flow"
      role="img"
      aria-label="Request flow: Client to REST API to business logic to SQL Server to response"
    >
      <svg viewBox="0 0 660 220" className="request-flow-svg">
        <defs>
          <linearGradient id="rail" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#292929" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#292929" />
          </linearGradient>
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width="660" height="220" fill="#0a0a0a" />

        {/* Base rail */}
        <path d="M78 108 H582" stroke="#1f1f1f" strokeWidth="3" fill="none" />

        {!reduce ? (
          <motion.path
            d="M78 108 H582"
            stroke="url(#rail)"
            strokeWidth="1.75"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0.2 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.7, ease: easeOut, delay: 0.1 }}
          />
        ) : (
          <path d="M78 108 H582" stroke="#ffffff" strokeWidth="1.5" fill="none" />
        )}

        {/* Traveling request packet */}
        {!reduce ? (
          <>
            <motion.circle
              cy="108"
              r="6"
              fill="#ffffff"
              filter="url(#softGlow)"
              initial={{ cx: 78, opacity: 0 }}
              whileInView={{
                cx: [78, 582],
                opacity: [0, 1, 1, 0],
              }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 2.4,
                ease: "easeInOut",
                delay: 0.55,
                repeat: Infinity,
                repeatDelay: 1.1,
              }}
            />
            <motion.circle
              cy="108"
              r="11"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.25"
              initial={{ cx: 78, opacity: 0 }}
              whileInView={{
                cx: [78, 582],
                opacity: [0, 0.5, 0.5, 0],
              }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 2.4,
                ease: "easeInOut",
                delay: 0.55,
                repeat: Infinity,
                repeatDelay: 1.1,
              }}
            />
          </>
        ) : null}

        {nodes.map((n, i) => (
          <motion.g
            key={n.id}
            initial={reduce ? false : { opacity: 0, y: 14, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ ...springSoft, delay: 0.12 + i * 0.09 }}
          >
            <rect
              x={n.x}
              y="74"
              width="108"
              height="68"
              rx="4"
              fill="#141414"
              stroke={i === nodes.length - 1 ? "#a3a3a3" : "#ffffff"}
              strokeWidth="1.2"
            />
            {/* Active pulse ring on arrival */}
            {!reduce ? (
              <motion.rect
                x={n.x - 3}
                y="71"
                width="114"
                height="74"
                rx="5"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: [0, 0.55, 0] }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  delay: 0.7 + i * 0.28,
                  ease: easeOut,
                }}
              />
            ) : null}
            <text
              x={n.x + 54}
              y="104"
              fill="#ffffff"
              fontSize="12"
              textAnchor="middle"
              fontFamily="ui-monospace, monospace"
            >
              {n.label}
            </text>
            <text
              x={n.x + 54}
              y="122"
              fill="#737373"
              fontSize="10"
              textAnchor="middle"
              fontFamily="ui-monospace, monospace"
            >
              {n.sub}
            </text>
          </motion.g>
        ))}

        <motion.text
          x="330"
          y="198"
          fill="#737373"
          fontSize="11"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          Create · Patch · Get — validated field mapping into indexed SQL procedures
        </motion.text>
      </svg>
    </div>
  );
}
