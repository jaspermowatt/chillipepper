import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center" : "text-left"
      )}
    >
      {eyebrow && (
        <span className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-light text-text-primary leading-[1.1] tracking-tight",
          eyebrow && "mt-4"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-text-muted text-base leading-relaxed",
            align === "center" ? "max-w-2xl mx-auto" : "max-w-xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
