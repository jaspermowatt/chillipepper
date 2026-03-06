import { AnimatedSection } from "@/components/ui/AnimatedSection";

const partnerNames = [
  "Meridian Resources",
  "Atlas Mining Corp",
  "Pacific Metals",
  "Borneo Minerals",
  "Nordic Gold Partners",
  "Sahara Exploration",
  "Andes Copper Ltd",
  "Kalahari Resources",
  "Tasman Minerals",
  "Eurasia Mining Co",
];

export function LogoMarquee() {
  return (
    <section className="py-14 border-t border-border overflow-hidden">
      <AnimatedSection>
        <p className="text-center font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-text-muted mb-10">
          Trusted by industry leaders
        </p>
      </AnimatedSection>

      <div className="marquee-mask overflow-hidden">
        <div className="flex animate-marquee w-max">
          {[...partnerNames, ...partnerNames].map((name, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-10 flex items-center justify-center"
            >
              <span className="text-text-muted/30 hover:text-text-muted/60 transition-colors duration-300 text-base font-light tracking-wide whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
