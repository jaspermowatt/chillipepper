"use client";

import Link from "next/link";
import { ArrowUpRight, Crosshair, FileSearch, Compass, TrendingUp } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import type { Service } from "@/types";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Crosshair,
  FileSearch,
  Compass,
  TrendingUp,
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Crosshair;

  return (
    <AnimatedSection delay={index * 0.1}>
      <Link
        href={`/services#${service.id}`}
        className="group block p-6 rounded-xl border border-border hover:border-accent/30 bg-transparent hover:bg-surface/50 transition-all duration-300 h-full"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
            <Icon size={20} className="text-accent" />
          </div>
          <ArrowUpRight
            size={16}
            className="text-text-muted opacity-0 group-hover:opacity-100 transition-opacity"
          />
        </div>
        <h3 className="text-base font-medium text-text-primary">
          {service.title}
        </h3>
        <p className="mt-2 text-sm text-text-muted leading-relaxed line-clamp-3">
          {service.description}
        </p>
      </Link>
    </AnimatedSection>
  );
}
