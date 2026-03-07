"use client";

import { useState, useRef, useCallback, type FormEvent } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react";

function generateChallenge() {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  return { a, b, answer: a + b };
}

export function ContactForm() {
  const [state, handleFormspree] = useForm("xqeyapjj");

  const [challenge, setChallenge] = useState(() => generateChallenge());
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaError, setCaptchaError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const resetCaptcha = useCallback(() => {
    setChallenge(generateChallenge());
    setCaptchaInput("");
    setCaptchaError(false);
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (parseInt(captchaInput, 10) !== challenge.answer) {
      setCaptchaError(true);
      resetCaptcha();
      return;
    }
    setCaptchaError(false);
    handleFormspree(e);
  }

  if (state.succeeded) {
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
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot — hidden from humans */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-text-muted mb-2">
            Name *
          </label>
          <input type="text" id="name" name="name" required className={inputClass} placeholder="Your name" />
          <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
        </div>
        <div>
          <label htmlFor="email" className="block font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-text-muted mb-2">
            Email *
          </label>
          <input type="email" id="email" name="email" required className={inputClass} placeholder="you@company.com" />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
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
          <option value="royalty">Royalty Valuation</option>
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
        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
      </div>

      {/* CAPTCHA */}
      <div className="rounded-lg border border-border p-4 bg-bg-secondary">
        <label htmlFor="captcha" className="block font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-text-muted mb-2">
          Verification — What is {challenge.a} + {challenge.b}? *
        </label>
        <input
          type="text"
          id="captcha"
          required
          value={captchaInput}
          onChange={(e) => setCaptchaInput(e.target.value)}
          className={`${inputClass} max-w-[120px]`}
          placeholder="?"
          autoComplete="off"
        />
        {captchaError && (
          <p className="flex items-center gap-1.5 text-red-500 text-xs mt-2">
            <AlertCircle size={12} />
            Incorrect answer. Please try again.
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover disabled:opacity-50 text-white font-medium text-sm px-7 py-3 rounded-full transition-all duration-200 group"
      >
        {state.submitting ? "Sending..." : "Send Message"}
        <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
      </button>
    </form>
  );
}
