"use client";

import { useEffect, useState } from "react";

function getMsUntilMidnight() {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  return midnight.getTime() - now.getTime();
}

function formatPart(ms: number) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { hours, minutes, seconds };
}

export default function CountdownTimer() {
  const [msLeft, setMsLeft] = useState<number | null>(null);

  useEffect(() => {
    setMsLeft(getMsUntilMidnight());
    const interval = setInterval(() => {
      setMsLeft(getMsUntilMidnight());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (msLeft === null) return null;

  const { hours, minutes, seconds } = formatPart(msLeft);
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="flex items-center gap-2 font-mono text-sm font-semibold tabular-nums">
      <span className="rounded bg-ink/90 px-2 py-1 text-white">{pad(hours)}</span>:
      <span className="rounded bg-ink/90 px-2 py-1 text-white">{pad(minutes)}</span>:
      <span className="rounded bg-ink/90 px-2 py-1 text-white">{pad(seconds)}</span>
    </div>
  );
}
