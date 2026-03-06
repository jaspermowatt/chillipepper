"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setIsSubmitting(false);
  }

  if (isSubmitted) {
    return (
      <div className="py-16">
        <CheckCircle size={32} className="text-accent mb-4" />
        <h3 className="text-2xl font-light text-text-primary tracking-tight mb-2">
          Message sent
        </h3>
        <p className="text-text-muted text-sm">
          Thank you for reaching out. We&apos;ll be in touch shortly.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-transparent border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/40 focus:border-accent focus:ring-1 focus:ring-accent/30 outline-none transition-all";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-text-muted mb-2">
            Name *
          </label>
          <input type="text" id="name" name="name" required className={inputClass} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="block font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-text-muted mb-2">
            Email *
          </label>
          <input type="email" id="email" name="email" required className={inputClass} placeholder="you@company.com" />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-text-muted mb-2">
          Company
        </label>
        <input type="text" id="company" name="company" className={inputClass} placeholder="Your company" />
      </div>

      <div>
        <label htmlFor="subject" className="block font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-text-muted mb-2">
          Subject
        </label>
        <select id="subject" name="subject" className={inputClass}>
          <option value="general">General Inquiry</option>
          <option value="project">Project Submission</option>
          <option value="partnership">Partnership</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-text-muted mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder="Tell us about your project or inquiry..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover disabled:opacity-50 text-white font-medium text-sm px-7 py-3 rounded-full transition-all duration-200 group"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
        <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
      </button>
    </form>
  );
}
