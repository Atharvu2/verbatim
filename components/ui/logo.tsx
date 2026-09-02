import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
}

export function Logo({ className, size = "md", showWordmark = true }: LogoProps) {
  const iconSizes = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  };

  const textSizes = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  };

  return (
    <div className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      <svg
        className={cn(iconSizes[size], "shrink-0")}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Left facet */}
        <path d="M4 6L16 28L12 6H4Z" fill="#35735E" />
        {/* Right facet */}
        <path d="M28 6L16 28L20 6H28Z" fill="#438E74" />
        {/* Center facet */}
        <path d="M12 6L16 28L20 6H12Z" fill="#6CAE91" />
      </svg>
      {showWordmark && (
        <span
          className={cn(
            textSizes[size],
            "font-serif tracking-tight text-neutral-900 font-normal leading-none"
          )}
        >
          Verbatim
        </span>
      )}
    </div>
  );
}
