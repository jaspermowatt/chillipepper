"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-bg-primary/90 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="relative z-50 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-accent" />
          </div>
          <span className="text-sm font-medium tracking-wide text-text-primary">
            Chilli Pepper
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-4 py-2 text-[13px] tracking-wide rounded-full transition-all duration-200",
                pathname === link.href
                  ? "text-accent bg-accent/10"
                  : "text-text-muted hover:text-text-primary hover:bg-black/5"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-3 bg-accent hover:bg-accent-hover text-white text-[13px] font-medium px-5 py-2 rounded-full transition-all duration-200"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-full bg-black/5 text-text-primary"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-bg-primary/98 backdrop-blur-xl flex flex-col items-start justify-center px-10 lg:hidden"
          >
            <div className="space-y-2 w-full">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "block text-3xl font-light tracking-tight py-3 transition-colors",
                      pathname === link.href
                        ? "text-accent"
                        : "text-text-primary hover:text-accent"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10"
            >
              <Link
                href="/contact"
                className="inline-block bg-accent text-white font-medium px-8 py-3 rounded-full transition-all duration-200"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
