"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <AnimatedSection delay={index * 0.08}>
      <div className="group rounded-xl border border-border hover:border-accent/20 overflow-hidden transition-all duration-300 bg-bg-secondary">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${project.imageUrl})` }}
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-accent bg-accent/10 px-2 py-1 rounded">
              {project.commodityTag}
            </span>
            <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.1em] text-text-muted">
              {project.stage}
            </span>
          </div>
          <h3 className="text-base font-medium text-text-primary">
            {project.name}
          </h3>
          <p className="text-sm text-text-muted mt-1">{project.location}</p>
          <p className="text-sm text-text-muted mt-3 leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.description}
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
