"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex items-end overflow-hidden pb-16 md:pb-24">
      {/* Background */}
      {backgroundImage ? (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-white/75" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-bg-secondary to-bg-primary" />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-10 pt-32">
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.2em] text-accent mb-6"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-text-primary leading-[1.05] tracking-tight max-w-4xl"
        >
          {title}
        </motion.h1>
      </div>
    </section>
  );
}
