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
      <div className="group rounded-xl border border-border hover:border-accent/20 overflow-hidden transition-all duration-300 bg-bg-secondary h-full">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${project.imageUrl})` }}
          />
          <div className="absolute inset-0 bg-black/10" />
          {/* Stage badge */}
          <div className="absolute top-3 right-3">
            <span
              className={`font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.1em] px-2.5 py-1 rounded-full ${
                project.stage === "Divested"
                  ? "bg-white/90 text-text-primary"
                  : project.stage === "Active"
                    ? "bg-accent/90 text-white"
                    : "bg-earth/90 text-white"
              }`}
            >
              {project.stage}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-accent bg-accent/10 px-2 py-1 rounded">
              {project.commodityTag}
            </span>
          </div>
          <h3 className="text-base font-medium text-text-primary">
            {project.name}
          </h3>
          <p className="text-sm text-text-muted mt-1">{project.location}</p>
          {project.partner && project.partner !== "—" && (
            <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.1em] text-text-muted mt-2">
              {project.stage === "Divested" ? "→" : "with"} {project.partner}
            </p>
          )}
          <p className="text-sm text-text-muted mt-3 leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.description}
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
