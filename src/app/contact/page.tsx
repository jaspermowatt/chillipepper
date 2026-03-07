import type { Metadata } from "next";
import { PageHero } from "@/components/global/PageHero";
import { ContactForm } from "@/components/ui/ContactForm";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { companyInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Chilli Pepper Pte Ltd. Reach out for project submissions, partnership inquiries, or general questions.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get in touch"
        subtitle="Contact"
      />

      <section className="py-24 md:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
              <AnimatedSection>
                <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-accent mb-4">
                  Send a message
                </p>
                <h2 className="text-2xl md:text-3xl font-light text-text-primary tracking-tight leading-[1.15] mb-10">
                  We&apos;d love to hear from you
                </h2>
                <ContactForm />
              </AnimatedSection>
            </div>

            {/* Details */}
            <div className="lg:col-span-5">
              <AnimatedSection delay={0.2}>
                <div className="space-y-8">
                  <div>
                    <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-accent mb-4">
                      Office
                    </p>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {companyInfo.address}
                    </p>
                  </div>

                  <div>
                    <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-accent mb-4">
                      Email
                    </p>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="text-sm text-text-muted hover:text-text-primary transition-colors"
                    >
                      {companyInfo.email}
                    </a>
                  </div>

                  {/* Map */}
                  <div className="rounded-xl overflow-hidden border border-border mt-4">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8!2d103.83!3d1.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTYnNDguMCJOIDEwM8KwNDknNDguMCJF!5e0!3m2!1sen!2ssg!4v1"
                      width="100%"
                      height="250"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Chilli Pepper office location"
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
