"use client";

import { useState } from "react";
import { Linkedin, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import type { TeamMember } from "@/types";

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

export function TeamCard({ member, index }: TeamCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <AnimatedSection delay={index * 0.15}>
      <div
        className="rounded-xl border border-border hover:border-accent/20 overflow-hidden cursor-pointer group transition-all duration-300"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${member.imageUrl})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-transparent to-transparent" />
        </div>

        {/* Info */}
        <div className="p-5 bg-bg-secondary">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-medium text-text-primary">
                {member.name}
              </h3>
              <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.1em] text-accent mt-1">
                {member.role}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {member.linkedinUrl && (
                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-text-muted hover:text-accent transition-colors"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin size={16} />
                </a>
              )}
              <ChevronDown
                size={16}
                className={`text-text-muted transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-sm text-text-muted leading-relaxed mt-4 pt-4 border-t border-border">
                  {member.bio}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </AnimatedSection>
  );
}
