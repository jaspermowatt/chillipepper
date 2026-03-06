"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const gridLines = Array.from({ length: 12 }, (_, i) => i);

export function HeroAnimation() {
  return (
    <section className="relative min-h-screen flex items-end pb-20 md:pb-28 overflow-hidden bg-bg-primary">
      {/* Subtle grid background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          {gridLines.map((i) => (
            <motion.line
              key={`h-${i}`}
              x1="0"
              y1={i * 70}
              x2="1200"
              y2={i * 70}
              stroke="#4a8c5c"
              strokeWidth="0.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: i * 0.08 }}
            />
          ))}
          {gridLines.map((i) => (
            <motion.line
              key={`v-${i}`}
              x1={i * 110}
              y1="0"
              x2={i * 110}
              y2="800"
              stroke="#4a8c5c"
              strokeWidth="0.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: i * 0.08 }}
            />
          ))}
        </svg>
        {/* Radial gradient fade */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-bg-primary)_70%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-10 pt-32">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.25em] text-accent mb-8"
        >
          Mining Exploration Consultancy &mdash; Singapore
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light text-text-primary leading-[1.02] tracking-tight max-w-5xl"
        >
          Where others see rock,
          <br />
          <span className="text-accent">we see opportunity</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-8 text-base md:text-lg text-text-muted max-w-lg leading-relaxed"
        >
          Technical rigour combined with commercial pragmatism. We evaluate,
          generate, and advance mining projects across all commodities and
          jurisdictions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-medium px-7 py-3.5 rounded-full transition-all duration-200 group"
          >
            Explore Our Work
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 border border-border hover:border-text-muted text-text-muted hover:text-text-primary font-medium px-7 py-3.5 rounded-full transition-all duration-200"
          >
            Learn More
          </Link>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-20 pt-8 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "50+", label: "Projects Evaluated" },
            { value: "75+", label: "Years Experience" },
            { value: "30", label: "Jurisdictions" },
            { value: "$500M+", label: "Value Advised" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl md:text-3xl font-light text-text-primary tracking-tight">
                {stat.value}
              </p>
              <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-text-muted mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
