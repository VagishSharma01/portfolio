"use client";

import { useState } from "react";

const EMAIL = "vagishsharma1234@gmail.com";

export function CopyEmail() {
  const [msg, setMsg] = useState<string | null>(null);

  async function copy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setMsg("Email copied");
    } catch {
      setMsg("Copy failed — use Email me");
    }
    window.setTimeout(() => setMsg(null), 1800);
  }

  return (
    <>
      <button type="button" className="btn" onClick={copy}>
        Copy email
      </button>
      {msg ? (
        <div className="toast" role="status">
          {msg}
        </div>
      ) : null}
    </>
  );
}
