import Link from "next/link";
import { Linkedin, ArrowUpRight } from "lucide-react";
import { navLinks, companyInfo } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-accent" />
              </div>
              <span className="text-sm font-medium tracking-wide text-text-primary">
                Chilli Pepper
              </span>
            </Link>
            <p className="mt-5 text-text-muted text-sm leading-relaxed max-w-sm">
              Singapore-based mining exploration consultancy. Technical rigour
              combined with commercial pragmatism across all commodities and
              jurisdictions.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-text-muted mb-5">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-text-primary text-sm transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-text-muted mb-5">
              Contact
            </p>
            <div className="space-y-3 text-sm text-text-muted">
              <p className="leading-relaxed">{companyInfo.address}</p>
              <a
                href={`mailto:${companyInfo.email}`}
                className="block hover:text-accent transition-colors"
              >
                {companyInfo.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            &copy; {new Date().getFullYear()} {companyInfo.name}
          </p>
          <a
            href={companyInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-text-muted hover:text-accent transition-colors"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
