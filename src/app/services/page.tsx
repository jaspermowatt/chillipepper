import type { Metadata } from "next";
import { PageHero } from "@/components/global/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTABlock } from "@/components/global/CTABlock";
import { services } from "@/data/services";
import { Crosshair, FileSearch, Compass, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our services — exploration targeting, due diligence, exploration management, and strategic advisory across all commodities.",
};

const iconMap: Record<string, LucideIcon> = {
  Crosshair,
  FileSearch,
  Compass,
  TrendingUp,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="What We Do"
        backgroundImage="https://images.unsplash.com/premium_photo-1663047762281-a1ad75d824aa?w=1600&h=800&fit=crop"
      />

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Crosshair;

            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                <AnimatedSection>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 py-16 border-t border-border">
                    {/* Number + Icon */}
                    <div className="lg:col-span-3">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                          <Icon size={20} className="text-accent" />
                        </div>
                        <span className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-text-muted">
                          0{i + 1}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-9">
                      <h2 className="text-2xl md:text-3xl font-light text-text-primary tracking-tight leading-[1.15]">
                        {service.title}
                      </h2>

                      <p className="mt-5 text-base text-text-muted leading-relaxed max-w-2xl">
                        {service.description}
                      </p>

                      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.bullets.map((bullet) => (
                          <div
                            key={bullet}
                            className="flex items-start gap-3 py-2"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                            <span className="text-sm text-text-muted leading-relaxed">
                              {bullet}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            );
          })}
        </div>
      </section>

      <CTABlock />
    </>
  );
}
