"use client";

import { useState } from "react";
import { PageHero } from "@/components/global/PageHero";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { FilterBar } from "@/components/ui/FilterBar";
import { projects } from "@/data/projects";

const categories = [
  "All",
  "Uranium",
  "Tungsten",
  "Copper",
  "Gold",
  "Silver",
  "Rare Earths",
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.commodity === activeFilter);

  return (
    <>
      <PageHero
        title="Track Record"
        subtitle="Selected Projects"
        backgroundImage="https://images.unsplash.com/photo-1659291457360-13ef34276765?w=1600&h=800&fit=crop"
      />

      <section className="py-24 md:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FilterBar
            categories={categories}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-text-muted py-16">
              No projects found for this category.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
