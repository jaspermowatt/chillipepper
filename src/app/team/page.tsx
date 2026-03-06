import type { Metadata } from "next";
import { PageHero } from "@/components/global/PageHero";
import { TeamCard } from "@/components/ui/TeamCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the Chilli Pepper team — senior geoscientists and mining professionals with decades of combined experience.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        title="Our Team"
        subtitle="The People"
      />

      <section className="py-24 md:py-32 border-t border-border">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <AnimatedSection className="mb-16 max-w-2xl">
            <p className="text-base text-text-muted leading-relaxed">
              Our lean team structure is by design. Every engagement is led by
              experienced professionals who bring decades of hands-on geological
              and commercial expertise to your project.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl">
            {team.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
