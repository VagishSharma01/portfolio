"use client";

import { useEffect, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

export function ScrambleText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const [out, setOut] = useState(text);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setOut(text);
      return;
    }

    let frame = 0;
    const total = Math.max(18, text.length * 2);
    const id = window.setInterval(() => {
      frame += 1;
      const progress = frame / total;
      setOut(
        text
          .split("")
          .map((ch, i) => {
            if (ch === " " || ch === "-" || ch === "," || ch === ".") return ch;
            if (i / text.length < progress) return text[i];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join(""),
      );
      if (frame >= total) {
        setOut(text);
        window.clearInterval(id);
      }
    }, 28);

    return () => window.clearInterval(id);
  }, [text]);

  return <span className={className}>{out}</span>;
}
