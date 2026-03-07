import type { Metadata } from "next";
import { PageHero } from "@/components/global/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTABlock } from "@/components/global/CTABlock";
import { Target, TrendingUp, FileSearch, Gem } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the Chilli Pepper team — entrepreneurial geologists and finance professionals with over three decades of combined experience.",
};

const strengths = [
  {
    icon: "Gem",
    title: "Geological Expertise",
    description:
      "Our geologists bring deep technical knowledge across precious metals, base metals, battery minerals, and bulk commodities — from grassroots exploration through to resource definition.",
  },
  {
    icon: "TrendingUp",
    title: "Financial Acumen",
    description:
      "Our finance professionals have valued and appraised mining royalties, streaming agreements, and early-stage equity positions across multiple jurisdictions and commodity cycles.",
  },
  {
    icon: "FileSearch",
    title: "Due Diligence & Appraisal",
    description:
      "We combine technical and commercial rigour to deliver independent project evaluations, royalty valuations, and investment-grade assessments that withstand scrutiny.",
  },
  {
    icon: "Target",
    title: "Entrepreneurial Approach",
    description:
      "We think like operators and investors, not just consultants. Every recommendation is grounded in what we would do with our own capital and reputation on the line.",
  },
];

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Gem,
  TrendingUp,
  FileSearch,
  Target,
};

export default function TeamPage() {
  return (
    <>
      <PageHero title="Our Team" subtitle="The People" />

      <section className="py-24 md:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left — Intro */}
            <div className="lg:col-span-5">
              <AnimatedSection>
                <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-accent mb-6">
                  Who We Are
                </p>
                <h2 className="text-2xl md:text-3xl font-light text-text-primary tracking-tight leading-[1.15] mb-6">
                  Entrepreneurial geologists &amp; finance professionals
                </h2>
              </AnimatedSection>
            </div>

            {/* Right — Body */}
            <div className="lg:col-span-7">
              <AnimatedSection delay={0.15}>
                <div className="space-y-5 text-base text-text-muted leading-relaxed">
                  <p>
                    Chilli Pepper is built around a tight-knit team of
                    entrepreneurial geologists and finance professionals who
                    bring over <strong className="text-text-primary font-medium">three decades of combined experience</strong> to
                    the mining and exploration sector.
                  </p>
                  <p>
                    Our team has spent careers identifying, analysing, and
                    working alongside early-stage exploration companies — from
                    first-pass target generation through to resource definition,
                    feasibility assessment, and strategic exit. We understand the
                    full lifecycle because we&apos;ve lived it.
                  </p>
                  <p>
                    Beyond conventional exploration consulting, our team holds
                    specialist expertise in{" "}
                    <strong className="text-text-primary font-medium">
                      royalty valuation and appraisal
                    </strong>
                    . We have assessed and structured mining royalties and
                    streaming arrangements across multiple commodities and
                    jurisdictions, providing independent, investment-grade
                    opinions that institutional investors and operators rely on.
                  </p>
                  <p>
                    We are deliberately lean. Every engagement is led by senior
                    professionals who are directly accountable for outcomes — no
                    layers, no hand-offs, no junior staff learning on your
                    project.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths Grid */}
      <section className="py-24 md:py-32 bg-bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection className="mb-14">
            <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-accent mb-4">
              What Sets Us Apart
            </p>
            <h2 className="text-2xl md:text-3xl font-light text-text-primary tracking-tight leading-[1.15] max-w-xl">
              Technical depth meets commercial pragmatism
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {strengths.map((item, i) => {
              const Icon = iconMap[item.icon];
              return (
                <AnimatedSection key={item.title} delay={i * 0.1}>
                  <div className="rounded-xl border border-border p-6 bg-surface h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon size={18} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="text-base font-medium text-text-primary mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-text-muted leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
