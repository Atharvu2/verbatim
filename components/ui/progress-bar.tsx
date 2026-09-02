import React from "react";
import { cn } from "@/lib/utils";

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number; // 0 to 100
  max?: number;
  showLabel?: boolean;
  labelSuffix?: string;
  size?: "sm" | "md" | "lg";
}

export function ProgressBar({
  value,
  max = 100,
  showLabel = true,
  labelSuffix = "complete",
  size = "md",
  className,
  ...props
}: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, Math.round((value / max) * 100)));

  const heightStyles = {
    sm: "h-1.5",
    md: "h-2",
    lg: "h-3",
  };

  return (
    <div
      className={cn("flex items-center gap-3 w-full", className)}
      role="progressbar"
      aria-valuenow={percentage}
      aria-valuemin={0}
      aria-valuemax={100}
      {...props}
    >
      <div
        className={cn(
          "w-full bg-neutral-200 rounded-full overflow-hidden flex-1",
          heightStyles[size]
        )}
      >
        <div
          className="bg-primary-500 h-full rounded-full transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-xs font-medium text-neutral-700 shrink-0 select-none">
          <strong className="font-semibold text-neutral-900">{percentage}%</strong>{" "}
          {labelSuffix}
        </span>
      )}
    </div>
  );
}
