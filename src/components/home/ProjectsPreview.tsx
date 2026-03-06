import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/global/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { projects } from "@/data/projects";

export function ProjectsPreview() {
  const featured = projects.slice(0, 6);

  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Track Record"
            title="Selected Projects"
            description="A sample of projects across commodities and jurisdictions."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <AnimatedSection delay={0.3} className="mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-hover transition-colors group"
          >
            View all projects
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
