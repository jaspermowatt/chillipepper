import type { Metadata } from "next";
import { PageHero } from "@/components/global/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { StatCounter } from "@/components/ui/StatCounter";
import { CTABlock } from "@/components/global/CTABlock";
import { Shield, Handshake, Eye, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Chilli Pepper Pte Ltd — Singapore-based mining exploration consultancy with decades of combined experience across all commodities.",
};

const values = [
  {
    icon: Shield,
    title: "Rigour",
    description:
      "Systematic, data-driven evaluation frameworks. Every assessment is built on thorough analysis, not assumptions.",
  },
  {
    icon: Handshake,
    title: "Alignment",
    description:
      "We succeed when our clients succeed. We measure ourselves by the quality of the decisions our advice enables, not by deal volume.",
  },
  {
    icon: Eye,
    title: "Independence",
    description:
      "Unbiased technical opinions with no conflicts of interest. Our clients get honest assessments, not what they want to hear.",
  },
  {
    icon: Globe,
    title: "Access",
    description:
      "Extensive network of geoscientists, laboratories, and operators across every major mining jurisdiction worldwide.",
  },
];

const stats = [
  { target: 50, suffix: "+", label: "Projects Evaluated" },
  { target: 75, suffix: "+", label: "Years Combined Experience" },
  { target: 30, suffix: "", label: "Jurisdictions Covered" },
  { target: 500, prefix: "$", suffix: "M+", label: "Transaction Value Advised" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Chilli Pepper"
        subtitle="Our Story"
        backgroundImage="https://images.unsplash.com/premium_photo-1702598727831-93feae9a362c?w=1600&h=800&fit=crop"
      />

      {/* Our Story */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <AnimatedSection>
                <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-accent mb-4">
                  Who We Are
                </p>
                <h2 className="text-3xl md:text-4xl font-light text-text-primary tracking-tight leading-[1.15]">
                  Built for depth,
                  <br />
                  not breadth
                </h2>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <AnimatedSection delay={0.1}>
                <p className="text-base text-text-muted leading-relaxed">
                  Founded in Singapore — a strategic hub connecting capital markets
                  with resource-rich jurisdictions worldwide — Chilli Pepper was
                  built on a simple conviction: the best mining investment decisions
                  come from the deepest technical understanding.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p className="text-base text-text-muted leading-relaxed">
                  We are a lean team of senior geoscientists and mining
                  professionals with decades of combined experience spanning major
                  miners, junior explorers, and investment advisory. Our backgrounds
                  cross every major commodity — gold, copper, lithium, nickel, rare
                  earths, bulk commodities, and more.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <p className="text-base text-text-muted leading-relaxed">
                  We are commodity-agnostic and jurisdiction-agnostic. What we are
                  not agnostic about is quality — of the geology, the data, the
                  people, and the opportunity.{" "}
                  <span className="text-text-primary">
                    Our small team size is a feature, not a limitation.
                  </span>
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-accent mb-4">
              Our Philosophy
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-text-primary tracking-tight leading-[1.15] mb-14">
              What we stand for
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <div className="p-6 rounded-xl border border-border hover:border-accent/20 transition-all duration-300 h-full">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                    <value.icon size={20} className="text-accent" />
                  </div>
                  <h3 className="text-base font-medium text-text-primary">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-muted leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
