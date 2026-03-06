import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function CTABlock() {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <AnimatedSection className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="bg-surface rounded-2xl p-12 md:p-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-accent mb-4">
              Start a conversation
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-text-primary tracking-tight leading-[1.15]">
              Have a project?
              <br />
              Let&apos;s talk.
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-medium px-8 py-3.5 rounded-full transition-all duration-200 group shrink-0"
          >
            Get In Touch
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </AnimatedSection>
    </section>
  );
}
