import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function PhilosophySection() {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left label */}
          <div className="lg:col-span-4">
            <AnimatedSection>
              <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-accent mb-4">
                Our Approach
              </p>
              <h2 className="text-3xl md:text-4xl font-light text-text-primary tracking-tight leading-[1.15]">
                Conviction grows the deeper you dig
              </h2>
            </AnimatedSection>
          </div>

          {/* Right content */}
          <div className="lg:col-span-8">
            <AnimatedSection delay={0.1}>
              <p className="text-lg text-text-muted leading-relaxed">
                Chilli Pepper is a Singapore-based mining exploration
                consultancy built on the principle that the best investment
                decisions come from the deepest technical understanding. We are
                commodity-agnostic and jurisdiction-agnostic — but we are never
                agnostic about quality.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="mt-6 text-lg text-text-muted leading-relaxed">
                We are a lean team of senior geoscientists and mining
                professionals. No layers, no juniors doing the real work —
                direct access to experienced practitioners who have evaluated
                projects across every major commodity and jurisdiction.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Technical Rigour",
                    desc: "Data-driven evaluation frameworks built on decades of field experience.",
                  },
                  {
                    title: "Commercial Pragmatism",
                    desc: "We assess geology in the context of markets, development pathways, and investment return.",
                  },
                  {
                    title: "Aligned Interests",
                    desc: "Independent advice with no conflicts. Your success is the only measure of ours.",
                  },
                  {
                    title: "Global Network",
                    desc: "Deep connections across geoscientists, labs, and operators in every major mining jurisdiction.",
                  },
                ].map((item) => (
                  <div key={item.title} className="py-4 border-t border-border">
                    <p className="text-sm font-medium text-text-primary">
                      {item.title}
                    </p>
                    <p className="text-sm text-text-muted mt-1.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
