"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

interface StatCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

export function StatCounter({
  target,
  suffix = "",
  prefix = "",
  label,
  duration = 1.5,
}: StatCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min(
        (timestamp - startTime) / (duration * 1000),
        1
      );
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return (
    <div ref={ref}>
      <div className="text-3xl md:text-4xl font-light text-text-primary tracking-tight">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-text-muted mt-2">
        {label}
      </div>
    </div>
  );
}
