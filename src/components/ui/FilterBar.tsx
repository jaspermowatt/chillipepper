"use client";

import { cn } from "@/lib/utils";

interface FilterBarProps {
  categories: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export function FilterBar({
  categories,
  activeFilter,
  onFilterChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-10">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className={cn(
            "px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-200",
            activeFilter === category
              ? "bg-accent text-white"
              : "border border-border text-text-muted hover:text-text-primary hover:border-text-muted"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
