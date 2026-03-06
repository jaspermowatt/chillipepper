import { SectionHeading } from "@/components/global/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { services } from "@/data/services";

export function ServicesPreview() {
  return (
    <section className="py-24 md:py-32 bg-bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <AnimatedSection>
          <SectionHeading
            eyebrow="What We Do"
            title="Our Services"
            description="Technical excellence across the mining value chain — from grassroots exploration to board-level advisory."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
