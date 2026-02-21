"use client";

import { useState, useEffect } from "react";
import type { CountdownTime } from "@/lib/types";

const EVENT_DATE = new Date("2026-05-06T09:00:00+00:00").getTime();

function getTimeLeft(): CountdownTime {
  const diff = Math.max(0, EVENT_DATE - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function useCountdown() {
  const [time, setTime] = useState<CountdownTime | null>(null);

  useEffect(() => {
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return time ?? { days: 0, hours: 0, minutes: 0, seconds: 0 };
}
