"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { easeExpo, springSoft } from "@/lib/motion";

const stages = [
  {
    id: "client",
    label: "Partner client",
    mono: "01",
    detail:
      "Partner systems submit Create, Patch, and Get payloads for service orders over HTTPS.",
  },
  {
    id: "api",
    label: ".NET REST API",
    mono: "02",
    detail:
      "Endpoints validate contracts, map partner fields, and keep state transitions explicit.",
  },
  {
    id: "logic",
    label: "Business logic",
    mono: "03",
    detail:
      "Origin codes, interface flags, and timezone windows decide the processing path.",
  },
  {
    id: "sql",
    label: "SQL Server",
    mono: "04",
    detail:
      "Indexed stored procedures serve hot service-order reads — ~30% lower query latency.",
  },
  {
    id: "out",
    label: "Visible outcome",
    mono: "05",
    detail:
      "API success and UI-visible state stay aligned — no silent divergence after 200 OK.",
  },
];

type Props = {
  /** Delay before autoplay starts (ms). */
  startDelay?: number;
  className?: string;
};

/**
 * Signature interaction: step through the production request path.
 * Auto-advances in view; click/focus any stage to take control.
 */
export function ArchitectureWalkthrough({
  startDelay = 400,
  className,
}: Props) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (reduce || paused || !inView) return;
    let tick = 0;
    const kick = window.setTimeout(() => {
      tick = window.setInterval(() => {
        setActive((i) => (i + 1) % stages.length);
      }, 2200);
    }, startDelay);
    return () => {
      window.clearTimeout(kick);
      window.clearInterval(tick);
    };
  }, [reduce, paused, inView, startDelay]);

  const current = stages[active];

  return (
    <motion.div
      className={`arch-walk${className ? ` ${className}` : ""}`}
      onViewportEnter={() => setInView(true)}
      onViewportLeave={() => setInView(false)}
      viewport={{ amount: 0.35 }}
      aria-label="Interactive architecture walkthrough: partner client through SQL to visible outcome"
    >
      <div className="arch-walk-head">
        <p className="arch-kicker">Signature system · Service-order path</p>
        <p className="arch-hint">
          {reduce
            ? "Architecture layers"
            : paused
              ? "Paused — click a stage"
              : "Auto-playing — click a stage to explore"}
        </p>
      </div>

      <div className="arch-stages" role="tablist" aria-label="Architecture stages">
        {stages.map((s, i) => {
          const on = i === active;
          return (
            <motion.button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={on}
              className={`arch-stage${on ? " is-active" : ""}`}
              onClick={() => {
                setActive(i);
                setPaused(true);
              }}
              whileHover={reduce ? undefined : { y: -2 }}
              transition={springSoft}
            >
              <span className="arch-stage-mono">{s.mono}</span>
              <span className="arch-stage-label">{s.label}</span>
              {on && !reduce ? (
                <motion.span
                  className="arch-stage-bar"
                  layoutId="arch-bar"
                  transition={springSoft}
                />
              ) : (
                <span className={`arch-stage-bar${on ? " is-on" : ""}`} />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Beam / path visualization */}
      <div className="arch-canvas" aria-hidden>
        <svg viewBox="0 0 640 88" className="arch-svg">
          <path
            d="M32 44 H608"
            stroke="#1f1f1f"
            strokeWidth="2"
            fill="none"
          />
          {!reduce ? (
            <motion.path
              d="M32 44 H608"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
              initial={false}
              animate={{ pathLength: (active + 1) / stages.length }}
              transition={{ duration: 0.55, ease: easeExpo }}
            />
          ) : (
            <path d="M32 44 H608" stroke="#737373" strokeWidth="1.5" fill="none" />
          )}
          {stages.map((s, i) => {
            const x = 32 + i * ((608 - 32) / (stages.length - 1));
            const on = i === active;
            const done = i <= active;
            return (
              <g key={s.id}>
                <motion.circle
                  cx={x}
                  cy={44}
                  r={on ? 9 : 6}
                  fill={done ? "#ffffff" : "#141414"}
                  stroke={done ? "#ffffff" : "#292929"}
                  strokeWidth="1.5"
                  animate={
                    reduce
                      ? undefined
                      : on
                        ? { scale: [1, 1.15, 1] }
                        : { scale: 1 }
                  }
                  transition={{ duration: 0.7, ease: easeExpo }}
                />
                {!reduce && on ? (
                  <motion.circle
                    cx={x}
                    cy={44}
                    r={16}
                    fill="none"
                    stroke="#ffffff"
                    strokeOpacity={0.35}
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: [0, 0.5, 0] }}
                    transition={{ duration: 1.1, ease: easeExpo }}
                  />
                ) : null}
              </g>
            );
          })}
        </svg>
      </div>

      <div className="arch-detail" role="tabpanel" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={reduce ? false : { opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={reduce ? undefined : { opacity: 0, y: -8, filter: "blur(4px)" }}
            transition={{ duration: 0.45, ease: easeExpo }}
          >
            <p className="arch-detail-mono">
              {current.mono} — {current.label}
            </p>
            <p className="arch-detail-body">{current.detail}</p>
          </motion.div>
        </AnimatePresence>
        {!reduce ? (
          <button
            type="button"
            className="arch-resume"
            onClick={() => setPaused((p) => !p)}
          >
            {paused ? "Resume autoplay" : "Pause"}
          </button>
        ) : null}
      </div>
    </motion.div>
  );
}
