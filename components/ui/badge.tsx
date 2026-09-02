import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "video" | "lesson" | "popular" | "neutral";
  size?: "sm" | "md";
}

export function Badge({
  className,
  variant = "video",
  size = "md",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    video: "bg-primary-100 text-primary-600 border border-primary-200/60",
    lesson: "bg-primary-100 text-primary-600 border border-primary-200/60",
    popular: "bg-primary-100 text-primary-600 border border-primary-200/60",
    neutral: "bg-neutral-100 text-neutral-700 border border-neutral-200",
  };

  const sizeStyles = {
    sm: "text-[10px] px-2 py-0.5 tracking-wider font-semibold",
    md: "text-xs px-2.5 py-1 tracking-wider font-semibold",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center uppercase rounded-[6px] select-none",
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
